import styled from  'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .search-box{
        width: 20%;
        margin: 1%;
    }
    @media(max-device-width: 414px){
        .search-box{
           width: 96%;
           margin: 2%;
        }  
    }
`

export const ContainerList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5%;
    @media(max-device-width: 414px){
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;   
    }
`

export const ContainerRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media(max-device-width: 414px){
        width: 100%;
    }
`
export const ContainerTop = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-items: center;
align-items: center;
border-bottom: 2px solid lightgray;
button{
     justify-self:left;
    }
`