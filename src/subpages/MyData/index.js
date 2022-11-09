import React, { useState } from 'react';
import { Container, Area, Info } from './styles';
import {
  BsChevronRight,
  BsChevronDown,
  BsExclamationCircle,
  BsFillTelephoneFill,
} from "react-icons/bs";
import InputUsers from '../../components/InputUsers';

export default function MyData({ width }) {
  const [isOpen, setisOpen] = useState(false);
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfPassword, setComfPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [CEP, setCEP] = useState('');
  const [logadouro, setLogadouro] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [complement, setComplement] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [reference, setReference] = useState('');

  if(comfPassword.length >= 8 && password === comfPassword){
    alert('Senha não confere')
  }
  return (
    <Container >
        <Info width={width < 500 ? 90 : 40}>
          <section>
            <span> <BsExclamationCircle
              size={10}
              color='#CED4DA'
            /> Dados do usúario</span>
          </section>

          <ul>
            <li>
              <InputUsers
                type='text'
                label='Nome completo:'
                value={name}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='Digite seu nome!'
                background='#fff'
                onChange={e => setName(e.target.value)}
              />
            </li>
            <li>
              <InputUsers
                type='text'
                label='CPF:'
                value={CPF}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='ex: 13975898765'
                onChange={e => setCPF(e.target.value)}
              />
            </li>
            <li>
              <InputUsers
                type='text'
                label='E-mail:'
                value={email}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='exemplo@exemplo.com'
                onChange={e => setEmail(e.target.value)}
              />
            </li>
            <li>
              <InputUsers
                type='password'
                label='Senha:'
                value={password}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='Digite sua senha'
                onChange={e => setPassword(e.target.value)}
              />
            </li>
            <li>
              <InputUsers
                type='password'
                label='Repita a senha:'
                value={comfPassword}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='Confirme a senha!'
                onChange={e => setComfPassword(e.target.value)}
              />
            </li>
            <li>
              <InputUsers
                type='text'
                label='Telefone:'
                value={phone}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='ex: 999999999'
                onChange={e => setPhone(e.target.value)}
              />
            </li>

            <section>
              <span> <BsExclamationCircle
                size={10}
                color='#CED4DA'
              /> Endereço</span>
            </section>

            <li>
              <InputUsers
                type='text'
                label='CEP:'
                value={CEP}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='ex: 32080365'
                onChange={e => setCEP(e.target.value)}
              />
            </li>
            <li>
              <InputUsers
                type='text'
                label='Logradouro:'
                value={logadouro}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='ex: rua'
                onChange={e => setLogadouro(e.target.value)}
              />
            </li>
            <li>
              <InputUsers
                type='text'
                label='Número:'
                value={number}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='Digite o numero da residência '
                onChange={e => setNumber(e.target.value)}
              />
            </li>
            <li>
              <InputUsers
                type='text'
                label='Bairro:'
                value={neighborhood}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='Digite o nome do bairro'
                onChange={e => setNeighborhood(e.target.value)}
              />
            </li>
            <li>
              <InputUsers
                type='text'
                label='Complemento:'
                value={complement}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='ex: casa2, apart'
                onChange={e => setComplement(e.target.value)}
              />
            </li>
            <li>
              <InputUsers
                type='text'
                label='UF:'
                value={uf}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='UF'
                onChange={e => setUf(e.target.value)}
              />
            </li>
            <li>
              <InputUsers
                type='text'
                label='Cidade:'
                value={city}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='Digite o nome da cidade'
                onChange={e => setCity(e.target.value)}
              />
            </li>
            <li>
              <InputUsers
                type='text'
                label='Ponto de referência::'
                value={reference}
                Icon={BsFillTelephoneFill}
                width={width < 500 ? 84 : 39}
                placeholder='ex: Perto de uma arvore'
                onChange={e => setReference(e.target.value)}
              />
            </li>
          </ul>
        </Info>
    </Container>
  )
};