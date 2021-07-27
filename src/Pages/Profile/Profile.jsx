import React  from 'react'
import useUnProtected from '../../hooks/useUnprotectedPage'

const Profile = () =>{
    useUnProtected()
    return(
        <div>
            Feed
        </div>
    )
}
export default Profile