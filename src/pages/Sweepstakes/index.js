import React, { useState, useContext } from 'react';
import { Container, AreaOption, Option } from './styles';
import { BsPlusCircle } from "react-icons/bs";
import AreaSubPubl from '../../components/AreaSubPubl';
import AddSweepstakes from '../AddSweepstakes';

export default function Sweepstakes({
  dataRouter,
  setDataRouter,
  active,
  setActive,
  setRoute,
  width,
  AuthContext,
  widthMax
}) {
  const { auth, sweepstakes, signed } = useContext(AuthContext);
  const filter = sweepstakes.filter(pers => pers.status === active);

  const handleSubmit = (res) => {
    setDataRouter(res);
    setActive('Add');
  };

  return (
    <Container >
      <h4>Sorteios</h4>
      <AreaOption width={width < widthMax ? '82vw' : '545px'}>
        <Option
          width={width < widthMax ? 102 : 115}
          onClick={() => setActive('Active')}
          bg={active === 'Active'}
          border={false}
          pos='left'
        >
          Ativos
        </Option>

        <Option
          width={width < widthMax ? 102 : 115}
          onClick={() => setActive('Concluded')}
          bg={active === 'Concluded'}
          border={true} pos='center'
        >
          Concluído
        </Option>

        <Option
          width={width < widthMax ? 102 : 115}
          onClick={() => setActive('Coming')}
          bg={active === 'Coming'}
          border={true}
          pos={!(signed && auth.privilege) ? 'left' : 'center'}
        >
          Em breve
        </Option>

        {auth.privilege &&
          <Option
            width={width < widthMax ? 102 : 115}
            onClick={() => setActive('Add')}
            bg={active === 'Add'}
            border={true}
            pos='left'
          >
            <BsPlusCircle cursor='pointer' color='#fff' size={25} />
          </Option>
        }
      </AreaOption>

      {active === 'Add' ?
        <AddSweepstakes
          width={width}
          widthMax={widthMax}
          AuthContext={AuthContext}
          data={dataRouter}
        />
        :
        <>
          {filter.map((v, i) =>
            <span key={i}>
              <AreaSubPubl
                data={v}
                width={width}
                widthMax={widthMax}
                AuthContext={AuthContext}
                setRoute={setRoute}
                setActive={'Add'}
                setDataRouter={handleSubmit}
              />
            </span>
          )}
        </>
      }
    </Container>
  )
};