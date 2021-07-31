import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 20vmax;
    margin-bottom: 2%;
    border: 1px solid lightgray;
    border-radius: 10px;
    overflow: hidden;
    :focus,:hover{
        cursor: pointer;
    }
    @media(max-device-width: 414px){
        width: 90%;
    }
`

export const RestaurantImage = styled.img`
    width: 100%;
    height: 8em;
    margin: 0 0 2% 0;
    object-fit: 100%;
    overflow: hidden;
    @media(max-device-width: 414px){
        width: 100%;
    }
`

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
`