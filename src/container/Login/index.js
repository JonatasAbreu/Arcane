import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from "../../service/firebase";
import { Container, ContainerInputs, Label, Input, ButtonGoogle } from './styles'

function Login() {
    let navigate = useNavigate()
    const [user, setUser] = useState()
    const handleGoogleSingIn = ()=> {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then((response) => {
            setUser(response)
            
        })
        .catch((error) => {
            console.log(error)
        })

       
    }

    if(user){
        navigate("/home")
        console.log("useeeer")
    }
console.log("user", user)
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
            <div>
                <button onClick={() => {navigate("/home")}}>ENTRAR</button>
           <ButtonGoogle onClick={handleGoogleSingIn}>
            Logar com Google
           </ButtonGoogle>
           </div>
            
        </Container>
    )


}

export default Login