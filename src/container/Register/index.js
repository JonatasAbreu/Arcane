import React from "react";
import { Container, ContainerInputs, Label, Input } from './styles'

function Register() {
    return (
        <Container>
            <h1>INSCREVA-SE</h1>
            <ContainerInputs>
                <Label>Nome</Label>
                <Input type="text" />

                <Label>Email</Label>
                <Input type="email" />

                <Label>Senha</Label>
                <Input type="password" />

                <Label>Confirmar Senha</Label>
                <Input type="password" />
            </ContainerInputs>
            <button>INSCREVA-SE</button>
        </Container>
    )


}

export default Register