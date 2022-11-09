import React from 'react';
import { Container } from './styles';
import Fone from '../../Img/fone.jpg';
import Rig from '../../Img/rig.jpg';
import AreaUsers from '../../components/AreaUsers';

export default function UserList({width}) {
  let pub = [
    {
      id: 0,
      name: 'Bruno Oliveira',
      CPF: '151.345.678-45',
      email: 'exemplo@exemplo.com',
      password: '10002121',
      phone: '(32)98892-6597',
      data_time: '12/05/2022 15:00',
      adress: {
        CEP: '390615000',
        road: 'Rual francisco jorge',
        number: 50,
        neighborhood: 'Nova zelandia',
        complement: 'Casa 2x',
        uf: 'MG',
        city: 'California',
        reference: 'Not'
      }
    },

  ];
  return (
    <Container>
      <h4>UserList</h4>
      {pub.map((v, i) =>
        <AreaUsers
          key={i}
          data={v}
          width={width }
        />
      )}

    </Container>
  )
};