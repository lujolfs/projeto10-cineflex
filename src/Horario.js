import { Link } from "react-router-dom";
import styled from "styled-components";
import Dias from "./Dias";

export default function Horario(props) {
    const {horarios} = props
    return (
        <ContainerHorario>
            <HorarioSite>
                {horarios.map((horarios) =>
                (
                <Dias
                date = {horarios.date}
                id = {horarios.id}
                key = {horarios.id}
                weekday = {horarios.weekday}
                showtimes = {horarios.showtimes}
                />
                ))}
            </HorarioSite>
        </ContainerHorario>
    )
}


const ContainerHorario = styled.div`
justify-content: left;
`

const HorarioSite = styled.div`
justify-content: left;
`