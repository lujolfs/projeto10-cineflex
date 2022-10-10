import { Link, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Assento from "./Assento";

export default function Sessao() {
        const { sessaoId } = useParams()
        const [assentos, setAssentos] = useState([])
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`)
        const location = useLocation()
    
    useEffect(() => {
        promise.then(res => {
            setAssentos(res.data.seats)
        });
    
        promise.catch(erro => {
            console.log(erro.response.data)
        });
    
    }, []);

    return (
        <>
        <Frase>Selecione o(s) assento(s)</Frase>
        <ContContainer>
            <ContainerAssentos>
            {assentos.map((seats) =>
                    (
                    <Assento
                    id = {seats.id}
                    name = {seats.name}
                    isAvailable = {seats.isAvailable}
                    />
                    ))}
            </ContainerAssentos>
        </ContContainer>
        <OutroContainer>
            <ContContContainer>
                <LegendaAssentos status="Selecionado"/>
                <Texto>Selecionado</Texto>
            </ContContContainer>
            <ContContContainer>
                <LegendaAssentos status="Disponível"/>
                <Texto>Disponível</Texto>
            </ContContContainer>
            <ContContContainer>
                <LegendaAssentos status="Indisponível"/>
                <Texto>Indisponível</Texto>
            </ContContContainer>
        </OutroContainer>
        <div><h1>Aqui serão as sessões!</h1></div>
        </>
    )
}

const Frase = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const ContContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const ContainerAssentos = styled.div`
height: 202px;
width: 323px;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
row-gap: 18px;
column-gap: 5px;
`

const LegendaAssentos = styled.div`
width: 26px;
height: 26px;
font-size: 11px;
border: 1px solid ${props => props.status === "Selecionado" ? "#0E7D71" : props.status === "Disponível" ? "#7B8B99" : "#F7C52B"};
border-radius: 12px;
background: ${props => props.status === "Selecionado" ? "#1AAE9E" : props.status === "Disponível" ? "#C3CFD9" : "#FBE192"}
`

const Texto = styled.p`
font-size: 13px;
color: #4E5A65;
`

const ContContContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const OutroContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
`