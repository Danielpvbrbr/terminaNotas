import React, { useContext } from 'react';
import { Container } from './styles';
import AreaSales from '../../components/AreaSales';

export default function Sales({ width, AuthContext }) {
  const { auth, purchasesFilter } = useContext(AuthContext);

  return (
    <Container>
      <h4>Solicitação de Compras recebidas</h4>

      {purchasesFilter.map((v, i) =>
        <AreaSales
          key={i}
          data={v}
          width={width}
          privilege={auth.privilege}
        />
      )}
    </Container>
  )
};