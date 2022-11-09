import React, { useContext } from 'react';
import { Container } from './styles';

import AreaPubl from '../../components/AreaPubl';
import AreaSubPubl from '../../components/AreaSubPubl';

export default function AreaDoubt({ setActive, setDataRouter, setRoute, width, AuthContext }) {
  const { sweepstakes } = useContext(AuthContext);

  return (
    <Container width={width < 500 ? 95 : 42}>
      <h4>Inicio</h4>

      {sweepstakes.map((v, i) => 
        v.status === 'Active' &&
          <span key={i} >
            {
              v.topo ?
                <AreaPubl
                  data={v}
                  setDataRouter={setDataRouter}
                  setRoute={setRoute}
                  width={width}
                  AuthContext={AuthContext}
                  setActive={setActive}
                />
                :
                <AreaSubPubl
                  data={v}
                  setDataRouter={setDataRouter}
                  setRoute={setRoute}
                  width={width}
                  AuthContext={AuthContext}
                  setActive={setActive}
                />
            }
          </span>
      
      )}

    </Container>
  )
};