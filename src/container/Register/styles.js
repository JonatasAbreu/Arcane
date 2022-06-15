import styled from 'styled-components'
import Background from '../../assets/backgroundRegister.jpg'

export const Container = styled.div`
    height: 100vh;
    background: url(${Background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-top: 60px ;
        font-style: normal;
        font-weight: 600;
        font-size: 34px;
        line-height: 29px;
        text-transform: uppercase;
        color: #E7E7E7;
    }

    button {
        width: 184px;
        height: 41px;
        margin-top: 40px;
        background: #0080C8;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
        border-radius: 4px;
        border: none;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }

        &:active {
            opacity: 0.9;
        }
        
    }
`

export const ContainerInputs =styled.div`
    margin-top: 25px;

`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 2px;

color: #FFFFFF;
`
export const Input = styled.input`
    width: 391.42px;
    height: 38.32px;
    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    padding-left: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-bottom: 40px;
`