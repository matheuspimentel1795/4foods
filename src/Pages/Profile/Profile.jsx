import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import OrdersHistory from '../../components/OrdersHistory/OrdersHistory'
import PersonalData from '../../components/PersonalData.js/PersonalData'
import UserAdress from '../../components/UserAdress/UserAdress'
import { goToLogin } from '../../routes/coordinator'

const Profile = ({setLogged, changeInfoHeader}) =>{
    const history = useHistory()
    setLogged(true)
    changeInfoHeader("Meu Perfil")

    const logout = () => {
        localStorage.removeItem("token")
        goToLogin(history)
    }
    
    return(
        <div>
            <PersonalData setLogged={setLogged} />
            <UserAdress />
            <p>Histórico de Pedidos</p>
            <hr/>
            <OrdersHistory/>
            <Button
                variant="contained" 
                color="primary"
                type={'submit'}
                fullWidth
                margin={'normal'}
                onClick={logout}
            >
                Logout
            </Button>
        </div>
    )
}
export default Profile