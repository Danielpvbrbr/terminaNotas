import React, { useContext } from "react";
import {
    Container,

} from "./styles";
import { BsJustify } from "react-icons/bs";

export default function Menu({
    width,
    isMenu,
    setRoute,
    route,
    setIsMenu,
    AuthContext,
    setDataRouter,
    setActive
}) {
    const { auth, signed } = useContext(AuthContext);

    const clear = () => {
        setDataRouter([]);
        setRoute('/Sweepstakes');
        setActive('Active');
    };

    return (
        <Container width={width < 500 ? 95 : 42}>
            {width < 500 ?
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
                </ul>
            }
        </Container>
    )
};