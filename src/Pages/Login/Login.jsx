import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'
import { ScreenContainer, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import logo from '../../assets/logo-future-eats-red.png'
import useUnProtected from '../../hooks/useUnprotectedPage'
import { goToSignUp } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'

const Login = () =>{
    useUnProtected()
    const history = useHistory()
    // const goToSignUpPage = () => {
    //     goToSignUp(history)
    // }

    return(
        <div>
           <ScreenContainer>
               <img src={logo}></img>
                <h3>Entrar</h3>
                <LoginForm />
                <SignUpButtonContainer>
                    <Button variant="text" color="primary"
                        type={'submit'}
                        fullWidth
                        margin={'normal'}
                        onClick={()=>goToSignUp(history)}
                    >
                    Não possui cadastro? Clique aqui
                    </Button>
                </SignUpButtonContainer>
            </ScreenContainer>
        </div>
    )
}
export default Login