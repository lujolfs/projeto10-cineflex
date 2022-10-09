import { useState } from "react"
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle"
import Filmes from "./Filmes"

export default function App() {
    return (
        <Container>
            <GlobalStyle/>
            <Header>CINEFLEX</Header>
            <Frase>Selecione o filme</Frase>
            <Filmes/>
        </Container>
    )
}

const Container = styled.div`
font-family: Roboto;
font-weight: 400;
font-size: 24px;
color: #293845;
background-color: #FFFFFF;
max-width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
gap: 5vh;
overflow-x: hidden
`

const Header = styled.div`
font-weight: 400;
font-size: 34px;
color: #E8833A;
background-color: #C3CFD9;
width: 100vw;
height: 10vh;
display: flex;
align-items: center;
justify-content: center;

`

const Frase = styled.div`
display: flex;
align-items: center;
justify-content: center;
`