import React, { useContext } from "react";
import {
  Container,
  Logo,
  AreaLeft,
  ListWinners,
  Line
} from "./styles";
import logo from '../../Img/RódoVale.png';
import img1 from '../../Img/4091224332_1.webp';
import img2 from '../../Img/rig.jpg';
import img3 from '../../Img/fone.jpg';
import LineWinners from '../LineWinners';

const data = [
  {
    img: img1,
    title: 'Andre Henrique',
    desc: 'Ganhou Mini Teclado Wireless Tv Box Pc android Tv',
    cota: '00001'
  },
  {
    img: img2,
    title: 'Luis Guilherme',
    desc: 'Ring Light Iluminador Anel Luz 16cm 6 Polegadas Com Tripé de Mesa ',
    cota: '00002'
  },
  {
    img: img3,
    title: 'Gabriel oliveira',
    desc: 'Fone de Ouvido On-Ear Sem Fio bluetooth jbl Tune 510BT Pure Bass 40h Bateria Preto',
    cota: '00003'
  }
];
export default function AreaWinners({ AuthContext }) {
  const {winners } = useContext(AuthContext);

  return (
    <Container>
      <Logo src={logo} alt='logo' />
      <AreaLeft>
        <h4>Ganhadores</h4>
        <ListWinners>
          {winners.map((v, i) =>
            <LineWinners
              key={i}
              img={v.img}
              title={v.name}
              desc={v.award}
              cota={v.cota}
              width={14}
              height={63}
            />
          )}
        </ListWinners>
      </AreaLeft>
    </Container>

  )
};