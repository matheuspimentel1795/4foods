import styled from "styled-components";

export const ContainerOrderHistory = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`


export const ContainerCardOrder = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #b8b8b8;
    border-radius: 8px;
    width: 20.5rem;
    /* height: 7.375rem; */
    margin: 0.438rem 0 0;

    #nameRestaurant{
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #e8222e;
        margin: 0 0 0.563rem;
    }

    #date{
        height: 1.125rem;
        margin: 0.563rem 0 0.438rem;
    }

    #subtotal{
        font-weight: bold;
        margin: 0.438rem 0 0;
    }
`