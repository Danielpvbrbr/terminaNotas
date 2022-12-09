import React, { useState } from 'react';
import { Container, LineOption } from './styles';
// import { BsChevronCompactDown, BsChevronCompactRight } from "react-icons/bs";

export default function Doubt({ width, widthMax }) {
  // const [isActive, setIsActive] = useState(0)

  const array = [{
    id: 1,
    title: 'Como ver meus números?',
    desc: 'Para ver os meus números  voçe vai na parte superior direira e clica em Acessar, e vai em  Compra, e clica na Seta'
  },
  {
    id: 2,
    title: 'Esqueci minha senha, como resolver?',
    desc: 'Você consegue recuperar sua senha indo no menu do site, depois em "Entrar" e logo a baixo tem "Esqueci minha senha" ou clicando aqui'
  },
  {
    id: 3,
    title: 'Preciso enviar o comprovante?',
    desc: 'Caso você tenha feito o pagamento via Pix QR Code ou copiando o código, não é necessário enviar o comprovante, aguardando até 5 minutos após o pagamento, o sistema irá dar baixa automaticamente, para mais dúvidas entre em contato conosco'
  },
  ]

  return (
    <Container>
      <h4>Perguntas frequentes</h4>
      {array.map((v, i) =>
        <LineOption
          key={i}
          width={width < widthMax ? '82vw' : '545px'}
        >
          <section>
            <h3>{v.title}</h3>
          </section>
          <div>
            <p>{v.desc}</p>
          </div>
        </LineOption>
      )}
    </Container>
  )
};