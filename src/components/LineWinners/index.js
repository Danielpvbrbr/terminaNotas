import React from "react";
import {
  Container,
} from "./styles";

export default function AreaWinners({ width, height, title, desc, img, cota }) {
  return (
    <Container width={width} height={height}>
      <div>
        <h4>{title}</h4>
        <p>{desc} <b>Cota: {cota}</b></p>
      </div>
      <img src={img} alt='img' />
    </Container>
  )
};