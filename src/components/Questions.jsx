/* area de importação */
import play_icon from '../assets/seta_play.png'
import turn_over from '../assets/seta_virar.png'
import erro from '../assets/icone_erro.png'
import quase from '../assets/icone_quase.png'
import zap from '../assets/icone_certo.png'
import styled from 'styled-components'
import {cards} from '../data/data.js'
import { useState } from 'react'
import Options from './Options.jsx'


export const concluidas = [{
  perguntas: cards.length,
  respondidas: 0
}];

/* Elemento a ser incorporado no app */ 
export default function Questions({ setRespondidas}) { 
  const [questoes, setEstadoQuestion] = useState( 
    cards.map(() => ({
      fase:0,
      optionSelected: null,
      icone: null
    }))
  )

const revelaPergunta = (index) => { 
  setEstadoQuestion(prevState =>
    prevState.map((question, i)=> 
      i === index ? {...question, fase: 1} : question)
  )

}  
const revelaResposta = (index) => {
  
  setEstadoQuestion(prevState => 
    prevState.map((question, i) => 
      i=== index ? {...question, fase: 2} : question))

}

const armazenaResposta = (indexCarta, index, option) => {
  setRespondidas(prevState => prevState + 1)
  

  setEstadoQuestion(prevState => 
    prevState.map((question, i) =>
  i === indexCarta 
  ? {
    ...question, 
    optionSelected: 
    (option === 'Zap!'
      ? '#2FBE34'
      : option === 'Quase não lembrei' 
      ? '#FF922E' 
      :'#FF3030' ), 
      icone: 
      (option === 'Zap!'
      ? zap
      : option === 'Quase não lembrei' 
      ? quase 
      : erro ), 
      fase: 3} 
      : question)
)

}

 return( 
    <Container>
     {cards.map( (item, index) =>
      <Question key={index} fase={questoes[index].fase} cor={questoes[index].optionSelected} icone={questoes[index].icone} > 
        { questoes[index].fase === 0 &&(
              <>
              <h1 >Pergunta {index +1}</h1>
              <img  src={play_icon} alt='Icone de play' onClick={() => revelaPergunta(index)}/>
              </>
        )}
          { questoes[index].fase === 1 &&(
              <>
              <h1>{item.question}</h1>
              <img  src={turn_over} alt='Seta de virar' onClick={() => revelaResposta(index)} />
              </>
        )}
               { questoes[index].fase === 2 &&(
              <>
              <h1>{item.answer}</h1>
              <Options onClick={armazenaResposta} indexCarta={index} />

              </>
        )}
             { questoes[index].fase === 3 &&(
              
              <>
              <h1>Pergunta {index +1 }</h1>
              <img  src={questoes[index].icone} alt='Icone de play'/>
              </>
        ) 
        }
        
      
        </Question>
    )}
 
    </Container>

  )
}

const Container = styled.div`
width: 300px;
height: 450px;
overflow: auto;

`

const Question = styled.div`
height: ${(props) => props.fase === 1 || props.fase === 2 ? '130px' : '65px'};
border: none;
border-radius: 5px;
box-shadow: 0px 4px 5px 0px #00000026;
font-family: 'recursive';
font-weight: ${(props) => props.fase === 1 || props.fase === 2 ? '400' : '700'};
font-size:${(props) => props.fase === 1 || props.fase === 2 ? '18px' : '16px'};
color: ${props => props.cor != null ? props.cor : '#333333'};
margin-bottom: 25px;
padding:${(props) => props.fase === 1 || props.fase === 2 ? '18px 15px 10px 15px' : '15px'};  ;
background-color:${(props) => props.fase === 0 || props.fase === 3  ? '#FFFFFF': '#FFFFD4'} ;
display: flex;
flex-direction: ${(props => props.fase === 2 ? 'column': '' )};
justify-content: space-between;
align-items: center;
text-decoration: ${(props) => props.fase === 3 ? 'line-through': 'none'};
img {
  width: ${(props) => props.fase === 1 ? '30px': '20px'};
  align-self: ${(props) => props.fase === 1 ? 'end': 'center'};
}
h1 {
  align-self: ${(props) => props.fase === 1 || props.fase === 2 ? 'start': 'center'};
}
`