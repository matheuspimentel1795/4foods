import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import {  sendSignUp } from '../../services/user'
import { useHistory } from 'react-router-dom'
import Input from '../../components/Input/Input'

const SignUpForm = () => {
    const history = useHistory()
    const { input, onChangeInput, cleanFields, errors, setErrors } = useForm({
        name: '',
        email:'',
        cpf:'',
        password:''
    })
    
    const validate = () => {
        let temp = {}
        temp.email = input.email===''?'Campo de preenchimento obrigatório':''
        temp.password = input.password.length>5?'':input.password===''?'Campo de preenchimento obrigatório':'Mínimo de 6 caracteres'
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x == '')
    }
    
    const onSubmitSignUp = (event) =>{
        event.preventDefault()
        if (validate()){
            sendSignUp(input,history,cleanFields)
        }
    }

    return (
        <div>
            <InputsContainer>

            <form onSubmit={onSubmitSignUp}>
                    <Input
                        type= 'email'
                        name='email'
                        label="E-mail"
                        value={input.email}
                        placeholder='email@email.com'
                        onChange={onChangeInput}
                        error={errors.email}
                    />
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