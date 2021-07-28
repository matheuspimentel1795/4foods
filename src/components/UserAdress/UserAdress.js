import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToAdress } from '../../routes/coordinator'
import editPen from '../../assets/editPen.png'
import { ContainerAdress } from './styled'

const UserAdress = () =>{
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    useProtectedPage()

    const data = useRequestData([], "/profile/address", setIsLoading)

    return(
        <ContainerAdress>
            {data.address ? <div>
                <p id={"title"}>Endereço cadastrado</p>
                <div id={"adress"}>
                    <p>{`${data.address.street}, ${data.address.number}, ${data.address.complement} ${data.address.neighbourhood} 
                    ${data.address.city}-${data.address.state} `}</p>
                    <img src={editPen} alt={"Caneta de editar"} onClick={() => goToAdress(history)}/>
                </div>
            </div>: <></>}

        </ContainerAdress>
    )
}

export default UserAdress