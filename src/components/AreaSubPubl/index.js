import React, { useContext } from 'react';
import { Container, AreaInfo } from './styles';
import { BsChevronRight, BsCheck2Square } from "react-icons/bs";

export default function AreaSubPubl({ setActive, data, setDataRouter, setRoute, width, AuthContext, widthMax }) {
  const { auth, signed } = useContext(AuthContext);

  const handleSubmit = (res) => {
    setDataRouter(res.data);
    setRoute(res.router);
    setActive('Add');
  };

  const Type = () => {
    // eslint-disable-next-line default-case
    switch (data.status) {
      case 'Concluded':
        return <button
          style={{ backgroundColor: '#343A40' }}>Concluído</button>
      case 'Active':
        return <button
          onClick={() => handleSubmit({
            data: data,
            router: '/ViewProduct'
          })}
          style={{ backgroundColor: '#00A3FF' }}>Adquira já1! R${data.price}</button>
      case 'Coming ':
        return <button>Em breve</button>
    }
  };

  return (
    <Container width={width < widthMax ? '82vw' : '550px'} >
      <img src={`data:image/jpeg;base64,${data.img}`} alt='imgCentral' />

      <AreaInfo>
        <h4>{data.title}</h4>

        <section>
          {
            Type()
          }
          <h3>{0}% Vendido</h3>
        </section>
      </AreaInfo>
      {
        (signed && auth.privilege) &&
        <BsCheck2Square
          size={25}
          cursor='pointer'
          onClick={() => handleSubmit({
            data: data,
            router: '/Sweepstakes'
          })} />
      }
      <BsChevronRight
        size={35}
        color='#00A3FF'
        cursor='pointer'
        onClick={() => handleSubmit({
          data: data,
          router: '/ViewProduct'
        })}
      />
    </Container>
  )
};