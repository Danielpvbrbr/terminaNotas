/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function userAuth(EL) {
    const [authenticated, setAuthenticated] = useState(false);
    const [leading, setLoading] = useState(true);
    const [myId, setMyId] = useState(null);
    const [auth, setAuth] = useState([]);
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    useEffect(() => {
        if (EL.storage.myToken) {
            setAuthenticated(true);
            setMyId(getRandom(EL.storage.myId));
        };
        setLoading(false);
    }, [EL, EL.storage.myId, EL.storage.myToken]);

    function getRandom(max) {
        return max.replace(/\D+/g, '');
    };

    useEffect(() => {
        async function Auth() {
            if (!leading) {
                await api.post('/auth', { id: myId })
                    .then(res => {
                        setAuth(res.data);
                    }).catch(err => {
                        const { isAuth } = err.response.data;
                        if (!isAuth) {
                            localStorage.clear();
                            setAuthenticated(false);
                            api.defaults.headers.common['x-access-token'] = undefined;
                            api.post('/logout');
                        };
                    });
            };
        };
        Auth()
    }, [myId, leading]);

    async function signIn(data) {
        await api.post('/signIn', {
            phone: data.phone,
            password: data.password
        }).then(res => {
            const data = {
                token: res.data.token,
                id: 'LMNOPQRSTUVWXYZa' + res.data.id + 'ijklmn'
            };
            storageUser(data);
            api.defaults.headers.common['x-access-token'] = res.data.token;
            setAuthenticated(res.data.auth);
            setIsSignIn(false);
            window.location.reload();
        }).catch(err => {
            alert(err.response.data.message)
        })
    };

    async function storageUser(data) {
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('id', JSON.stringify(data.id));
    };

    async function signUp(data) {
        await api.post('/signUp', {
            name: data.name,
            CPF: data.CPF,
            email: data.email,
            phone: data.phone,
            password: data.password,
            logradouro: data.logradouro,
            CEP: data.CEP,
            number: data.number,
            neighborhood: data.neighborhood,
            complement: data.complement,
            uf: data.uf,
            city: data.city,
            reference: data.reference
        }).then(res => {
            const data = {
                token: res.data.token,
                id: 'LMNOPQRSTUVWXYZa' + res.data.id + 'ijklmn'
            };
            storageUser(data);
            setIsSignUp(false);
            api.defaults.headers.common['x-access-token'] = res.data.token;
            setAuthenticated(res.data.auth);
            window.location.reload();
        }).catch(err => {
            alert(err.response.data.message);
        })
    };

    function signOut() {
        localStorage.clear();
        setAuthenticated(false);
        api.defaults.headers.common['x-access-token'] = undefined;
        api.post('/logout');
        window.location.reload();
    };

    return {
        myId,
        auth,
        authenticated,
        leading,
        signIn,
        signUp,
        signOut,
        isSignIn,
        setIsSignIn,
        isSignUp,
        setIsSignUp
    }

}
