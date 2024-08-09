import styled from "styled-components"
import {options} from '../data/options'

export default function Options ({onClick, indexCarta}) {
  return <><Container>
  {options.map((option, index) =>
    
    <Item key={index} i={index} onClick={() => onClick(indexCarta, index, option)}>
      <p>{option}</p>
    </Item> 
    
  )}</Container>
  </>
}

const Item = styled.div`
background-color: ${(props) => 
  props.i === 0 ? '#FF3030' : 
  props.i === 1 ? '#FF922E' : 
  '#2FBE34'};
  color: #FFFFFF;
  height: 37px;
  width: 85px;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  align-content: center;
  p {
    margin: 0px 10px;
  }
`

const Container = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`