import { Link } from "react-router-dom";
import styled from "styled-components";
import Filme from './Filme';

export default function Filmes(props) {
const {filmes, setPoster} = props
    return (
        <>
            <Frase>Selecione o filme</Frase>
            <ContainerFilmes>
                {filmes.map((filmes) =>
                (
                <Filme
                poster = {filmes.posterURL}
                id = {filmes.id}
                key = {filmes.id}
                lancamento = {filmes.releaseDate}
                resumo = {filmes.overview}
                titulo = {filmes.title}
                />
                ))}
            </ContainerFilmes>
        </>
    )
}

const Frase = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const ContainerFilmes = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
align-content: center;
max-height: 280vh;
position: relative;
gap: 3vw;
margin-bottom: 2vh;
`

const BrowsingLink = styled(Link)`
text-decoration: none;
&:visited, &:focus, &:active:
text-decoration: none;
`