import styled from 'styled-components'

export const ContainerPersonalData = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    padding: 5px;

    #name{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        img{
            width: 24px;
            height: 24px;
            align-self: flex-start;
        }
    }

`