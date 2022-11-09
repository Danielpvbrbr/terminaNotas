import React, { useState } from 'react';
import { Container, BtnAdd } from './styles';

export default function AreaAdd({ width, btnValue, setbtnValue, height }) {
  const [selected, setSelected] = useState(0);

  const handleSend = (val) => {
    setbtnValue(btnValue + val);
    setSelected(val);
  };

  return (
    <Container width={width}  height={height}>
      <BtnAdd selected={selected === 5} onClick={() => handleSend(5)}>+5</BtnAdd>
      <BtnAdd selected={selected === 25} onClick={() => handleSend(25)}>+25</BtnAdd>
      <BtnAdd selected={selected === 50} onClick={() => handleSend(50)}>+50</BtnAdd>
      <BtnAdd selected={selected === 100} onClick={() => handleSend(100)}>+100</BtnAdd>
      <BtnAdd selected={selected === 250} onClick={() => handleSend(250)}>+250</BtnAdd>
      <BtnAdd selected={selected === 500} onClick={() => handleSend(500)}>+500</BtnAdd>
    </Container>
  )
};