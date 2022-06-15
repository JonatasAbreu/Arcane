import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header } from './styles'
import ButtonMenu from '../../assets/buttonmenu.svg'




function HeaderItems() {

    let navigate = useNavigate()


    return (
        <Header>
            <img src={ButtonMenu} alt="buttonMenu" />
            <Button onClick={() => { navigate("/register") }} className="buttonSignUp" type="button">INSCREVA-SE</Button>
            <Button onClick={() => { navigate("login") }} className="buttonlogin">ENTRAR</Button>
        </Header>
    )
}


export default HeaderItems