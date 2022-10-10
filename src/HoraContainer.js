import styled from "styled-components";

export default function HoraContainer(props) {
    const { showtimes } = props;

    return (
        <ContainerHora>
            {showtimes.map((showtimes) =>
            (
                <Hora>
                    {showtimes.name}
                </Hora>
            ))}
        </ContainerHora>
    )
}






const ContainerHora = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    font-size: 20px;
    padding-top: 22px;
    gap: 12px;
    `

const Hora = styled.button`
    font-family: Roboto;
    font-size: 18px;
    background-color: #E8833A;
    justify-content: center;
    border-radius: 3px;
    width: 85px;
    height: 45px;
    border: none;
    color: #FFFFFF;
    `