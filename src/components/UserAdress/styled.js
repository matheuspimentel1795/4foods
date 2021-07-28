import styled from 'styled-components'
import { backgroundColorAdress, textColor } from '../../constants/colors'

export const ContainerAdress = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    background-color: ${backgroundColorAdress};
    padding: 5px;

    #title{
        color: ${textColor};
    }

    #adress{
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: flex-start;
        
        img{
            width: 24px;
            height: 24px;
        }
    }

`