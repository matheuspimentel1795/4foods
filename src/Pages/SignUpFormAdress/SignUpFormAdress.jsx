import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { putAddAdress } from '../../services/putServices'

const SignUpFormAdress = ({setLogged, changeInfoHeader}) => {
    const history = useHistory()
    setLogged(false)
    changeInfoHeader("Endereço")
    const { input, onChangeInput, cleanFields } = useForm({
        street:'',
        number:'',
        neighbourhood:'',
        city:'',
        state: '',
        complement:''
    })
    
    const onSubmitFormAdress = (event) =>{
        event.preventDefault()
        putAddAdress(input,history,cleanFields)
    }

    return (
        <div>
            <InputsContainer>
            <form onSubmit={onSubmitFormAdress}>
                    <TextField id="outlined-basic" label="Logradouro" variant="outlined"
                        required 
                        value={input.street} 
                        name={'street'} 
                        onChange={onChangeInput} 
                        placeholder='Rua / Av.'
                        margin={'normal'}
                        fullWidth
                    />
                    <TextField id="outlined-basic" label="Número" variant="outlined"
                        required 
                        value={input.number} 
                        name={'number'} 
                        onChange={onChangeInput} 
                        placeholder='Número'
                        margin={'normal'}
                        fullWidth
                    />
                    <TextField id="outlined-basic" label="Complemento" variant="outlined"
                        required 
                        value={input.complement} 
                        name={'complement'} 
                        onChange={onChangeInput} 
                        placeholder='Apto. /Bloco'
                        margin={'normal'}
                        fullWidth
                    />
                    <TextField id="outlined-basic" label="Bairro" variant="outlined"
                        required 
                        value={input.neighbourhood} 
                        name={'neighbourhood'} 
                        onChange={onChangeInput} 
                        placeholder='Bairro'
                        margin={'normal'}
                        fullWidth
                    />
                    <TextField id="outlined-basic" label="Cidade" variant="outlined"
                        required 
                        value={input.city} 
                        name={'city'} 
                        onChange={onChangeInput} 
                        placeholder='Cidade'
                        margin={'normal'}
                        fullWidth
                    />
                    <TextField id="outlined-basic" label="Estado" variant="outlined"
                        required 
                        value={input.state} 
                        name={'state'} 
                        onChange={onChangeInput} 
                        placeholder='Estado'
                        margin={'normal'}
                        fullWidth
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