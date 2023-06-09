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
  AreaText,
  List
} from './styles';
import { BsImage, BsFillTrophyFill, BsCurrencyDollar, BsTextareaT } from "react-icons/bs";
import InputLabel from '../../components/InputLabel';
import Compress from 'compress.js';
const compress = new Compress()

export default function AddSweepstakes({ width, AuthContext, data, widthMax }) {
  const {
    addSweepstakes,
    addWinners,
    // purchasesFilter,
    deleteSweepstakes,
    seachPurchases,
    filterWinner
  } = useContext(AuthContext);
  const [title, setTitle] = useState(data.title || '');
  const [description, setDescription] = useState(data.description || '');
  const [price, setPrice] = useState(data.price || 0);
  const [status, setStatus] = useState(data.status || 'DEFAULT');
  const [img, setImg] = useState(data.img || '');
  const [cota, setCota] = useState(0);
  const [selected, setSelected] = useState("");

  const onChange = (e) => {
    const file = e.target.files[0];
    const target = [...e.target.files]

    if (file !== undefined) {
      compress.compress(target, {
        size: 4,
        quality: 0.75,
        maxWidth: 1920,
        maxHeight: 1920,
        resize: true,
        rotate: true
      }).then((result) => {
        setImg(`data:image/jpeg;base64,${result[0].data}`);
      })
    }
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

  const onChangeCota = (filter) => {
    setCota(filter);
    seachPurchases(data.id, filter);
  }

  const handleSubmit = (type) => {
    // const imgBase64 = (img.split('').splice(23, img.length).join(''));

    if (status === "Concluded") {
      addWinners({
        id: data.id,
        title: title,
        description: description,
        price: price,
        status: status,
        img: img,
        cota: cota,
        winners: selected
      })
    } else if (status === "Active" || "Coming") {
      addSweepstakes({
        id: data.id,
        newPublication: type,
        title: title,
        description: description,
        price: price,
        status: status,
        img: img
      })

    }
  };

  const handleSeleceted = (v, i) => {
    setSelected({
      pos: i,
      res: v
    });
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
                src={data.img ? data.img : img}
                alt='fone'
                width={width < widthMax ? '80vw' : '518px'}
              />
            }
          </section>

          <input
            type='file'
            onChange={onChange}
            disabled={status === 'Concluded'}
          />
        </AreaUpload>

        <AreaDesc width={width < widthMax ? '82vw' : '535px'}>
          <InputLabel
            type='text'
            onChange={e => setTitle(e.target.value)}
            value={title}
            placeholder='Digite o titulo da publicação..'
            label='Título:'
            disabled={status === 'Concluded'}
            maxLength={78}
            Icon={BsTextareaT}
            width={width < widthMax ? '80vw' : '520px'}
            width2={width < widthMax ? '70vw' : '465px'}//Modifica o tamanho do input
            background='#fff'
            isIcon={true}
          />
          <InputLabel
            type='number'
            onChange={e => setPrice(e.target.value)}
            value={price}
            placeholder='0'
            label='Preço:'
            disabled={status === 'Concluded'}
            Icon={BsCurrencyDollar}
            width={width < widthMax ? '30vw' : '120px'}
            width2={width < widthMax ? '20vw' : '65px'}//Modifica o tamanho do input
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
            disabled={status === 'Concluded'}
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
                label='Cota Sorteada:'
                disabled={data.status === 'Concluded'}
                Icon={BsFillTrophyFill}
                width={width < widthMax ? '30vw' : '120px'}
                width2={width < widthMax ? '20vw' : '70px'}//Modifica o tamanho do input
                background='#00A3FF'
                color='#fff'
                isIcon={true}
              />
              {cota > 0 && cota !== "" &&
                filterWinner.map((v, i) =>
                  <List key={i} onClick={() => handleSeleceted(v, i)} color={selected.pos === i ? "#226c91" : "#00A3FF"}>
                    <p>Comprador: <span>{v.buyer}</span></p>
                    <p>CPF: <span>{v.CPF}</span></p>
                    <p>Telefone: <span>{v.phone}</span></p>
                    <p>Total de cotas compradas: <span>{v.qtd}</span></p>
                    <p>Contas: <span>{
                      v.numbers_cota.map((v, i) =>
                        // eslint-disable-next-line react/style-prop-object
                        <h3 style={{ color: v === cota && "#ff0000" }}>{v}</h3>
                      )
                    }</span></p>
                  </List>
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
            {(cota > 0 && cota !== "" && selected !== "" && status === "Concluded") &&
              <Button
                disabled={data.status === 'Concluded'}
                bg={data.status === 'Concluded' ? '#d5d5d5' : '#00A3FF'}
                width={width < widthMax ? '80vw' : '520px'}
                onClick={() => handleSubmit(false)}
              >
                Encerrar Sorteio
              </Button>
            }
            {(status === "Active") &&
              <Button
                disabled={data.status === 'Concluded'}
                bg={data.status === 'Concluded' ? '#d5d5d5' : '#00A3FF'}
                width={width < widthMax ? '80vw' : '520px'}
                onClick={() => handleSubmit(false)}
              >
                Atualizar Sorteio
              </Button>
            }
            <Button
              bg='#ea777b'
              width={width < widthMax ? '80vw' : '520px'}
              onClick={() => deleteSweepstakes(data.id)}
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