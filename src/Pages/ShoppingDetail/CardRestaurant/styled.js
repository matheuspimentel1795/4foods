import styled from "styled-components"


export const Container = styled.article`
    width: 100%;
  min-height: 268px;
  max-height: 268px;
  margin-top: 17px;
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: hidden;
`

export const Img = styled.img`
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;

`

export const PName = styled.p`
color: #e86e5a;
`
export const Grey = styled.p`
  color : #b8b8b8;

`
export const ContainerDescription = styled.div`
width: 100%;
  min-height: 148px;
  max-height: 148px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-color: blue;
  margin-left: 20px;

  p{
      margin: 0px;

  }
`