import React, { useState } from 'react';
import { Container, AreaIcone } from './styles';
import {
  BsUnlockFill,
  BsFillLockFill
} from "react-icons/bs";

import InputLabel from '../InputLabel';
import SelectLabel from '../SelectLabel';

export default function InputUsers({
  type,
  label,
  value,
  Icon,
  placeholder,
  onChange,
  width,
  width2,
  background,
  disabled,
  edit,
  isOption,
  data,
  setIsLock,
  widthMax
}) {
  const [isEdit, setIsEdit] = useState(false);

  const handleIsLock = (el) => {
    setIsEdit(el)
    setIsLock(el);
  };

  return (
    <Container width={width}>
      {isOption ?
        <SelectLabel
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          label={label}
          Icon={Icon}
          width={width}
          background={background}
          isIcon={false}
          disabled={disabled || !isEdit}
          data={data}
        />
        :
        <InputLabel
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          label={label}
          Icon={Icon}
          width={width}
          width2={width2}
          widthMax={widthMax}
          background={background}
          isIcon={true}
          disabled={disabled || !isEdit}
        />
      }

      {
        edit &&
        <AreaIcone>
          {isEdit ?
            <BsUnlockFill
              size={20}
              color='#ff0000'
              cursor='pointer'
              onClick={() => handleIsLock(!isEdit)}
            />
            :
            <BsFillLockFill
              size={20}
              color='#00A3FF'
              onClick={() => handleIsLock(!isEdit)}
            />
          }
        </AreaIcone>
      }
    </Container>
  )
};