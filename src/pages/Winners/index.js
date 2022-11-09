import React from 'react';
import { Container, AreaInfo } from './styles';
import Fone from '../../Img/fone.jpg';
import Rig from '../../Img/rig.jpg';
import TRE from '../../Img/4091224332_1.webp';
import AreaPubl from '../../components/AreaPubl';
import LineWinners from '../../components/LineWinners';

export default function Winners({ width }) {
  let pub = [
    {
      id: 0,
      img: Rig,
      name: 'Luis Guilherme',
      desc: 'Ring Light Iluminador Anel Luz 16cm 6 Polegadas Com Tripé de Mesa Kanko',
      cota: '00001',
    },
    {
      id: 0,
      img: TRE,
      name: 'Andre Henrique',
      desc: 'Mini Teclado Wireless Tv Box Pc android Tv Smart',
      cota: '00002',
    },
    {
      id: 0,
      img: Fone,
      name: 'Gabriel oliveira',
      desc: 'Fone de Ouvido On-Ear Sem Fio bluetooth jbl Tune 510BT Pure Bass 40h Bateria Preto',
      cota: '00003',

    }
  ]
  return (
    <Container>
      <h4>Ganhadores</h4>

      {pub.map((v, i) =>
        <span key={i}>
          <LineWinners
            img={v.img}
            title={v.name}
            desc={v.desc}
            cota={v.cota}
            width={width < 500 ? 90 : 39}
            height={63}
          />
        </span>
      )}
    </Container>
  )
};