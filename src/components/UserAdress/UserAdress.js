import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToEditAdress } from '../../routes/coordinator'
import editPen from '../../assets/editPen.png'
import { ContainerAdress } from './styled'
import Loading from '../Loading/Loading'

const UserAdress = () =>{
    const history = useHistory()

    useProtectedPage()

    const data = useRequestData([], "/profile/address")

    return(
        <div>
            {data.address ? <ContainerAdress>
                <div id={"adress"}>
                    <p id={"title"}>Endereço cadastrado</p>
                    <p id={"adress"}>{`${data.address.street}, ${data.address.number}, ${data.address.complement} ${data.address.neighbourhood} 
                    ${data.address.city}-${data.address.state} `}</p>
                </div>
                    <img src={editPen} alt={"Caneta de editar"} onClick={() => goToEditAdress(history,data.id)}/>
            </ContainerAdress>: <Loading/>}
        </div>
    )
}

export default UserAdress