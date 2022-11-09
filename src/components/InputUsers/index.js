import React, { useState } from 'react';
import { Container, AreaIcone } from './styles';
import {
  BsFillCloudCheckFill,
  BsPencilSquare
} from "react-icons/bs";
import InputLabel from '../InputLabel';

export default function InputUsers({ type, label, value, Icon, placeholder, onChange, width, background }) {

  const handleSubmit = () => {
    alert(value)
  };

  return (
    <Container width={width}>
      <InputLabel
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        label={label}
        Icon={Icon}
        width={width -2}
        background={background}
        isIcon={false}
      />
      <AreaIcone>
        {value.length > 0 ?
          <BsFillCloudCheckFill
            size={20}
            color='#CED4DA'
            cursor='pointer'
            onClick={handleSubmit}
          />
          :
          <BsPencilSquare
            size={20}
            color='#CCEDFF'

          />
        }
      </AreaIcone>

    </Container>
  )
};