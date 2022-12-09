import React, { useContext } from "react";
import {
  Container,
  Perfil,
  ListQuestions,
  Line
} from "./styles";
import { BsBoxArrowRight } from "react-icons/bs";

export default function AreaDoubt({ setIsForm, signed, AuthContext }) {
  const { auth, signOut } = useContext(AuthContext);

  return (
    <Container>
      <Perfil>
        {signed ?
          <>
            <p>Logado com <span>{auth && auth.name}</span></p>
            <BsBoxArrowRight color="#B7B7B7" cursor='pointer' onClick={signOut} />
          </>
          :
          <button onClick={() => setIsForm(true)}>Acessar</button>
        }
      </Perfil>

      <h4>Perguntas frequentes</h4>
      <ListQuestions>
        <Line>-{">"} Como ver meus números?</Line>
      </ListQuestions>
    </Container>
  )
};