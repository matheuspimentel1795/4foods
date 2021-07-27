import React  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const Profile = ({setLogged}) =>{
    useProtectedPage()
    setLogged(true)
    return(
        <div>
            Profile
        </div>
    )
}
export default Profile