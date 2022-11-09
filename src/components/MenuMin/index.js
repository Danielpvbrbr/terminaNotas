import React, { useContext } from 'react';
import { Container, AreaForm, } from './styles';
import { BsX, BsBoxArrowRight } from "react-icons/bs";

export default function MenuMin({
  setIsMenu,
  setIsForm,
  width,
  setRoute,
  route,
  signed,
  AuthContext,
  setDataRouter,
  setActive
}) {
  const { auth, signOut } = useContext(AuthContext);

  const handleSend = (router) => {
    setRoute(router);
    setIsMenu(false);
  };

  const handleAction = (value) => {
    setIsForm(value);
    setIsMenu(false);
  };

  const clear = () => {
    setDataRouter([]);
    setRoute('/Sweepstakes');
    setActive('Active');
  };

  return (
    <Container>
      <AreaForm width={width} >
        <BsX size={40} color='#fff' onClick={() => setIsMenu(false)} />
        <ul>
          <li onClick={() => handleSend('/Home')} style={{ color: route === '/Home' ? '#00A3FF' : '#fff' }}>Inicio</li>
          <li onClick={clear} style={{ color: route === '/Sweepstakes' ? '#00A3FF' : '#fff' }}>Sorteios</li>
          {signed ?
            <>
              <li onClick={() => handleSend('/Sales')} style={{ color: route === '/Sales' ? '#00A3FF' : '#fff' }}>Vendas</li>
              <li onClick={() => handleSend('/UserList')} style={{ color: route === '/UserList' ? '#00A3FF' : '#fff' }}>Lista de usuário</li>
            </>
            :
            <>
              <li onClick={() => handleSend('/Winners')} style={{ color: route === '/Winners' ? '#00A3FF' : '#fff' }}>Ganhadores</li>
              <li onClick={() => handleSend('/ContactUs')} style={{ color: route === '/ContactUs' ? '#00A3FF' : '#fff' }}>Fale Conosco</li>
            </>
          }
          <li onClick={() => handleSend('/MyAccount')} style={{ color: route === '/MyAccount' ? '#00A3FF' : '#fff' }}>Minha conta</li>
          <li onClick={() => setRoute('/Doubt')} style={{ color: route === '/Doubt' ? '#00A3FF' : '#fff' }}>Dúvida</li>
          {signed ?
            <div>
              <p>{auth && auth.name}</p>
              <BsBoxArrowRight color="#B7B7B7" cursor='pointer' onClick={signOut} />
            </div>
            :
            <button onClick={() => handleAction(true)}>Acessar</button>
          }
        </ul>
      </AreaForm>
    </Container>
  )
};