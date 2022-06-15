import React from "react";
import { Container, ContainerInputs, Label, Input } from './styles'

function Login() {
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

            <button>ENTRAR</button>
        </Container>
    )


}

export default Login