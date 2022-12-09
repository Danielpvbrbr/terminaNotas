import React, { useState, useContext, useEffect } from 'react';
import { Container, AreaForm, AreaButton, Btn } from './styles';
import {
  BsX,
  BsFillFileEarmarkPersonFill,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsFillLockFill,
  BsFillPersonFill,
  BsFillPinMapFill,
  BsFillPinFill,
  BsFillMapFill,
  BsGeoAltFill,
  BsGeoFill,
  BsHouseDoor,
  BsFillExclamationCircleFill,
  BsFillFlagFill
} from "react-icons/bs";
import InputLabel from '../../components/InputLabel';

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
      <AreaForm width={width < widthMax ? '57vw' : '360px'}>
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
              Icon={BsFillPersonFill}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='Digite seu nome!'
              onChange={e => setName(e.target.value)}
              background='#fff'
              isIcon={true}
              maxLength={40}
            />
            <InputLabel
              type='number'
              label='CPF:'
              name={'CPF'}
              value={CPF}
              Icon={BsFillFileEarmarkPersonFill}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='Digite o seu CPF '
              onChange={e => setCPF(e.target.value)}
              background='#fff'
              isIcon={true}
              maxLength={11}
            />
            <InputLabel
              type='email'
              label='E-mail:'
              name={'email'}
              value={email}
              Icon={BsFillEnvelopeFill}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='exemplo@exemplo.com'
              onChange={e => setEmail(e.target.value)}
              maxLength={40}
              background='#fff'
              isIcon={true}
            />
            <InputLabel
              type='password'
              label='Senha:'
              name={'password'}
              value={password}
              Icon={BsFillLockFill}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='Digite sua senha'
              maxLength={8}
              onChange={e => setPassword(e.target.value)}
              background='#fff'
              isIcon={true}
            />
            <InputLabel
              type='password'
              label='Repita a senha:'
              name={'isPassword'}
              value={isPassword}
              Icon={BsFillLockFill}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='Confirme a senha'
              onChange={e => setIsPassword(e.target.value)}
              background='#fff'
              maxLength={8}
              isIcon={true}
            />
            <InputLabel
              type='text'
              label='Telefone:'
              name={'phone'}
              value={phone}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='Digite seu telefone'
              onChange={e => setPhone(e.target.value)}
              background='#fff'
              maxLength={11}
              isIcon={true}
            />
          </section>
          :
          <section>
            <InputLabel
              type='number'
              label='CEP:'
              name={'CEP'}
              value={CEP}
              Icon={BsFillPinMapFill}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='Digite seu CEP..'
              onChange={e => setCEP(e.target.value)}
              maxLength={9}
              background='#fff'
              isIcon={true}
            />
            <InputLabel
              type='text'
              label='Logradouro:'
              name={'Logradouro'}
              value={logradouro}
              Icon={BsFillMapFill}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='Digite o Logradouro..'
              onChange={e => setLogradouro(e.target.value)}
              background='#fff'
              maxLength={30}
              isIcon={true}
            />
            <InputLabel
              type='number'
              label='Número:'
              name={'number'}
              value={number}
              Icon={BsFillExclamationCircleFill}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='Digite o numero...'
              onChange={e => setNumber(e.target.value)}
              background='#fff'
              maxLength={5}
              isIcon={true}
            />
            <InputLabel
              type='text'
              label='Bairro:'
              name={'neighborhood'}
              value={neighborhood}
              Icon={BsFillPinFill}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='Digite o bairro...'
              onChange={e => setNeighborhood(e.target.value)}
              background='#fff'
              isIcon={true}
              maxLength={30}
            />
            <InputLabel
              type='text'
              label='Complemento:'
              name={'Complemento'}
              value={complement}
              Icon={BsHouseDoor}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='Exemplo: casa 2'
              onChange={e => setComplement(e.target.value)}
              background='#fff'
              isIcon={true}
              maxLength={30}
            />
            <InputLabel
              type='text'
              label='UF:'
              name={'uf'}
              value={uf}
              Icon={BsGeoFill}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='UF...'
              onChange={e => setUF(e.target.value)}
              background='#fff'
              maxLength={5}
              isIcon={true}
            />
            <InputLabel
              type='text'
              label='Cidade:'
              name={'city'}
              value={city}
              Icon={BsGeoAltFill}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='Digite o nome da cidade...'
              onChange={e => setCity(e.target.value)}
              background='#fff'
              maxLength={40}
              isIcon={true}
            />
            <InputLabel
              type='text'
              label='Ponto de referência:'
              name={'reference'}
              value={reference}
              Icon={BsFillFlagFill}
              width={width < widthMax ? '55vw' : '340px'}
              width2={width < widthMax ? '49vw' : '300px'}//Modifica o tamanho do input
              placeholder='Examplo: Perto de uma arvore...'
              onChange={e => setReference(e.target.value)}
              background='#fff'
              maxLength={40}
              isIcon={true}
            />
          </section>
        }
        <AreaButton >
          {isNxt ?
            <Btn
              width={width < widthMax ? '55vw' : '340px'}
              onClick={() => next(false)}
              background='#00A3FF'
              color='#fff'
            >Próximo</Btn>
            :
            <>
              <Btn
                width={width < widthMax ? '55vw' : '340px'}
                onClick={handleSubmit}
                background='#00A3FF'
                color='#fff'
              >Finalizar</Btn>
              <Btn
                width={width < widthMax ? '55vw' : '340px'}
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