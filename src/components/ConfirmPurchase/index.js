import React, { useContext, useState } from 'react';
import { Container, AreaForm, Info, Details, DetailsPurchase, AreaButton, QrCode } from './styles';
import { BsX } from "react-icons/bs";
import InputLabel from '../InputLabel';
import { BsFiles, BsLockFill } from "react-icons/bs";
import ConvertReal from '../../components/ConvertReal';

export default function ConfirmPurchase({ width, AuthContext }) {
  const { qrCode, setConfirmPurchases, res_purchases } = useContext(AuthContext);


  const copyToClipboard = str => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
  };

  function convertHours(ms) {
    const hours = Math.floor(ms / 3600);
    const minutes = Math.floor((ms - (hours * 3600)) / 60);
    const seconds = ms - (hours * 3600) - (minutes * 60);

    const timeString =
      // hours.toString().padStart(2, '0') + ':' +
      minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0');
    return timeString
  }

  return (
    <Container>
      <AreaForm width={width < 500 ? 80 : 30}>
        <header>
          <h4>Confirma sua compra</h4>
          <BsX
            size={30}
            color='#779FE5'
            cursor='pointer'
            onClick={() => setConfirmPurchases(false)}
          />
        </header>

        <Info width={width < 500 ? 80 : 28}>
          <h3>Pague {qrCode && ConvertReal(qrCode.price)} via Pix</h3>
          <h4>Para pagar, escolha uma destas opções:</h4>
        </Info>

        <section>
          <h4>{convertHours(0 || res_purchases.time)}</h4>
          <p>Código QR</p>
          <QrCode src={`data:image/png;base64,${qrCode && qrCode.base64}`} alt={'dd'} />

          <span>
            <InputLabel
              type='text'
              label='Código de pagamento:'
              value={qrCode && qrCode.qr_code}
              maxLength={8}
              Icon={BsLockFill}
              width={width < 500 ? 70 : 24}
              width2={width}//Modifica o tamanho do input
              background='#fff'
              isIcon={false}
              readOnly={true}
            />
            <BsFiles
              size={26}
              color='#779FE5'
              cursor='pointer'
              onClick={() => copyToClipboard(qrCode.qr_code)}
            />
          </span>
        </section>
        <Details width={width < 500 ? 80 : 28}>
          <h2>Como pagar?</h2>
          <p><b>1°</b> Entre no app ou site do seu banco e escolha a opção de pagamento via Pix.  </p>
          <p><b>2°</b> Escaneie o código QR ou copie e cole o código de pagamento.</p>
          <h4>Pronto! O pagamento será creditado na hora e você receberá um e-mail de confirmação.</h4>
        </Details>
        <DetailsPurchase width={width < 500 ? 80 : 28}>
          <h2>Detalhes da sua compra:</h2>
          <p><b>Produto:</b>  {qrCode.description}</p>
          <p><b>Preço:</b>  {ConvertReal(qrCode.priceUnd)}</p>
          <p><b>Quantidade:</b> {qrCode.qtd}</p>
          <p><b>Total:</b> {ConvertReal(qrCode.price)}</p>
        </DetailsPurchase>
        <AreaButton width={width < 500 ? 70 : 28} color={res_purchases.status === 'approved' ? '#32CD32' : '#00A3FF'}>
          <button disabled>{res_purchases.status === 'approved' ? 'Aprovado' : 'Pendente'}</button>
        </AreaButton>
      </AreaForm>
    </Container>
  )
};