import api from '../services/api';

export default async function veryAuth(myId, setAuth, setAuthenticated) {
    await api.post('/auth', { id: myId })
        .then(res => {
            setAuth(res.data);
        }).catch(err => {
            const { isAuth } = err.response.data;
            if (!isAuth) {
                alert('Acesso Expirado, Favor autenticar novamente')
                console.log('Deslogar');
                setAuth([])
                localStorage.clear();
                setAuthenticated(false);
                api.defaults.headers.common['x-access-token'] = undefined;
                api.post('/logout');
                window.location.reload();
            };
        });
};
