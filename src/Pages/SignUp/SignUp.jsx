import React from 'react'
import { ScreenContainer } from './styled'
import SignUpform from './SignUpForm'
import logo from '../../assets/logo-future-eats-red.png'
import useProtectedPage from '../../hooks/useProtectedPage'
import SignUpFormAdress from '../SignUpFormAdress/SignUpFormAdress'
import Header from '../../components/Header/Header'

const SignUp = () =>{
    /*useProtectedPage()*/
    
    return(
        <div>
            <Header/>
            <ScreenContainer>
               <img src={logo}></img>
                <h3>Cadastrar</h3>
                <SignUpform />
                {/* <SignUpFormAdress /> */}
            </ScreenContainer>
        </div>
    )
}
export default SignUp