
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import { sendLogin } from '../../services/user'
import { useHistory } from 'react-router-dom'
import Input from '../../components/Input/Input'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

const LoginForm = () => {
    const history = useHistory()

    const { input, onChangeInput, cleanFields, errors, setErrors, span, setSpan} = useForm({
        email:'',
        password:'',
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

    const onSubmitLogin = (event) =>{
        event.preventDefault()
        if (validate()){
            sendLogin(input, history, cleanFields, setSpan)
        }
    }

    return (
        <div>
            <InputsContainer>
                <form onSubmit={onSubmitLogin}>
                    <Input
                        type= 'email'
                        name='email'
                        label="E-mail*"
                        value={input.email}
                        placeholder='email@email.com'
                        onChange={onChangeInput}
                        error={errors.email}
                    />
                    <Input
                        name='password'
                        label="Senha*"
                        value={input.password}
                        placeholder='Mínimo 6 caracteres'
                        onChange={onChangeInput}
                        error={errors.password}
                        password={true}
                    />
                 
                    <ErrorMessage
                        errorMsg={span}
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