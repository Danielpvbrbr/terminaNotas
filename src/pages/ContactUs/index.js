import React from 'react';
import { Container, TextArea, AreaSocial } from './styles';
import { BsWhatsapp, BsEnvelopeFill } from "react-icons/bs";
import { FaTelegramPlane } from 'react-icons/fa';

export default function ContactUs({ width, widthMax }) {
  return (
    <Container>
      <h4>Fale Conosco</h4>
      <TextArea
        width={width < widthMax ? '82vw' : '545px'}
        placeholder='Digite sua mensagem...'
      />

      <AreaSocial width={width < widthMax ? '82vw' : '545px'}>
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