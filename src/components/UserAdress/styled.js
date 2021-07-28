import styled from 'styled-components'
import { backgroundColorAdress, textColor } from '../../constants/colors'

export const ContainerAdress = styled.div`

    display: flex;
    /* justify-content: start; */
    justify-content: space-between;
    padding: 5px;
    background-color: ${backgroundColorAdress};

    #adress{
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        
        #title{
            color: ${textColor};
        }
    }
    img{
        width: 24px;
        height: 24px;
        align-self: center;
    }

`