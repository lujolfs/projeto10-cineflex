import styled from "styled-components";

export default function HoraContainer(props) {
    const { showtimes } = props;

    return (
        <ContainerHora>
            {showtimes.map((showtimes, index) =>
            (
                <Hora>
                    {showtimes[index]}
                    <h1> O que é isto que está acontecendo</h1>
                </Hora>
            ))}
        </ContainerHora>
    )
}






const ContainerHora = styled.div`
    background-color: red;
    display: flex;
    `

const Hora = styled.div`
    background-color: blue;
    `