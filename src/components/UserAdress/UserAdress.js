import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToEditAdress } from '../../routes/coordinator'
import editPen from '../../assets/editPen.png'
import { ContainerAdress } from './styled'

const UserAdress = () =>{
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    useProtectedPage()

    const data = useRequestData([], "/profile/address")

    return(
        <div>
            {data.address ? <ContainerAdress>
                <div id={"adress"}>
                    <p id={"title"}>Endereço cadastrado</p>
                    <p>{`${data.address.street}, ${data.address.number}, ${data.address.complement} ${data.address.neighbourhood} 
                    ${data.address.city}-${data.address.state} `}</p>
                </div>
                    <img src={editPen} alt={"Caneta de editar"} onClick={() => goToEditAdress(history,data.id)}/>
            </ContainerAdress>: <></>}

        </div>
    )
}

export default UserAdress