import React, { useContext, useState } from 'react';
import { Container, Info, Button, Alert } from './styles';
import {
  BsExclamationCircle,
  BsFillTelephoneFill,
} from "react-icons/bs";
import InputUsers from '../../components/InputUsers';
import axios from 'axios';
import ReactLoading from 'react-loading';

export default function MyData({ width, widthMax, AuthContext }) {
  const { fullUser, updUsersAddres, checking, msgErr } = useContext(AuthContext);
  const [name, setName] = useState('' || fullUser.name);
  const [CPF, setCPF] = useState('' || fullUser.CPF);
  const [email, setEmail] = useState('' || fullUser.email);
  const [password, setPassword] = useState('' || fullUser.password);
  const [phone, setPhone] = useState('' || fullUser.phone);
  const [CEP, setCEP] = useState('' || fullUser.CEP);
  const [logradouro, setLogradouro] = useState('' || fullUser.logradouro);
  const [number, setNumber] = useState('' || fullUser.number);
  const [neighborhood, setNeighborhood] = useState('' || fullUser.neighborhood);
  const [complement, setComplement] = useState('' || fullUser.complement);
  const [uf, setUf] = useState('' || fullUser.uf);
  const [city, setCity] = useState('' || fullUser.city);
  const [reference, setReference] = useState('' || fullUser.reference);
  const [isLock, setIsLock] = useState(false);

  if (CEP.length === 8) {
    async function get() {
      axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
        .then(res => {
          setNeighborhood(res.data.bairro);
          setCity(res.data.localidade);
          setLogradouro(res.data.logradouro);
          setUf(res.data.uf);
        });
    };
    get();
  };

  const uf_data = [
    'RO', 'AC', 'AM', 'RR', 'PA', 'AP', 'TO', 'MA', 'PI', 'CE', 'RN', 'PB', 'PE', 'AL',
    'SE', 'BA', 'MG', 'ES', 'RJ', 'SP', 'PR', 'SC', 'RS', 'MS', 'MT', 'GO', 'DF'
  ];

  const handleSubmit = (e) => {
    // console.log(e)
    const data = {
      id: fullUser.id,
      name: name,
      phone: phone,
      email: email,
      CPF: CPF,
      password: password,
      logradouro: logradouro,
      CEP: CEP,
      number: number,
      neighborhood: neighborhood,
      complement: complement,
      uf: uf,
      city: city,
      reference: reference,
    };
    updUsersAddres(data)
  };

  return (
    <Container >
      <Info width={width < widthMax ? 90 : 40}>
        {!msgErr.err &&
          <Alert>
            <p>{msgErr.message}</p>
          </Alert>
        }

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
              width={width < widthMax ? 84 : 39}
              placeholder='Digite seu nome!'
              background='#fff'
              onChange={e => setName(e.target.value)}
              edit={true}
              setIsLock={(el) => setIsLock(el)}
            />
          </li>
          <li>
            <InputUsers
              type='number'
              label='CPF:'
              value={CPF}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 40 : 10.5}
              placeholder='ex: 13975898765'
              onChange={e => setCPF(e.target.value)}
              disabled={true}
              edit={false}
              setIsLock={(el) => setIsLock(el)}
            />
          </li>
          <li>
            <InputUsers
              type='text'
              label='E-mail:'
              value={email}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 84 : 39}
              placeholder='exemplo@exemplo.com'
              onChange={e => setEmail(e.target.value)}
              edit={true}
              setIsLock={(el) => setIsLock(el)}
            />
          </li>
          <li>
            <InputUsers
              type='password'
              label='Senha:'
              value={password}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 84 : 39}
              placeholder='Digite sua senha'
              onChange={e => setPassword(e.target.value)}
              edit={true}
              setIsLock={(el) => setIsLock(el)}
            />
          </li>
          <li>
            <InputUsers
              type='number'
              label='Telefone:'
              value={phone}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 40 : 10.5}
              placeholder='ex: 999999999'
              onChange={e => setPhone(e.target.value)}
              edit={true}
              setIsLock={(el) => setIsLock(el)}
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
              type='number'
              label='CEP:'
              value={CEP}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 40 : 10.5}
              placeholder='ex: 32080365'
              onChange={e => setCEP(e.target.value)}
              edit={true}
              setIsLock={(el) => setIsLock(el)}
            />
          </li>
          <li>
            <InputUsers
              type='text'
              label='Logradouro:'
              value={logradouro}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 84 : 39}
              placeholder='ex: rua'
              onChange={e => setLogradouro(e.target.value)}
              edit={true}
              setIsLock={(el) => setIsLock(el)}
            />
          </li>
          <li>
            <InputUsers
              type='number'
              label='Número:'
              value={number}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 40 : 7}
              placeholder='Digite o numero da residência '
              onChange={e => setNumber(e.target.value)}
              edit={true}
              setIsLock={(el) => setIsLock(el)}
            />
          </li>
          <li>
            <InputUsers
              type='text'
              label='Bairro:'
              value={neighborhood}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 84 : 39}
              placeholder='Digite o nome do bairro'
              onChange={e => setNeighborhood(e.target.value)}
              edit={true}
              setIsLock={(el) => setIsLock(el)}
            />
          </li>
          <li>
            <InputUsers
              type='text'
              label='Complemento:'
              value={complement}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 84 : 39}
              placeholder='ex: casa2, apart'
              onChange={e => setComplement(e.target.value)}
              edit={true}
              setIsLock={(el) => setIsLock(el)}
            />
          </li>
          <li>
            <InputUsers
              type='text'
              label='UF:'
              data={uf_data}
              value={uf}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 40 : 7}
              placeholder='UF'
              onChange={e => setUf(e.target.value)}
              edit={true}
              isOption={true}
              setIsLock={(el) => setIsLock(el)}
            />
          </li>
          <li>
            <InputUsers
              type='text'
              label='Cidade:'
              value={city}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 84 : 39}
              placeholder='Digite o nome da cidade'
              onChange={e => setCity(e.target.value)}
              edit={true}
              setIsLock={(el) => setIsLock(el)}
            />
          </li>
          <li>
            <InputUsers
              type='text'
              label='Ponto de referência::'
              value={reference}
              Icon={BsFillTelephoneFill}
              width={width < widthMax ? 84 : 39}
              placeholder='ex: Perto de uma arvore'
              onChange={e => setReference(e.target.value)}
              edit={true}
              setIsLock={(el) => setIsLock(el)}
            />
          </li>
        </ul>
        {isLock &&
          <Button
            width={width < widthMax ? 88 : 39}
            bgColor={checking ? '#32CD32' : '#00A3FF'}
            onClick={handleSubmit}
          >
            {checking ?
              <ReactLoading
                type={'bars'}
                color={'#fff'}
                height={25}
                width={25}
              />
              :
              <p>Salvar Alteração</p>
            }
          </Button>
        }
      </Info>
    </Container>
  )
};