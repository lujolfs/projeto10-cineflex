import styled from "styled-components";

export default function Filme({ poster }) {
    return (
        <FilmeContainer>
            <Poster src={poster}/>
        </FilmeContainer>
    )
}


const FilmeContainer = styled.div`
height: 209px;
width: 145px;
padding: 2vw;
background-color: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex
justify-content: center;
`

const Poster = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`
