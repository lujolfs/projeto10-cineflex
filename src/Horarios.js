import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Horario from './Horario'

export default function Horarios() {
    const { filmeId } = useParams()
    const [horarios, setHorarios] = useState([])
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`)

useEffect(() => {
    promise.then(res => {
        setHorarios(res.data.days);
        console.log(res.data.days);
    });

    promise.catch(erro => {
        console.log(erro.response.data)
    });

}, []);


    console.log(filmeId);

    return (
        <>
            <Frase>Selecione o horário</Frase>
            <Horario horarios = {horarios} />
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