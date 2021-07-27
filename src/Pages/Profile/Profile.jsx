import React  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const Profile = () =>{
    useProtectedPage()

    return(
        <div>
            Profile
        </div>
    )
}
export default Profile