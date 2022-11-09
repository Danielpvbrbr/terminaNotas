import React from 'react';
import { Container } from './styles';

import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

export default function ViewProduct({ btnValue, setbtnValue }) {

  return (
    <Container>
      <BsDashCircle
        color={btnValue >= 6 ? '#00A3FF' : '#B7B7B7'}
        cursor='pointer'
        onClick={() => btnValue >= 6 ? setbtnValue(btnValue - 1) : setbtnValue(5)}
      />
      <input type='number' readOnly={true} value={btnValue} />
      <BsPlusCircle
        color={false ? '#B7B7B7' : '#00A3FF'}
        cursor='pointer'
        onClick={() => setbtnValue(btnValue + 1)}
      />
    </Container>
  )
};