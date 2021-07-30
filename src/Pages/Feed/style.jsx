import styled from  'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 64px 0 80px 0;
    .search-box{
        width: 20vmax;
        margin: 1%;
    }
    @media(max-device-width: 414px){
        .search-box{
           width: 90%;
           margin: 0 0 2% 0;
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

export const ContainerCategories = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2%;
    width: 100%;
    margin: 0 0 1% 0;
    height: 5vmin;
    p{
        :hover,:focus{
            cursor: pointer;
        }
    }
    @media(max-device-width: 414px){
        justify-content: flex-start;
        flex-wrap: nowrap;
        gap: 8%;
        width: 90%;
        height: 5vmax;
        margin: 2% 0;
        padding-left: 10%;
        box-sizing: border-box;
        overflow: scroll;
        scroll-behavior: smooth;
        scrollbar-width: none;    
        ::-webkit-scrollbar {
            display: none;
            width: 0;
            background: transparent;
    }
    }

`