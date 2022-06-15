import React from "react";
import IconButton from '../../assets/iconButton.svg'
import IconTrailer from '../../assets/iconTrailer.svg'
import IconNumber from '../../assets/iconNumber.svg'
import IconNumber2 from '../../assets/number2.svg'
import { Container, Title, Trailers } from "./styles";

function Main() {
    return (
        <Container>
            <Title>
                <h1>ARCANE</h1>
                <h2>PARTE 2</h2>
                <div>
                    <button className="buttonwarn" type="button"><img src={IconButton} alt="iconButton" />AVISE-ME</button>
                    <button className="buttonAddList" type="button">ADICIONAR NA LISTA</button>
                </div>

            </Title>
            <Trailers>
                <h2>TRAILERS</h2>
                <div className="videoOne">
                    <img src={IconTrailer} alt="play"/>
                    <img src={IconNumber}  alt="number"/>
                </div>
                <div className="videoTwo">
                    <img src={IconTrailer} alt="play"/>
                    <img src={IconNumber2}  alt="number" />
                </div>
            </Trailers>
        </Container>

    )
}

export default Main