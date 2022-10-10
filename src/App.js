import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Filmes from "./Filmes";
import Horarios from "./Horarios";
import Sessao from "./Sessao";
import Sucesso from "./Sucesso";

export default function App() {

const [filmes, setFilmes] = useState([]);
const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
    
    
useEffect(() => {
    requisicao.then(resposta => {
        setFilmes(resposta.data);
});
        
    requisicao.catch(erro => {
        console.log(erro.response.data)
});
    
}, []);

    return (
        <BrowserRouter>
            <Container>
                <GlobalStyle/>
                <Header><NavbarLink to="/">CINEFLEX</NavbarLink></Header>
                <Routes>
                    <Route path="/" element={<Filmes filmes = {filmes}/>} />
                    <Route path="/filme/:filmeId" element={<Horarios/>} />
                    <Route path="/sessao/:sessaoId" element={<Sessao/>} />
                    <Route path="/sucesso/" element={<Sucesso/>} />
                </Routes>
            </Container>
        </BrowserRouter>
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


const NavbarLink = styled(Link)`
text-decoration: none;
color: #E8833A;
&:visited, &:focus, &:active:
text-decoration: none;
`

