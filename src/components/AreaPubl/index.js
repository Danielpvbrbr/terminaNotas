import React, { useContext } from 'react';
import { Container, AreaInfo } from './styles';
import { BsCheck2Square } from "react-icons/bs";

export default function ProdutoView({
  data,
  setActive,
  setDataRouter,
  setRoute,
  width,
  AuthContext,
  widthMax
}) {
  const { signed, auth } = useContext(AuthContext);

  const sendData = (res) => {
    setDataRouter(res)
    setRoute('/ViewProduct');
  };

  const sendData2 = (res) => {
    setDataRouter(res);
    setRoute('/Sweepstakes');
    setActive('Add');
  };

  return (
    <Container width={width < widthMax ? '82vw' : '545px'}>
      <img src={data.img} alt='imgCentral' />
      <div>
        <h4>{data.title}</h4>
      </div>
      <AreaInfo>
        <h3>{0}% Vendido</h3>
        <section>
          <h3>R${data.price}</h3>
          {
            (auth.privilege && signed) && <BsCheck2Square size={25} onClick={() => sendData2(data)} cursor='pointer' />
          }
          <button onClick={() => sendData(data)}>Adquira já!</button>
        </section>
      </AreaInfo>
    </Container>
  )
};