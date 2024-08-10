import styled from "styled-components";
import { concluidas } from "./Questions";

export default function Footer ({respondidas}) {
 
  return <Container >
  <h2>{respondidas}/{concluidas[0].perguntas} Concluídos</h2>
  </Container> 
}

const Container = styled.footer`
background-color: #FFFFFF;
height: 70px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-family: 'recursive';
font-weight: 400;
font-size: 18px;
line-height: 21.6px;
color: #333333;
position: absolute;
bottom: 0;
`