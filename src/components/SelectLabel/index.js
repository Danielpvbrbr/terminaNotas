import React from "react";
import {
  Container,
} from "./styles";

export default function SelectLabel({
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
  data
}) {

  return (
    <Container
      width={width}
      width2={width2}
      background={background}
      color={color}
      isIcon={isIcon}>
      <label>{label}</label>
      <span>
        {isIcon &&
          <Icon
            size={20}
            color='#B7B7B7'
            cursor='pointer'
          />
        }
        <select onChange={onChange} id="option" defaultValue={value} disabled={disabled}>
          {
            data.map((v, i) =>
              <option value={v} key={i}>{v}</option>
            )
          }
        </select>
      </span>
    </Container>
  )
};