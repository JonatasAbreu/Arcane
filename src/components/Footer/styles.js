import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 50px;
    margin-bottom: 30px;

    h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    a {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        text-transform: uppercase;
        color: #E7E7E7;
        text-decoration: none;
        cursor: pointer;
    }
`