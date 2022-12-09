import React from "react";
import {
  Container,
} from "./styles";

export default function App({
  name,
  label,
  type,
  value,
  onChange,
  width,
  width2,
  placeholder,
  Icon,
  background,
  isIcon,
  maxLength,
  disabled,
  color,
  readOnly,

}) {

  return (
    <Container
      width={width}
      width2={isIcon ? width2 : `${Number(width2.replace(/[^\d]+/g, '')) + 40}px`}
      background={background}
      color={color}
      isIcon={isIcon}>
      <label>{label}</label>
      <span>
        {isIcon &&
          <Icon
            size={18}
            color='#B7B7B7'
            cursor='pointer'
          />
        }

        <input
          type={type}
          onChange={onChange}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          name={name}
          readOnly={readOnly}
        />
      </span>
    </Container>
  )
};