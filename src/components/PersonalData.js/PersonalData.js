import React, {useState}  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import editPen from '../../assets/editPen.png'
import {goToEditeProfile} from '../../routes/coordinator'
import { useHistory } from 'react-router'


const PersonalData = () => {
    useProtectedPage()

    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const data = useRequestData([], "/profile", setIsLoading)
    return(
        <div>
            {data.user ? <div>
                <div>
                    <p>{data.user.name}</p>
                    <img src={editPen} alt={"Caneta de editar"} onClick={() => goToEditeProfile(history,data.user.name, data.user.email, data.user.cpf)}/>
                </div>
                <p>{data.user.email}</p>
                <p>{data.user.cpf}</p>
            </div>: <></>}
            

        </div>
    )
}

export default PersonalData

