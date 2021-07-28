import React, {useState}  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import editPen from '../../assets/editPen.png'
import {goToEditeProfile} from '../../routes/coordinator'
import { useHistory } from 'react-router'
import {ContainerPersonalData} from './styled'


const PersonalData = () => {
    useProtectedPage()
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const data = useRequestData([], "/profile", setIsLoading)
    return(
        <ContainerPersonalData>
            {data.user ? <div>
                <div id={"name"}>
                    <div>
                        <p>{data.user.name}</p>
                        <p>{data.user.email}</p>
                        <p>{data.user.cpf}</p>
                    </div>
                    <img src={editPen} alt={"Caneta de editar"} onClick={() => goToEditeProfile(history,data.user.name, data.user.email, data.user.cpf)}/>
                </div>
            </div>: <></>}
            

        </ContainerPersonalData>
    )
}

export default PersonalData

