import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Filme from './Filme';

export default function Filmes() {
const [filmes, setFilmes] = useState([]);
const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")


useEffect(() => {
    requisicao.then(resposta => {
        console.log(resposta)
        console.log(resposta.data)
        setFilmes(resposta.data);
    });

    requisicao.catch(erro => {
        console.log(erro.response.data)
    });

}, []);



    return (
        <ContainerFilmes>
            {filmes.map((filmes) =>
            (
            <Filme
            poster = {filmes.posterURL}
            key = {filmes.id}
            lancamento = {filmes.releaseDate}
            resumo = {filmes.overview}
            titulo = {filmes.title}
            />
            ))}
        </ContainerFilmes>
    )
}

const ContainerFilmes = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
align-content: center;
max-height: 280vh;
position: relative;
gap: 3vw;
`
