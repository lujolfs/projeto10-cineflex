import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Filme from './Filme';

export default function Horario(filmes, idDoFilme) {

/*     useEffect(() => {
        requisicao.then(resposta => {
            console.log(resposta)
            console.log(resposta.data)
            setFilmes(resposta.data);
    });
            
        requisicao.catch(erro => {
            console.log(erro.response.data)
    });
        
    }, []); */

    console.log(filmes);
    console.log(idDoFilme)

    return (
        <>
        <Frase>Selecione o horário</Frase>
        <div><h1>Olá!</h1></div>
        </>
    )
}

const Frase = styled.div`
display: flex;
align-items: center;
justify-content: center;
`