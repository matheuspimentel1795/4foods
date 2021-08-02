import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import { sendLogin } from '../../services/user'
import { useHistory } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const LoginForm = () => {
    const history = useHistory()

    const { input,setForm, onChangeInput, cleanFields } = useForm({
        email:'',
        password:'',
    })
    const [showPassword,setShow]=useState(false)
    const onSubmitLogin = (event) =>{
        event.preventDefault()
        sendLogin(input, history, cleanFields)
    }
    const handleChange = (prop) => (event) => {
        setForm({ ...input, [prop]: event.target.value });
      };
      const handleClickShowPassword = () => {
        setShow( !showPassword );
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
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
                        value={input.password} 
                        name={'password'}  
                        placeholder='Mínimo 6 caracteres'
                        margin={'normal'}
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        onChange={()=>onChangeInput('password')}
                        endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                            }
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