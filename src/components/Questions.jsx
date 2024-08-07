import play_icon from '../assets/seta_play.png'
import styled from 'styled-components'
import {cards} from '../data/data.js'


export default function Questions() {
 return( 
    <Questionscss>
      {cards.map((item, index) => (
        <Question key={index}>
          <h1>Pergunta {index +1}</h1>
          <img src={play_icon} alt='Icone de play'/>
        </Question>
      ))}
    </Questionscss>

  )
}

const Questionscss = styled.div`
margin: 25px 0px;
width: 300px;
display: flex;
flex-direction: column;
align-items: center;
`
const Question = styled.div`
margin: 12.5px;
padding: 25px 15px 21px 15px;
display: flex;
background-color: #ffffff;
width: 300px;
justify-content: space-between;
font-weight: 700;
font-family: recursive;
color: #333333;
line-height: 19.2px;
border-radius: 5px;
box-shadow: 0px 4px 5px #00000026;
`