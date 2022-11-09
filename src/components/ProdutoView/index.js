import React from 'react';
import { Container, AreaInfo } from './styles';
import ConvertReal from '../ConvertReal';

export default function ProdutoView({ dataRouter, width }) {

  return (
    <Container width={width < 500 ? 90 : 40}>
      <img src={`data:image/jpeg;base64,${dataRouter.img}`} alt='imgView' />
      <div>
        <h4>{dataRouter.title}</h4>
        <p>{dataRouter.description}</p>
      </div>
      <AreaInfo>
        <h3>{dataRouter.perc}</h3>
        <h3>{ConvertReal(dataRouter.price)}</h3>
      </AreaInfo>
    </Container>
  )
};