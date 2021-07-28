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
    height: 6.375rem;
    margin: 0.438rem 0 0;

    #nameRestaurant{
        color: #e8222e;
    }

    #subtotal{
        font-weight: bold;
    }
`