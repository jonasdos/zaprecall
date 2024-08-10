import styled from 'styled-components'
import Questions from './Questions.jsx'
import Footer from './Footer.jsx'
import { useState } from 'react';
import Titulo from './Titulo.jsx';
export default function Flashcard() {

  const [respondidas, setRespondidas] = useState(0);

 return( <Card>
    <Titulo/>
    <Questions setRespondidas={setRespondidas}/>
    <Footer respondidas={respondidas}/>
  </Card>
  )
}

const Card = styled.main`
background-color: #FB6B6B;
display: flex;
flex-direction: column;
width: 375px;
height: 667px;
padding-top: 44px;
align-items: center;
box-shadow: 1px 1px 3px #07070737;
border: none;
position: relative;
`


