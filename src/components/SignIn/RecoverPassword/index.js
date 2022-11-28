import React, { useContext, useState } from 'react';
import { Container, AreaForm, AreaButton, Alert } from './styles';
import { BsX } from "react-icons/bs";
import InputLabel from '../../InputLabel';
import { BsFillTelephoneFill, BsLockFill } from "react-icons/bs";
import ReactLoading from 'react-loading';

export default function RecoverPassword({ setIsForm, width, AuthContext, setisRecovery }) {
  const { recoverPass, data_Codig, checking, msgErr, setMsgErr } = useContext(AuthContext);
  const [CPF, setCPF] = useState('');
  const [cod, setCod] = useState('');
  // eslint-disable-next-line no-mixed-operators
  const [newPass, setNewPass] = useState('');
  const [conFPass, setConFPass] = useState('');
  const [status, setStatus] = useState('pending');

  const handleSubmit = () => {
    if (data_Codig.status === undefined) {
      if (CPF.length === 11) {
        recoverPass({
          cod: cod,
          codV: data_Codig.cod,
          CPF: CPF,
          status: data_Codig.status || status,
          newPass: newPass,
          id: data_Codig.id
        })
      } else {
        setMsgErr({
          err: true,
          message: 'Erro: CPF faltando numero! (11 digitos)'
        });
      }
    } else if (data_Codig.status === "sent") {
      if (cod.length === 6) {
        recoverPass({
          cod: cod,
          codV: data_Codig.cod,
          CPF: CPF,
          status: data_Codig.status || status,
          newPass: newPass,
          id: data_Codig.id
        });
      } else {
        setMsgErr({
          err: true,
          message: 'Erro: Código faltando numero! (6 digitos)'
        });
      }

    } else if (data_Codig.status === "approved" && newPass.length === conFPass.length) {
      if (newPass === conFPass) {
        recoverPass({
          cod: cod,
          codV: data_Codig.cod,
          CPF: CPF,
          status: data_Codig.status || status,
          newPass: newPass,
          id: data_Codig.id
        })
      } else {
        setMsgErr({
          err: true,
          message: 'Erro: Verifica a senha e tente novamente! (8 digitos)'
        });
      }
    }

  }

  const RotaActive = () => {
    // eslint-disable-next-line default-case
    switch (data_Codig.status || status) {
      case 'pending':
        return <InputLabel
          type='number'
          label='Digite o CPF:'
          value={CPF}
          Icon={BsFillTelephoneFill}
          width={width < 500 ? 70 : 27}
          width2={width}//Modifica o tamanho do input
          placeholder='Ex: 999999999'
          maxLength={9}
          onChange={e => setCPF(e.target.value)}
          background='#fff'
          isIcon={false}
        />
      case 'sent':
        return <InputLabel
          type='number'
          label='Digite o codigo:'
          value={cod}
          Icon={BsFillTelephoneFill}
          width={width < 500 ? 70 : 10}
          width2={width}//Modifica o tamanho do input
          placeholder='Ex: 999999'
          maxLength={6}
          onChange={e => setCod(e.target.value)}
          background='#fff'
          isIcon={false}
        />
      case 'approved':
        return <>
          <InputLabel
            type='password'
            label='Senha:'
            value={newPass}
            maxLength={8}
            Icon={BsLockFill}
            width={width < 500 ? 70 : 27}
            width2={width}//Modifica o tamanho do input
            placeholder='Digite sua senha'
            onChange={e => setNewPass(e.target.value)}
            background='#fff'
            isIcon={true}
          />
          <InputLabel
            type='password'
            label='Senha:'
            value={conFPass}
            maxLength={8}
            Icon={BsLockFill}
            width={width < 500 ? 70 : 27}
            width2={width}//Modifica o tamanho do input
            placeholder='Confirme a senha'
            onChange={e => setConFPass(e.target.value)}
            background='#fff'
            isIcon={true}
          />
        </>
      default:
        <InputLabel
          type='number'
          label='Digite o CPF:'
          value={CPF}
          Icon={BsFillTelephoneFill}
          width={width < 500 ? 70 : 27}
          width2={width}//Modifica o tamanho do input
          placeholder='Ex: 999999999'
          maxLength={8}
          onChange={e => setCPF(e.target.value)}
          background='#fff'
          isIcon={false}
        />
    }

  };

  const IsRecovery = () => {
    setisRecovery(false);
    data_Codig.status = 'pending';
    setMsgErr('');
  };

  return (
    <Container>
      <AreaForm width={width < 500 ? 80 : 30}>
        <header>
          <h4>Esqueci minha senha!</h4>
          <BsX
            size={30}
            color='#779FE5'
            cursor='pointer'
            onClick={() => setIsForm(false)}
          />
        </header>
        {
          !msgErr.err && <Alert color='#3CB371'>{msgErr.message}</Alert>
        }
        <section>
          {
            RotaActive()
          }
        </section>

        {
          msgErr.err && <Alert color='#fd0000'>{msgErr.message}</Alert>
        }

        <AreaButton width={width < 500 ? 70 : 27} color={'#00A3FF'}>
          <button onClick={handleSubmit} >
            {checking ?
              <ReactLoading
                type={'bars'}
                color={'#fff'}
                height={25}
                width={25}
              />
              :
              <p>Verificar</p>
            }
          </button>
          <p onClick={IsRecovery}>Voltar para login!</p>
        </AreaButton>
      </AreaForm>
    </Container>
  )
};