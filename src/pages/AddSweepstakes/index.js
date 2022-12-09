import React, { useState, useContext } from 'react';
import {
  Container,
  Area,
  AreaUpload,
  AreaDesc,
  Status,
  Preview,
  Button,
  AreaOption,
  AreaText
} from './styles';
import { BsImage, BsFillTelephoneFill } from "react-icons/bs";
import InputLabel from '../../components/InputLabel';

export default function AddSweepstakes({ width, AuthContext, data, widthMax }) {
  const { sendImg, purchasesFilter } = useContext(AuthContext);
  const [title, setTitle] = useState(data.title || '');
  const [description, setDescription] = useState(data.description || '');
  const [price, setPrice] = useState(data.price || 0);
  const [status, setStatus] = useState(data.status || 'DEFAULT');
  const [img, setImg] = useState(data.img || '');
  const [cota, setCota] = useState(0);
  const [filterWinner, setFilterWinner] = useState([]);

  const onChange = (e) => {
    if (e.target.files.length <= 0) {
      return;
    };

    let reader = new FileReader();

    reader.onload = () => {
      setImg(reader.result);
    };

    setImg(reader.readAsDataURL(e.target.files[0]));
  };

  const handleClear = () => {
    setTitle('');
    setTitle('');
    setDescription('');
    setPrice(0);
    setStatus('');
    setStatus('DEFAULT');
    setImg('');
    data.title = '';
    data.description = '';
    data.price = '';
    data.status = '';
    data.img = '';
  };

  const onSelect = (res) => {
    setStatus(res);
  };

  const onChangeCota = (v) => {
    setCota(v);
    const winner = purchasesFilter.filter(person => person.id_award === data.id);
    // const filter = winner.filter(person =>  person.numbers_cota === v);
    setFilterWinner(winner);
  }

  const handleSubmit = (type) => {
    const imgBase64 = (img.split('').splice(23, img.length).join(''))

    console.log({
      newPublication: type,
      title: title,
      description: description,
      price: price,
      status: status,
      img: imgBase64
    })
    // if (
    //   title.length
    //   &&
    //   description.length
    //   &&
    //   status.length
    //   &&
    //   img.length
    //   &&
    //   price > 0
    // ) {
    //   sendImg({
    //     title: title,
    //     description: description,
    //     price: price,
    //     status: status,
    //     img: imgBase64
    //   })
    // } else {
    //   alert('E nescessario o preenchimento dos campos.')
    // }
  };

  const formatMoney = (value) => {
    // value = value + '';
    // value = parseInt(value.replace(/[\D]+/g, ''));
    // value = value + '';
    // value = value.replace(/([0-9]{2})$/g, ",$1");

    // if (value.value > 6) {
    //   value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$0");
    // }

    // if(value === 'NaN') value = '';
    setPrice(value)
  };

  return (
    <Container>
      <Area width={width < widthMax ? '82vw' : '545px'} >
        <AreaUpload width={width < widthMax ? '82vw' : '530px'}>
          <section>
            {img === '' ?
              <BsImage size={50} color='#00A3FF' />
              :
              <Preview 
              src={data.img ? `data:image/jpeg;base64,${data.img}` : img} 
              alt='fone' 
              width={width < widthMax ? '80vw' : '518px'}
              />
            }
          </section>

          <input
            type='file'
            onChange={onChange}
            disabled={data.status === 'Concluded'}
          />
        </AreaUpload>

        <AreaDesc width={width < widthMax ? '82vw' : '535px'}>
          <InputLabel
            type='text'
            onChange={e => setTitle(e.target.value)}
            value={title}
            placeholder='Digite o titulo da publicação..'
            label='Título:'
            disabled={data.status === 'Concluded'}
            maxLength={120}
            Icon={BsFillTelephoneFill}
            width={width < widthMax ? '80vw' : '520px'}
            width2={width < widthMax ? '70vw' : '520px'}//Modifica o tamanho do input
            background='#fff'
            isIcon={true}
          />
          <InputLabel
            type='number'
            onChange={e => formatMoney(e.target.value)}
            value={price}
            placeholder='0'
            label='Preço:'
            disabled={data.status === 'Concluded'}
            Icon={BsFillTelephoneFill}
            width={width < widthMax ? '30vw' : '90px'}
            width2={width < widthMax ? '20vw' : '45px'}//Modifica o tamanho do input
            background='#fff'
            isIcon={true}
          />
          <p>Descrição:</p>
          <AreaText
            id="story"
            name="story"
            rows="10"
            cols="520"
            width={width < widthMax ? '80vw' : '520px'}
            disabled={data.status === 'Concluded'}
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='Digite a descrição da publicação...'
          />
          <Status
            disabled={data.status === 'Concluded'}
            defaultValue={status}
            onChange={e => onSelect(e.target.value)}
            width={width < widthMax ? '20vw' : '90px'}
          >
            <option value="DEFAULT" disabled>Status ...</option>
            <option value='Active'>Ativo</option>
            {data.status &&
              <option value='Concluded'>Concluído</option>
            }
            <option value='Coming'>Em breve</option>
          </Status>

          {status === 'Concluded' &&
            <AreaOption width={width < widthMax ? '80vw' : '520px'}>
              <h4>Informações do ganhador</h4>
              <InputLabel
                type='number'
                onChange={e => onChangeCota(e.target.value)}
                value={cota}
                placeholder='0'
                label='Digite a cota sorteada:'
                disabled={data.status === 'Concluded'}
                Icon={BsFillTelephoneFill}
                width={width < widthMax ? '30vw' : '90px'}
                width2={width < widthMax ? '21vw' : '45px'}//Modifica o tamanho do input
                background='#00A3FF'
                color='#fff'
                isIcon={true}
              />
              {
                filterWinner.map((v, i) =>
                  <section key={i} onClick={() => alert(v.buyer)}>
                    <p>Comprador: <span>{v.buyer}</span></p>
                    <p>CPF: <span>{v.CPF}</span></p>
                    <p>Telefone: <span>{v.phone}</span></p>
                    <p>Total de cotas compradas: <span>20</span></p>
                    <p>Cota premiada: <span>223</span></p>
                  </section>
                )
              }

            </AreaOption>
          }

        </AreaDesc>
        {data.img ?
          <>
            <Button
              bg='#d5d5d5'
              width={width < widthMax ? '80vw' : '520px'}
              onClick={handleClear}
            >
              Limpar
            </Button>
            <Button
              disabled={data.status === 'Concluded'}
              bg={data.status === 'Concluded' ? '#d5d5d5' : '#00A3FF'}
              width={width < widthMax ? '80vw' : '520px'}
              onClick={() => handleSubmit(false)}
            >
              Atualizar
            </Button>
            <Button
              bg='#ea777b'
              width={width < widthMax ? '80vw' : '520px'}
              onClick={() => alert('Deletado')}
            >
              Deletar
            </Button>
          </>
          :
          <Button
            bg='#78A55A'
            width={width < widthMax ? '80vw' : '520px'}
            onClick={() => handleSubmit(true)}
          >
            Publicar
          </Button>
        }
      </Area>
    </Container>
  )
};