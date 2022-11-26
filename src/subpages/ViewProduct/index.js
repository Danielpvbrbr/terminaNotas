import React, { useState, useContext } from 'react';
import { Container, Area, BtnFinishing } from './styles';
import ProdutoView from '../../components/ProdutoView';
import InputNumber from '../../components/InputNumber';
import AreaAdd from '../../components/AreaAdd';
import getQuota from '../../services/getQuota';
import cvrtArray from '../../services/cvrtArray';
import CvrtReal from '../../services/CvrtReal';

export default function ViewProduct({ dataRouter, width, AuthContext }) {
  const { auth, signed, sendPurchases, setIsSignIn, purchases } = useContext(AuthContext);
  const [btnValue, setbtnValue] = useState(1);

  const Purchases = () => {
    const filter = purchases.filter(person =>
      person.id_award === dataRouter.id
    );
    const total = Number(dataRouter.price * btnValue).toFixed(2);

    if (signed) {
      sendPurchases({
        id_award: dataRouter.id,
        numbers_cota: getQuota(cvrtArray(filter), btnValue).join(),
        award: dataRouter.title,
        price: total,
        priceUnd: dataRouter.price,
        CPF: auth.CPF,
        phone: auth.phone,
        buyer: auth.name,
        img: dataRouter.img,
        qtd: btnValue
      })
    } else {
      setIsSignIn(true);
    }
  };

  return (
    <Container>
      <h4>Produto</h4>
      <ProdutoView dataRouter={dataRouter} width={width} />
      {dataRouter.status === 'Active' &&
        <Area width={width < 500 ? 90 : 40}>
          <h3>Selecione a quantidade de números</h3>
          <AreaAdd
            btnValue={btnValue}
            setbtnValue={setbtnValue}
            width={width < 500 ? 85 : 38}
            height={width < 500 ? 150 : 100}
          />

          <InputNumber
            btnValue={btnValue}
            setbtnValue={setbtnValue}
          />
          {!(auth.privilege) &&
            <BtnFinishing width={width < 500 ? 85 : 38} onClick={Purchases}>
              <span />
              <h2>Finalizar</h2>
              <p>{CvrtReal(dataRouter, btnValue)}</p>
            </BtnFinishing>
          }
        </Area>
      }
      {
        dataRouter.status === 'Concluded' &&
        <p>Sorteio Encerrado</p>
      }
    </Container>
  )
};