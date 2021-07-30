import React from 'react'
// import Splash from '../../components/Splash/Splash'
import { useHistory } from 'react-router'
import { goToLogin } from '../../routes/coordinator'
import { Container } from './style'

const Splash = () =>{

    const history = useHistory()
    
    setTimeout(()=>{
        goToLogin(history)
    },3000)

    return(
        <Container/>
    )
}
export default Splash