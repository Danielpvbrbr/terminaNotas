import api from '../services/api';

export default async function veryAuth(myId, setAuth, setAuthenticated) {
    let isToken = false
    await api.post('/auth', { id: myId })
        .then(res => {
            setAuth(res.data);
            isToken = true;
        }).catch(err => {
            const { isAuth } = err.response.data;
            if (!isAuth) {
                isToken = false;
                alert('Acesso Expirado, Favor autenticar novamente')
                setAuth([])
                localStorage.clear();
                setAuthenticated(false);
                api.defaults.headers.common['x-access-token'] = undefined;
                api.post('/logout');
                window.location.reload();
            };
        });

    return isToken

};
