import React from 'react'
import OrdersHistory from '../../components/OrdersHistory/OrdersHistory'
import PersonalData from '../../components/PersonalData.js/PersonalData'
import UserAdress from '../../components/UserAdress/UserAdress'

const Profile = ({setLogged}) =>{
    setLogged(true)
    return(
        <div>
            <PersonalData setLogged={setLogged}/>
            <UserAdress/>
            <OrdersHistory/>
        </div>
    )
}
export default Profile