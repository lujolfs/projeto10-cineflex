import { Link, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Horario from './Horario'

export default function Horarios(props) {
    const { filmeId } = useParams()
    const [horarios, setHorarios] = useState([])
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`)
    const location = useLocation()

    const posterFooter = location.state
    console.log(posterFooter);


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
                <Poster src={posterFooter.poster.poster}/>
            </Footer>
        </>
    )

}

const Frase = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const ContainerHorarios = styled.div`

`


const Footer = styled.div`
background-color: #DFE6ED;
`

const Poster = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`