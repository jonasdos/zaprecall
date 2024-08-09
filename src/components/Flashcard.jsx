import logo from '../assets/logo.png'
import styled from 'styled-components'
import Questions from './Questions.jsx'
export default function Flashcard() {
 return( <Card>
    <Titulo>
      <img src={logo} alt="Icone" />
      <h1>ZapRecall</h1>
    </Titulo>
    <Questions/>
    <Bottom/>
  </Card>
  )
}

const Card = styled.main`
background-color: #FB6B6B;
display: flex;
flex-direction: column;
max-width: 375px;
padding-top: 44px;
align-items: center;
justify-content: center;
box-shadow: 1px 1px 3px #07070737;
border: none;
`
const Titulo = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 250px;
margin-bottom: 40px;

h1{
  font-family: righteous;
  font-weight: 400;
  font-size: 36px;
  line-height: 44.7px;
  letter-spacing: -0.012em;
  text-align: center;
  color: #FFFFFF;
 
}
img {
  width: 52px;

}
`

const Bottom = styled.footer`
background-color: #FFFFFF;
height: 70px;
`