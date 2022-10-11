import styled from "styled-components";
import { useState } from 'react';
import {Link} from 'react-router-dom'

export default function Assento(props) {
const [clicado, setClicado] = useState(false)

    const {id, name, isAvailable, listaAssentos, setListaAssentos, listaTempAssentos} = props

function checkDisponibilidade() {
    if (isAvailable) {
        setClicado(!clicado);
        console.log(clicado);
        console.log(name);
        console.log(listaAssentos);
    } else {
        alert("Esse assento não está disponível");
    }
}

    return (
            <AssentoContainer 
            status={isAvailable} 
            clicado={clicado} 
            onClick={checkDisponibilidade}>
                {name}
            </AssentoContainer>
    )
}


const AssentoContainer = styled.button`
width: 26px;
height: 26px;
font-size: 11px;
border: 1px solid ${props => props.clicado ? "#0E7D71" :  props.status ? "#7B8B99" : "#F7C52B"};
border-radius: 12px;
background: ${props => props.clicado ? "#1AAE9E" :  props.status ? "#C3CFD9" : "#FBE192"}
`
