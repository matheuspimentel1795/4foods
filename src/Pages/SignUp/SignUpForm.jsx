import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import {  sendSignUp } from '../../services/user'
import { useHistory } from 'react-router-dom'

const SignUpForm = () => {
    const history = useHistory()
    const { input, onChangeInput, cleanFields } = useForm({
        name: '',
        email:'',
        cpf:'',
        password:''
    })
    
    const onSubmitSignUp = (event) =>{
        event.preventDefault()
        sendSignUp(input,history,cleanFields)
    }

    return (
        <div>
            <InputsContainer>

            <form onSubmit={onSubmitSignUp}>
                    <TextField id="outlined-basic" label="Nome" variant="outlined"
                        required 
                        value={input.name} 
                        name={'name'} 
                        onChange={onChangeInput} 
                        placeholder='Nome e sobrenome'
                        margin={'normal'}
                        fullWidth
                    />
                    <TextField id="outlined-basic" label="E-mail" variant="outlined"
                        required 
                        type='email' 
                        value={input.email} 
                        name={'email'} 
                        onChange={onChangeInput} 
                        placeholder='email@email.com'
                        margin={'normal'}
                        fullWidth
                    />
                    <TextField id="outlined-basic" label="CPF" variant="outlined"
                        required 
                        value={input.cpf} 
                        name={'cpf'} 
                        onChange={onChangeInput} 
                        placeholder='000.000.000-0'
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
                    <TextField id="outlined-basic" label="Confirmar" variant="outlined"
                        required 
                        type='password' 
                        value={input.passwordValidation} 
                        name={'passwordValidation'} 
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
                    Criar
                    </Button>
                </form>
            </InputsContainer>
        </div>
    )
}

export default SignUpForm