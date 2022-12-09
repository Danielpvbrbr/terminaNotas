import React, { useContext } from 'react';
import { Container, LineOption } from './styles';
import { BsChevronCompactRight, BsBoxArrowRight } from "react-icons/bs";

export default function MyAccount({ setRoute, width, widthMax, signed, setIsForm, AuthContext }) {
  const { auth, signOut } = useContext(AuthContext);

  const handleSend = (router) => {
    if (signed) {
      setRoute(router);
    } else {
      setIsForm(true);
    }
  };

  return (
    <Container>
      <h4>Dados do usuário</h4>

      <LineOption onClick={() => handleSend('/MyShopping')} width={width < widthMax ? '82vw' : '545px'}>
        <h3>Minhas compras</h3>
        <BsChevronCompactRight size={20} color='#23B0FF' />
      </LineOption>

      <LineOption onClick={() => handleSend('/MyData')} width={width < widthMax ? '82vw' : '545px'}>
        <h3>Atualizar cadastro</h3>
        <BsChevronCompactRight size={20} color='#23B0FF' />
      </LineOption>

      <LineOption onClick={() => setRoute('/Doubt')} width={width < widthMax ? '82vw' : '545px'}>
        <h3>Duvidas</h3>
        <BsChevronCompactRight size={20} color='#23B0FF' />
      </LineOption>
      {
        signed &&
        <LineOption onClick={signOut} width={width < widthMax ? '82vw' : '545px'}>
          <p>{auth && auth.name}</p>
          <BsBoxArrowRight size={20} color='#ff0000' />
        </LineOption>
      }


    </Container>
  )
};