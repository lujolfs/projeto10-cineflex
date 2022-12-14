import styled from "styled-components";
import HoraContainer from "./HoraContainer"

export default function Dias(props) {
    const {weekday, date, showtimes, id} = props
    return (
        <>
            <DataContainer>
                {weekday} - {date}
                 <HoraContainer showtimes={showtimes} id={id}/>
            </DataContainer>
        </>
    )
}

const DataContainer = styled.div`
margin-left: 3vw;
display: flex;
flex-direction: column;
justify-content: left;
font-size: 20px;
padding: 23px 0px;
`