import { Link, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Horario from './Horario'

export default function Horarios() {
    const { filmeId } = useParams()
    const [horarios, setHorarios] = useState([])
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`)
    const location = useLocation()
    const posterFooter = location.state


useEffect(() => {
    promise.then(res => {
        setHorarios(res.data.days);
    });

    promise.catch(erro => {
        console.log(erro.response.data)
    });

}, []);

    return (
        <>
            <Frase>Selecione o horário</Frase>
            <Horario horarios = {horarios} />
            <Footer>
                <PosterContainer><Poster src={posterFooter.poster.poster}/></PosterContainer>
                <Titulo>{posterFooter.nome.titulo}</Titulo>
            </Footer>
        </>
    )

}

const Frase = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Footer = styled.div`
background-color: #DFE6ED;
display:flex;
padding: 10px;
`

const Poster = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`
const PosterContainer = styled.div`
height: 89px;
width: 64px;
padding: 2vw;
background-color: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex
justify-content: center;
`


const Titulo = styled.div`
margin-left: 15px;
display: flex;
align-items: center;
justify-content: center;
font-size: 26px;
`