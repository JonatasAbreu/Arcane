import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContainerInputs, Label, Input } from './styles'

function Login() {
    let navigate = useNavigate()

    return (
        <Container>
            <h1>ENTRAR</h1>
            <ContainerInputs>
                <Label>Nome</Label>
                <Input type="text" />

                <Label>Email</Label>
                <Input type="email" />

                <Label>Senha</Label>
                <Input type="password" />
            </ContainerInputs>

            <button onClick={() => {navigate("/home")}}>ENTRAR</button>
        </Container>
    )


}

export default Login