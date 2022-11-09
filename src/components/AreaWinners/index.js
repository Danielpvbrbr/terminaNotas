import React from "react";
import {
  Container,
  Logo,
  AreaLeft,
  ListWinners,
} from "./styles";
import logo from '../../Img/RódoVale.png';
import img1 from '../../Img/4091224332_1.webp';
import img2 from '../../Img/rig.jpg';
import LineWinners from '../LineWinners';

export default function AreaWinners() {
  return (
    <Container>
      <Logo src={logo} alt='logo' />
      <AreaLeft>
        <h4>Ganhadores</h4>
        <ListWinners>
          <LineWinners
            img={img1}
            title={'Luis Guilherme'}
            desc={'Ganhou Mini Teclado Wireless Tv Box Pc android Tv'}
            cota={85630}
            width={18}
            height={63}
          />
          <LineWinners
            img={img2}
            title={'Andre Henrique'}
            desc={'Ganhou Ring Light Iluminador Anel Luz 16cm 6 Polegadas'}
            cota={8330}
            width={18}
            height={63}
          />
        </ListWinners>
      </AreaLeft>
    </Container>

  )
};