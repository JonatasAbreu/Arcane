import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 80px;

    img {
        margin-right: 800px;
        cursor: pointer;
    }

    .buttonSignUp{
        width: 184px;
        height: 41px;
        background: #0080C8;
        border-radius: 4px;
        border: none;
    }

    .buttonlogin {
        width: 138px;
        height: 41px;
        border: 2px solid #FFFFFF;
        border-radius: 4px;
        background: transparent;
    }

`

export const Button = styled.button`
    margin-left: 50px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.9;
    }
`