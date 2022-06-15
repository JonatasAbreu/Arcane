import styled from 'styled-components'
import ImgTrailer1 from '../../assets/imgTrailer1.svg'
import ImgTrailer2 from '../../assets/imgTrailer2.svg'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    justify-content: center;
    align-items: center;
    gap: 200px;
    margin-top: 230px;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 128px;
    line-height: 156px;
    text-transform: uppercase;
    color: #FFFFFF;
}

h2 {
    font-style: normal;
    font-weight: 800;
    font-size: 128px;
    line-height: 156px;
    text-transform: uppercase;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #FFFFFF;
    color: transparent;
    
}

div {
    display: flex;
    justify-content: space-around;
    justify-content: start;
    align-items: center;
    gap: 50px;
}

.buttonwarn{
        width: 183px;
        height: 49px;
        background: #0080C8;
        display: flex;
        justify-content: space-around;
        justify-content: center;
        align-items: center;
        gap: 18px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        text-transform: uppercase;
        color: #FFFFFF;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }

        &:active {
            opacity: 0.9;
        }
    }

    .buttonAddList{
        width: 253px;
        height: 49px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        text-transform: uppercase;
        color: #FFFFFF;
        border: 2px solid #FFFFFF;
        border-radius: 4px;
        background: transparent;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }

        &:active {
            opacity: 0.9;
        }
    }
`

export const Trailers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
 
    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-transform: uppercase;
        color: #FFFFFF; 
    }
    .videoOne {
    background: url(${ImgTrailer1});
    display: flex;
    justify-content: space-between;
    width: 250px;
    height: 125.71px;
    gap: 185px;
    align-items: flex-end;
    padding: 10px;
    cursor: pointer;

    img{
        width: 27.47px;
        height: 27px;
        cursor: pointer;
    }
}   
    img:hover {
            opacity: 0.7;
        }

    .videoTwo {
    background: url(${ImgTrailer2});
    display: flex;
    justify-content: space-between;
    width: 250px;
    height: 125.71px;
    gap: 185px;
    align-items: flex-end;
    padding: 10px;
    cursor: pointer;

    img{
        width: 27.47px;
        height: 27px;
        cursor: pointer;
    }

    img:hover {
        opacity: 0.7;
    }

    
}
`