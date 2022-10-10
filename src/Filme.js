import styled from "styled-components";
import {Link} from 'react-router-dom'

export default function Filme(props) {
    const {poster, id, titulo} = props
    const infosFooter = {poster: {poster}, nome: {titulo}}

    return (
            <Link to={`/filme/${id}`} state={infosFooter}>
            <FilmeContainer>
                <Poster src={poster}/>
            </FilmeContainer>
            </Link>
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
