import React, { useContext } from "react";
import {
    Container,

} from "./styles";
import { BsJustify } from "react-icons/bs";

export default function Menu({
    width,
    widthMax,
    isMenu,
    setRoute,
    route,
    setIsMenu,
    AuthContext,
    setDataRouter,
    setActive,
    setIsForm,

}) {
    const { auth, signed } = useContext(AuthContext);

    const clear = () => {
        setDataRouter([]);
        setRoute('/Sweepstakes');
        setActive('Active');
    };

    return (
        <Container width={width < widthMax ? '90vw' : '560px'}>
            {width < widthMax ?
                <div>
                    <BsJustify color="#fff" size={28} onClick={() => setIsMenu(!isMenu)} />
                    <h3>Rodo<span>Vale</span></h3>
                </div>
                :
                <ul>
                    <li onClick={() => setRoute('/Home')} style={{ color: route === '/Home' ? '#00A3FF' : '#fff' }}>Inicio</li>
                    <li onClick={clear} style={{ color: route === '/Sweepstakes' ? '#00A3FF' : '#fff' }}>Sorteios</li>
                    <li onClick={() => setRoute('/Winners')} style={{ color: route === '/Winners' ? '#00A3FF' : '#fff' }}>Ganhadores</li>
                    {!(auth.privilege) &&
                        <li onClick={() => setRoute('/ContactUs')} style={{ color: route === '/ContactUs' ? '#00A3FF' : '#fff' }}>Fale Conosco</li>
                    }
                    {(auth.privilege && signed) &&
                        <>
                            <li onClick={() => setRoute('/Sales')} style={{ color: route === '/Sales' ? '#00A3FF' : '#fff' }}>Vendas</li>
                            <li onClick={() => setRoute('/UserList')} style={{ color: route === '/UserList' ? '#00A3FF' : '#fff' }}>Lista de usuário</li>
                        </>
                    }
                    <li onClick={() => setRoute('/Doubt')} style={{ color: route === '/Doubt' ? '#00A3FF' : '#fff' }}>Dúvida</li>
                    <li onClick={() => setRoute('/MyAccount')} style={{ color: route === '/MyAccount' ? '#00A3FF' : '#fff' }}>Minha conta</li>


                    {!signed && width < 950 &&
                        <li onClick={() => setIsForm(true)} style={{
                            color: '#fff',
                            background: '#00A3FF',
                            border: '1px solid #00A3FF',
                            borderRadius: '3px',
                            padding: '4px',
                            fontWeight: 300

                        }}>Acessar</li>
                    }
                </ul>
            }
        </Container>
    )
};