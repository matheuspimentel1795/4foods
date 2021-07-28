import styled from 'styled-components'

export const ContainerHeader = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    align-items: center;
    justify-items: center;
    text-align: center;

    p{
        align-self: center;
    }

    img{
        width: 50px;
        height: 50px;
    }
`