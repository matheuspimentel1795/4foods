import React, { useContext }  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import editPen from '../../assets/editPen.png'
import {goToEditeProfile} from '../../routes/coordinator'
import { useHistory } from 'react-router'
import {ContainerPersonalData} from './styled'
import Loading from '../Loading/Loading'
import { GlobalStateContext } from '../../global/GlobalStateContext'


const PersonalData = () => {
    useProtectedPage()
    const history = useHistory()

    const {dataProfile} = useContext(GlobalStateContext)

    return(
        <ContainerPersonalData>
            {dataProfile.user ? <div>
                <div id={"personalData"}>
                    <div>
                        <p id={"name"}>{dataProfile.user.name}</p>
                        <p id={"email"}>{dataProfile.user.email}</p>
                        <p id={"cpf"}>{dataProfile.user.cpf}</p>
                    </div>
                    <img src={editPen} alt={"Caneta de editar"} onClick={() => goToEditeProfile(history)}/>
                </div>
            </div>: <Loading/>}
            

        </ContainerPersonalData>
    )
}

export default PersonalData

