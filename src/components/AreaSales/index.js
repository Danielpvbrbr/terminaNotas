import React, { useState } from 'react';
import { Container, Area, Info } from './styles';
import { BsChevronRight, BsChevronDown, BsExclamationCircle, } from "react-icons/bs";

export default function AreaSales({ key, data, width, privilege, widthMax }) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <Container key={key}>
      <Area width={width < widthMax ? '84vw' : '535px'}>
        <img src={data.img} alt='imagem-compras' />
        {privilege ?
          <section>
            <h4>{data.award}</h4>
            <p><span>Comprador:</span> {data.buyer}</p>
          </section>
          :
          <section>
            <h4>{data.award}</h4>
            <p><span>Cotas:</span> {data.numbers_cota.join()}</p>
          </section>
        }
        {!isOpen ?
          <BsChevronRight
            size={35}
            color='#00A3FF'
            cursor='pointer'
            onClick={() => setisOpen(!isOpen)}
          />
          :
          <BsChevronDown
            size={35}
            color='#00A3FF'
            cursor='pointer'
            onClick={() => setisOpen(!isOpen)}
          />
        }
      </Area>
      {isOpen &&
        <Info width={width < widthMax ? '84vw' : '535px'}>
          <section>
            <span> <BsExclamationCircle
              size={10}
              color='#CED4DA'
            /> Detalhes da sua compra</span>
          </section>

          <ul>
            <li><span>Comprador: </span> {data.buyer}</li>
            <li><span>CPF: </span>{data.CPF}</li>
            <li><span>Telefone: </span>{data.phone}</li>
            <li><span>Data/Hora: </span>{data.data_time}</li>
            <li><span>Valor total: </span>R${data.price}</li>
            <li><span>Cotas: </span>{data.numbers_cota.join()}</li>
          </ul>
        </Info>
      }

    </Container>
  )
};