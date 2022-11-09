import React, { useContext } from 'react';
import { Container, LineOption } from './styles';
import { BsChevronCompactRight } from "react-icons/bs";

export default function MyAccount({ setRoute, width, signed, setIsForm, AuthContext }) {
  // const { purchasesFilter } = useContext(AuthContext);

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

      <LineOption onClick={() => handleSend('/MyShopping')} width={width < 500 ? 90 : 40}>
        <h3>Minhas compras</h3>
        <BsChevronCompactRight size={20} color='#23B0FF' />
      </LineOption>

      <LineOption onClick={() => handleSend('/MyData')} width={width < 500 ? 90 : 40}>
        <h3>Atualizar cadastro</h3>
        <BsChevronCompactRight size={20} color='#23B0FF' />
      </LineOption>

      <LineOption onClick={() => setRoute('/Doubt')} width={width < 500 ? 90 : 40}>
        <h3>Duvidas</h3>
        <BsChevronCompactRight size={20} color='#23B0FF' />
      </LineOption>
    </Container>
  )
};