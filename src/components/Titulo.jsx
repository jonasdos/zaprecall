import styled from "styled-components"
import logo from '../assets/logo.png'

export default function Titulo() {
  return <Header>
<img src={logo} alt="Icone" />
<h1>ZapRecall</h1>
</Header>
}

const Header = styled.header`
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
