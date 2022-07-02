import styled from "styled-components";
import Background from '../../assets/backgroundhome.jpg'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-image: url(${Background});
background-size: cover;

h1 {
   margin-top: 25px;
   margin-bottom: 25px;
   color: #E7E7E7;
}
`

export const ContainerItems = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
margin-bottom: 20px;
`
export const PlayerDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
justify-content: space-around;
gap: 10px;

div {
    height: 200px;
    width: 300px;
    
   
}

`