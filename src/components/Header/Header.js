import React from 'react'
import { useHistory } from 'react-router-dom'
import back from '../../assets/back.png'
import { ContainerHeader } from './styled'

const Header = ({infoHeader}) => {
    const history = useHistory()

    const goBackPage = () => {
        history.goBack()
    }

    return(
        <ContainerHeader>
            {infoHeader=== "Endereço" || infoHeader==="Editar" || infoHeader=== "Cadastrar" ? <img src={back} alt={"Botão Voltar"} onClick={goBackPage}/>: <div></div>}
            <p>{infoHeader}</p>
            <div></div>
        </ContainerHeader>
    )
}

export default Header