import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import { sendLogin } from '../../services/user'

const LoginForm = () => {

    const { input, onChangeInput, cleanFields } = useForm({
        email:'',
        password:''
    })
    
    const onSubmitLogin = (event) =>{
        event.preventDefault()
        sendLogin(input)
        cleanFields()
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