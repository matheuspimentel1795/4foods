import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import { sendLogin } from '../../services/user'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
    const history = useHistory()

    const { input, onChangeInput, cleanFields } = useForm({
        email:'',
        password:'',
    })

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const onSubmitLogin = (event) =>{
        event.preventDefault()
        setEmailError(false)
        setPasswordError(false)

        if(input.email===''){
            setEmailError(true)
        }

        if(input.password===''){
            setPasswordError(true)
        }

        sendLogin(input, history, cleanFields)
    }

    return (
        <div>
            <InputsContainer>
                <form onSubmit={onSubmitLogin}>
                    <TextField id="outlined-basic" label="E-mail" variant="outlined"
                        required 
                        value={input.email} 
                        name={'email'} 
                        onChange={onChangeInput} 
                        placeholder='email@email.com'
                        margin={'normal'}
                        fullWidth
                        {...(emailError && {error: true, helperText:"Insira um e-mail válido"})}
                    />
                    <TextField id="outlined-basic" label="Senha" variant="outlined"
                        required 
                        type='password' 
                        value={input.password} 
                        name={'password'} 
                        onChange={onChangeInput} 
                        placeholder='Mínimo 6 caracteres'
                        margin={'normal'}
                        fullWidth
                        {...(passwordError && {error: true, helperText:"Insira uma senha válida"})}
                    />
                    <Button variant="contained" color="primary"
                        type={'submit'}
                        fullWidth
                        margin={'normal'}
                    >
                    Entrar
                    </Button>
                </form>
            </InputsContainer>
        </div>
    )
}

export default LoginForm