import React, { useState, useContext, useEffect } from 'react';
import { Container, AreaForm, AreaButton, Btn } from './styles';
import { BsX } from "react-icons/bs";
import InputLabel from '../../components/InputLabel';
import { BsFillTelephoneFill, } from "react-icons/bs";
import axios from 'axios';

export default function SignUp({ width, widthMax, setIsSignUp, AuthContext }) {
  const { signUp } = useContext(AuthContext);
  const [isNxt, setIsNxt] = useState(true);
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState('');

  const [logradouro, setLogradouro] = useState('');
  const [CEP, setCEP] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [complement, setComplement] = useState('');
  const [uf, setUF] = useState('');
  const [city, setCity] = useState('');
  const [reference, setReference] = useState('');

  const handleSubmit = () => {
    if (name.length && CPF.length && email.length && phone.length && password.length > 0) {
      signUp({
        name: name,
        CPF: CPF,
        email: email,
        phone: phone,
        password: password,
        logradouro: logradouro,
        CEP: CEP,
        number: number,
        neighborhood: neighborhood,
        complement: complement,
        uf: uf,
        city: city,
        reference: reference
      })
    } else {
      alert('Ops campo vázio: Verifique os campos e tente novamente!')
    }

  };

  if (CEP.length === 8) {
    async function get() {
      axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
        .then(res => {
          setNeighborhood(res.data.bairro);
          setCity(res.data.localidade);
          setLogradouro(res.data.logradouro);
          setUF(res.data.uf);
        });
    };
    get();
  };

  const next = (is) => {
    if (phone.length >= 10) {
      setIsNxt(is);
    } else {
      alert('Erro no campo telefone: Verifique o campo!');
    }
  };

  if (password.length === isPassword.length && password !== isPassword) {
    alert('Erro: Senhas digitada não correspondentes!');
  }

  return (
    <Container>
      <AreaForm width={width < widthMax ? 80 : 30}>
        <header>
          <h4>Cadastro</h4>
          <BsX
            size={30}
            color='#779FE5'
            cursor='pointer'
            onClick={() => setIsSignUp(false)}
          />
        </header>
        {isNxt ?
          <section>
            <InputLabel
              type='text'
              label='Nome completo:'
              name={'name'}
              value={name}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='Digite seu nome!'
              onChange={e => setName(e.target.value)}
              background='#fff'
              isIcon={false}
              maxLength={40}
            />
            <InputLabel
              type='number'
              label='CPF:'
              name={'name'}
              value={CPF}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='Digite o seu CPF '
              onChange={e => setCPF(e.target.value)}
              background='#fff'
              isIcon={false}
              maxLength={11}
            />
            <InputLabel
              type='email'
              label='E-mail:'
              name={'name'}
              value={email}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='exemplo@exemplo.com'
              onChange={e => setEmail(e.target.value)}
              maxLength={40}
              background='#fff'
              isIcon={false}
            />
            <InputLabel
              type='password'
              label='Senha:'
              name={'name'}
              value={password}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='Digite sua senha'
              maxLength={8}
              onChange={e => setPassword(e.target.value)}
              background='#fff'
              isIcon={false}
            />
            <InputLabel
              type='password'
              label='Repita a senha:'
              name={'name'}
              value={isPassword}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='Confirme a senha'
              onChange={e => setIsPassword(e.target.value)}
              background='#fff'
              maxLength={8}
              isIcon={false}
            />
            <InputLabel
              type='text'
              label='Telefone:'
              name={'name'}
              value={phone}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='Digite seu telefone'
              onChange={e => setPhone(e.target.value)}
              background='#fff'
              maxLength={11}
              isIcon={false}
            />
          </section>
          :
          <section>
            <InputLabel
              type='number'
              label='CEP:'
              name={'name'}
              value={CEP}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='Digite seu CEP..'
              onChange={e => setCEP(e.target.value)}
              maxLength={9}
              background='#fff'
              isIcon={false}
            />
            <InputLabel
              type='text'
              label='Logradouro:'
              name={'name'}
              value={logradouro}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='Digite o Logradouro..'
              onChange={e => setLogradouro(e.target.value)}
              background='#fff'
              maxLength={30}
              isIcon={false}
            />
            <InputLabel
              type='number'
              label='Número:'
              name={'name'}
              value={number}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='Digite o numero...'
              onChange={e => setNumber(e.target.value)}
              background='#fff'
              maxLength={5}
              isIcon={false}
            />
            <InputLabel
              type='text'
              label='Bairro:'
              name={'name'}
              value={neighborhood}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='Digite o bairro...'
              onChange={e => setNeighborhood(e.target.value)}
              background='#fff'
              isIcon={false}
              maxLength={30}
            />
            <InputLabel
              type='text'
              label='Complemento:'
              name={'name'}
              value={complement}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='Exemplo: casa 2'
              onChange={e => setComplement(e.target.value)}
              background='#fff'
              isIcon={false}
              maxLength={30}
            />
            <InputLabel
              type='text'
              label='UF:'
              name={'name'}
              value={uf}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='UF...'
              onChange={e => setUF(e.target.value)}
              background='#fff'
              maxLength={5}
              isIcon={false}
            />
            <InputLabel
              type='text'
              label='Cidade:'
              name={'name'}
              value={city}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='Digite o nome da cidade...'
              onChange={e => setCity(e.target.value)}
              background='#fff'
              maxLength={40}
              isIcon={false}
            />
            <InputLabel
              type='text'
              label='Ponto de referência:'
              name={'name'}
              value={reference}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 70 : 27}
              width2={width}//Modifica o tamanho do input
              placeholder='Examplo: Perto de uma arvore...'
              onChange={e => setReference(e.target.value)}
              background='#fff'
              maxLength={40}
              isIcon={false}
            />
          </section>
        }
        <AreaButton >
          {isNxt ?
            <Btn
              width={width < widthMax ? 70 : 27}
              onClick={() => next(false)}
              background='#00A3FF'
              color='#fff'
            >Próximo</Btn>
            :
            <>
              <Btn
                width={width < widthMax ? 70 : 27}
                onClick={handleSubmit}
                background='#00A3FF'
                color='#fff'
              >Finalizar</Btn>
              <Btn
                width={width < widthMax ? 70 : 27}
                onClick={() => setIsNxt(true)}
                background='#CCEDFF'
                color='#343A40'
              >Anterior</Btn>
            </>
          }
        </AreaButton>
      </AreaForm>
    </Container>
  )
};