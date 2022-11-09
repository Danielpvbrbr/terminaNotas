import React, { useState } from 'react';
import { Container, LineOption } from './styles';
import { BsChevronCompactDown, BsChevronCompactRight } from "react-icons/bs";

export default function Doubt({ width }) {
  const [isActive, setIsActive] = useState(0)
  return (
    <Container>
      <h4>Perguntas frequentes</h4>

      <LineOption  onClick={() => setIsActive(1)} width={width < 500 ? 90 : 40}>
        <section>
          <h3>-{'>'} Como ver meus números?</h3>
          {isActive === 1  ?
            <BsChevronCompactDown size={20} color='#23B0FF' />
            :
            <BsChevronCompactRight size={20} color='#23B0FF' />
          }
        </section>
        {isActive === 1  &&
          <div>
            <p>Para ver os meus números  voçe vai na parte superior direira e clica em 'Acessar', e vai em  'Compras', e clica na "Seta"</p>
          </div>
        }
      </LineOption>

      <LineOption onClick={() => setIsActive(2)} width={width < 500 ? 90 : 40}>
        <section>
          <h3>-{'>'}  Esqueci minha senha, como resolver?</h3>
          {isActive === 2 ?
            <BsChevronCompactDown size={20} color='#23B0FF' />
            :
            <BsChevronCompactRight size={20} color='#23B0FF' />
          }
        </section>
        {isActive === 2  &&
          <div>
            <p>Você consegue recuperar sua senha indo no menu do site, depois em "Entrar" e logo a baixo tem "Esqueci minha senha" ou clicando aqui.</p>
          </div>
        }
      </LineOption>
      <LineOption onClick={() => setIsActive(3)} width={width < 500 ? 90 : 40}>
        <section>
          <h3>-{'>'}  Preciso enviar o comprovante?</h3>
          {isActive === 3 ?
            <BsChevronCompactDown size={20} color='#23B0FF' />
            :
            <BsChevronCompactRight size={20} color='#23B0FF' />
          }
        </section>
        {isActive === 3  &&
          <div>
            <p>Caso você tenha feito o pagamento via Pix QR Code ou copiando o código, não é necessário enviar o comprovante, aguardando até 5 minutos após o pagamento, o sistema irá dar baixa automaticamente, para mais dúvidas entre em contato conosco</p>
          </div>
        }
      </LineOption>
    </Container>
  )
};