import React, { useContext, useState } from 'react';
import { Container, AreaForm, AreaButton } from './styles';
import { BsX } from "react-icons/bs";
import InputLabel from '../../components/InputLabel';
import RecoverPassword from './RecoverPassword';
import { BsFillTelephoneFill, BsLockFill } from "react-icons/bs";

export default function SignIn({ setIsForm, width, setIsSignUp, AuthContext }) {
  const { signIn } = useContext(AuthContext);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isRecovery, setisRecovery] = useState(false);

  const handleSubmit = () => {
    if (phone.length && password.length) {
      signIn({
        phone: phone,
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


  return (
    <>
      {
        isRecovery ?
          <RecoverPassword
            setIsForm={setIsForm}
            width={width}
            AuthContext={AuthContext}
            setisRecovery={setisRecovery}
          />
          :
          <Container>
            <AreaForm width={width < 500 ? 80 : 30}>
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
                  type='number'
                  label='Telefone:'
                  value={phone}
                  Icon={BsFillTelephoneFill}
                  width={width < 500 ? 70 : 27}
                  width2={width}//Modifica o tamanho do input
                  placeholder='Ex: 999999999'
                  maxLength={11}
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
                  width={width < 500 ? 70 : 27}
                  width2={width}//Modifica o tamanho do input
                  placeholder='Digite sua senha'
                  onChange={e => setPassword(e.target.value)}
                  background='#fff'
                  isIcon={true}
                />
              </section>

              <p onClick={() => setisRecovery(true)}>Esqueci a senha!</p>

              <AreaButton width={width < 500 ? 70 : 27}>
                <button onClick={handleSubmit}>Continuar</button>
                <h3 onClick={isAlter}>Criar conta</h3>
              </AreaButton>
            </AreaForm>
          </Container>
      }
    </>

  )
};