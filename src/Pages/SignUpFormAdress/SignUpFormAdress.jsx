import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {ContainerForm, InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { putAddAdress } from '../../services/putServices'
import Input from '../../components/Input/Input'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Header from '../../components/Header/Header'

const SignUpFormAdress = () => {
    const history = useHistory()
    setLogged(false)
    changeInfoHeader("Endereço")
    const { input, onChangeInput, cleanFields, errors, setErrors, span, setSpan } = useForm({
        street:'',
        number:'',
        neighbourhood:'',
        city:'',
        state: '',
        complement:''
    })

    const validate = () => {
        let temp = {}
        temp.street = input.street===''?'Campo de preenchimento obrigatório':''
        temp.number = input.number===''?'Campo de preenchimento obrigatório':''
        temp.neighbourhood = input.neighbourhood===''?'Campo de preenchimento obrigatório':''
        temp.city = input.city===''?'Campo de preenchimento obrigatório':''
        temp.state = input.state===''?'Campo de preenchimento obrigatório':''
        temp.complement = input.complement===''?'Campo de preenchimento obrigatório':''
        
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x == '')
    }
    
    const onSubmitFormAdress = (event) =>{
        event.preventDefault()
        if (validate()){
            putAddAdress(input,history,cleanFields, setSpan)
        }
    }
    
    return (
        <div>
            <Header />
            <InputsContainer>
            <form onSubmit={onSubmitFormAdress}>
                    <Input
                        type= 'text'
                        name='street'
                        label="Logradouro*"
                        value={input.street}
                        placeholder='Rua / Av.'
                        onChange={onChangeInput}
                        error={errors.street}
                    />
                    <Input
                        type= 'text'
                        name='name'
                        label="Número*"
                        value={input.number}
                        placeholder='Número'
                        onChange={onChangeInput}
                        error={errors.number}
                    />
                    <Input
                        type= 'text'
                        name='complement'
                        label="Complemento*"
                        value={input.complement}
                        placeholder='Apto. /Bloco'
                        onChange={onChangeInput}
                        error={errors.complement}
                    />
                    <Input
                        type= 'text'
                        name='neighbourhood'
                        label="Bairro*"
                        value={input.neighbourhood}
                        placeholder='Bairro'
                        onChange={onChangeInput}
                        error={errors.neighbourhood}
                    />
                    <Input
                        type= 'text'
                        name='city'
                        label="Cidade*"
                        value={input.city}
                        placeholder='Cidade'
                        onChange={onChangeInput}
                        error={errors.city}
                    />
                    <Input
                        type= 'text'
                        name='state'
                        label="Estado*"
                        value={input.state}
                        placeholder='Estado'
                        onChange={onChangeInput}
                        error={errors.state}
                    />
                     <ErrorMessage
                        errorMsg={span}
                    />
                    <Button variant="contained" color="primary"
                        type={'submit'}
                        fullWidth
                        margin={'normal'}
                    >
                    Salvar
                    </Button>
                </form>
            </InputsContainer>   
        </div>
    )
}

export default SignUpFormAdress