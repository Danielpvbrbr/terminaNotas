import React from 'react';
import { Container, TextArea, AreaSocial } from './styles';
import { BsWhatsapp, BsEnvelopeFill } from "react-icons/bs";
import { FaTelegramPlane } from 'react-icons/fa';

export default function ContactUs({ width }) {
  return (
    <Container>
      <h4>Fale Conosco</h4>
      <TextArea
        width={width < 500 ? 90 : 39}
        placeholder='Digite sua mensagem...'
      />

      <AreaSocial width={width < 500 ? 90 : 39}>
        <button>Enviar</button>
        ou
        <span>
          <BsWhatsapp size={25} color='#75F94C' cursor='pointer' />
          <FaTelegramPlane size={25} color='#63C4EA' cursor='pointer' />
          <BsEnvelopeFill size={25} color='#F2F2F2' cursor='pointer' />
        </span>
      </AreaSocial>
    </Container>
  )
};