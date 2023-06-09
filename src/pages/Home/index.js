import React, { useContext } from 'react';
import { Container } from './styles';

import AreaPubl from '../../components/AreaPubl';
import AreaSubPubl from '../../components/AreaSubPubl';

export default function AreaDoubt({
  setActive,
  setDataRouter,
  setRoute,
  width,
  widthMax,
  AuthContext
}) {
  const { sweepstakes } = useContext(AuthContext);

  return (
    <Container width={100}>
      <h4>Inicio</h4>

      {sweepstakes.map((v, i) =>
      // console.log(v.status)
        v.status === 'Active' &&
        <span key={i} >
          {
            v.topo ?
              <AreaPubl
                data={v}
                setDataRouter={setDataRouter}
                setRoute={setRoute}
                width={width}
                widthMax={widthMax}
                AuthContext={AuthContext}
                setActive={setActive}
              />
              :
              <AreaSubPubl
                data={v}
                setDataRouter={setDataRouter}
                setRoute={setRoute}
                width={width}
                widthMax={widthMax}
                AuthContext={AuthContext}
                setActive={setActive}
              />
          }
        </span>

      )}

    </Container>
  )
};