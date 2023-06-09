import React, { useContext, useState } from 'react';
import { Container, AreaForm, AreaButton } from './styles';
import { BsX } from "react-icons/bs";
import InputLabel from '../../components/InputLabel';
import RecoverPassword from './RecoverPassword';
import { BsFillTelephoneFill, BsLockFill } from "react-icons/bs";

export default function SignIn({ setIsForm, width, widthMax, setIsSignUp, AuthContext }) {
  const { signIn } = useContext(AuthContext);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isRecovery, setisRecovery] = useState(false);

  const handleSubmit = () => {
    if (phone.length && password.length) {
      signIn({
        phone: cvrtNumber(phone),
        password: password,
      })
    } else {
      alert('Ops! Campo vázio!');
    };
  };

  const isAlter = () => {
    setIsSignUp(true);
    setIsForm(false);
  };

  const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }

  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
  }

  function cvrtNumber(string) {
    var numsStr = string.replace(/[^0-9]/g, '');
    return parseInt(numsStr);
  }
  
  return (
    <>
      {
        isRecovery ?
          <RecoverPassword
            setIsForm={setIsForm}
            width={width}
            width2={width}
            widthMax={widthMax}
            AuthContext={AuthContext}
            setisRecovery={setisRecovery}
          />
          :
          <Container>
            <AreaForm width={width < widthMax ? '62vw' : '400px'}>
              <header>
                <h4>Login</h4>
                <BsX
                  size={30}
                  color='#779FE5'
                  cursor='pointer'
                  onClick={() => setIsForm(false)}
                />
              </header>
              <section>
                <InputLabel
                  type='tel'
                  label='Telefone:'
                  onKeyUp={handlePhone}
                  value={phone}
                  maxLength={15}
                  Icon={BsFillTelephoneFill}
                  width={width < widthMax ? '56vw' : '370px'}
                  width2={width < widthMax ? '50vw' : '330px'}//Modifica o tamanho do input
                  placeholder='Ex: 999999999'
                  onChange={e => setPhone(e.target.value)}
                  background='#fff'
                  isIcon={true}
                />
                <InputLabel
                  type='password'
                  label='Senha:'
                  value={password}
                  maxLength={8}
                  Icon={BsLockFill}
                  width={width < widthMax ? '56vw' : '370px'}
                  width2={width < widthMax ? '50vw' : '330px'}//Modifica o tamanho do input
                  widthMax={widthMax}
                  placeholder='Digite sua senha'
                  onChange={e => setPassword(e.target.value)}
                  background='#fff'
                  isIcon={true}
                />
              </section>

              <p onClick={() => setisRecovery(true)}>Esqueci a senha!</p>

              <AreaButton width={width < widthMax ? '56vw' : '370px'}>
                <button onClick={handleSubmit}>Continuar</button>
                <h3 onClick={isAlter}>Criar conta</h3>
              </AreaButton>
            </AreaForm>
          </Container>
      }
    </>

  )
};