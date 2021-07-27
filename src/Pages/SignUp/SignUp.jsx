import React from 'react'
import { ScreenContainer } from './styled'
import SignUpform from './SignUpForm'
import logo from '../../assets/logo-future-eats-red.png'
import SignUpFormAdress from './SignUpFormAdress'
import useUnProtected from '../../hooks/useUnprotectedPage'

const SignUp = () =>{
    useUnProtected()

    return(
        <div>
           <ScreenContainer>
               <img src={logo}></img>
                <h3>Cadastrar</h3>
                <SignUpform />
                <SignUpFormAdress />
            </ScreenContainer>
        </div>
    )
}
export default SignUp