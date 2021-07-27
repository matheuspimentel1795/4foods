import React, {useState}  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import editPen from '../../assets/editPen.png'
import {goToEditeProfile} from '../../routes/coordinator'
import { useHistory } from 'react-router'

const Profile = ({setLogged}) =>{
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    useProtectedPage()
    setLogged(true)

    const data = useRequestData([], "/profile", setIsLoading)
    console.log(data.user)

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
export default Profile