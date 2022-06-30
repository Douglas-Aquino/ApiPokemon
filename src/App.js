import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import axios from "axios"

const GlobalStyled = createGlobalStyle`
padding:0;
margin:0;
box-sizing:border-box;
body{
  background-color:darkred;
}
`

const T1 = styled.h1`
color:white;
font-size:3vw;
`
const PokImg = styled.img`
  width:10vw;
  position:absolute;
  top:40vh;
  left:47vw;
`
const Contain = styled.div`
text-align: center;

select{
  color:white;
  border-radius:10px;
  border:solid purple;
  background-color:purple;
  font-size:1vw;
  padding:0.5vw;
}

div{
  img{
    width:120vh;
  }
}
` 

export default function App(){
  
  const [Number , setNumber] = useState()
  const [Nome , setNome] = useState()
  const [imgPoki, setImgPoki] = useState()

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${Number}`).then((response) =>{
    console.log(response)
    setNome(response.data.name)
    setImgPoki(response.data.sprites.front_default)
    })
  },[Number])
  
  return(
        <Contain>
          <GlobalStyled/>
          <T1>Escolha seu Pokemon: {Nome} </T1>
          <select onChange={(e)=>{setNumber(e.target.value)}}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          </select>
          <PokImg src={imgPoki} alt={Nome}/>
          <div>
            <img src="https://pokemonrevolution.net/forum/uploads/monthly_2021_09/d335vj0-f8c3cf11-04fc-4e84-a45a-a51f2498199a.png.a73d581e9290d168b70f7c41868c0eac.png" alt="Arena"/>
          </div>
        </Contain>
    )
}