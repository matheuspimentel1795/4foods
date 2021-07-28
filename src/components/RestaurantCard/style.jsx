import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 20%;
    margin-bottom: 2%;
    border: 1px solid lightgray;
    border-radius: 10px;
    overflow: hidden;
    :focus,:hover{
        cursor: pointer;
    }
    @media(max-device-width: 414px){
        width: 98%;
    }
`

export const RestaurantImage = styled.img`
    width: 100%;
    height: 10em;
    margin: 0 0 2% 0;
    object-fit: contain;
    overflow: hidden;
    /* #bg{
        position: absolute;
        z-index:-1;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;        
        background-image: url(${(props) => props.src});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-filter: blur(20px);
        -moz-filter: blur(20px);
        -o-filter: blur(20px);
        -ms-filter: blur(20px);
        filter: blur(20px);
        overflow: hidden;
        } */
`

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
`