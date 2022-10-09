import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Filme from './Filme';

export default function Sessao() {

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

    return (
        <>
        <Frase>Selecione o horário</Frase>
        <div><h1>Aqui serão as sessões!</h1></div>
        </>
    )
}

const Frase = styled.div`
display: flex;
align-items: center;
justify-content: center;
`