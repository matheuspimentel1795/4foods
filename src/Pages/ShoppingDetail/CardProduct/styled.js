import styled from "styled-components"



export const Card = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #b8b8b8;
    display: grid;
    grid-template-columns: 97px 1fr;
    border-radius: 8px;
    //overflow: hidden;
    margin-bottom: 8px;
    position: relative;

`

export const ContainerImg = styled.div`
    width: 6rem;
    height: 7rem;
    object-fit: contain;

`
export const Img = styled.img`
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

`
export const PName = styled.p`
    margin: 1.125rem 3.063rem 1rem 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
    

`
export const PDescription = styled.p`
  
    margin: 0.5rem 1rem 0.25rem;
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #B8B8B8;

`
export const ContainerDescription = styled.div`
    grid-column: 2/3;
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;

    
  
`


export const Text = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0px;


  
 
  p{
    
     :nth-child(2){
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #e86e5a;
      box-sizing: border-box;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;
        padding: 0px;
        margin: 0px;
      color: #e86e5a;
    }
  }
`
export const PPrice = styled.p`
    width: 7.375rem;
    height: 1.188rem;
    margin: 0.25rem 0.5rem 0.938rem 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
`
export const Button = styled.button`
    width: 5.625rem;
    height: 1.938rem;
    border: 1px solid black;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: white;

`
export const ContainerCard = styled.div`
    margin-top: 15px;
    margin-right: 5px;
    margin-left: 5px;
    
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;

`