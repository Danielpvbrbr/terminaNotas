/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import api from '../../services/api';
import veryAuth from '../veryAuth';

export default function userAuth(EL) {
    const [authenticated, setAuthenticated] = useState(false);
    const [leading, setLoading] = useState(true);
    const [myId, setMyId] = useState(null);
    const [auth, setAuth] = useState([]);
    const [fullUser, setFullUser] = useState([]);
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [data_Codig, setData_Codig] = useState([]);
    const [checking, setChecking] = useState(false);
    const [msgErr, setMsgErr] = useState({
        err: false,
        message: ''
    });

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
                EL.socket.emit('fullUser', myId);
                await api.post('/auth', { id: myId })
                    .then(res => {
                        console.log('Logado')
                        console.log(res)
                        setAuth(res.data);
                    }).catch(err => {
                        const { isAuth } = err.response.data;
                        if (!isAuth) {
                            console.log('Deslogar');
                            console.log(err.response.data)
                            setAuth([])
                            localStorage.clear();
                            setAuthenticated(false);
                            api.defaults.headers.common['x-access-token'] = undefined;
                            api.post('/logout');
                        };
                    });

                await EL.socket.on('fullUser', (data) => {
                    setFullUser(data.response);
                });
            };
        };
        Auth();
    }, [EL.socket, leading, myId]);


    async function signIn(data) {
        await api.post('/signIn', {
            phone: data.phone,
            password: data.password
        }).then(res => {
            const data = {
                token: res.data.token,
                id: 'LMNOPQRSTUVWXYZa' + res.data.id + 'ijklmn'
            };
            if (data.token) {
                storageUser(data);
                api.defaults.headers.common['x-access-token'] = res.data.token;
                setAuthenticated(res.data.auth);
                setIsSignIn(false);
            } else {
                console.log('err')
            }
        }).catch(err => {
            alert(err.response.data.message)
        })
    };

    function storageUser(data) {
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('id', JSON.stringify(data.id));
        window.location.reload();
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
            // setAuthenticated(res.data.auth);
        }).catch(err => {
            alert(err.response.data.message);
        })
    };

    async function updUsersAddres(data) {
        if (veryAuth(myId, setAuth, setAuthenticated)) {

            setChecking(true);
            await api.post('/updUsersAddres', data)
                .then(res => {
                    setChecking(false);
                    if (res.status === 200) {
                        setMsgErr({
                            err: false,
                            message: res.data.message
                        });
                    } else {
                        setMsgErr({
                            err: true,
                            message: res.data.message
                        });
                    }
                })
        };
    }

    function recoverPass(res) {
        setChecking(true);
        setMsgErr('');
        api.post('/RecoverPassword', {
            cod: res.cod,
            codV: res.codV,
            CPF: res.CPF,
            status: res.status,
            newPass: res.newPass,
            id: res.id
        }).then(res => {
            setMsgErr({
                err: false,
                message: res.data.message
            });
            setChecking(false);
            setData_Codig({
                message: res.data.message,
                status: res.data.response.status,
                cod: res.data.response.cod,
                email: res.data.response.email,
                id: res.data.response.id,
            })
        }).catch((err) => {
            setMsgErr({
                err: true,
                message: err.response.data.message
            });
            setChecking(false);
        })

    };

    async function signOut() {
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
        setIsSignUp,
        recoverPass,
        data_Codig,
        checking,
        msgErr,
        setMsgErr,
        fullUser,
        updUsersAddres,
        setAuth,
        setAuthenticated
    }

}
