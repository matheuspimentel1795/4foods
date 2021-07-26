import React from 'react'
import useForm from '../../hooks/useForm'
import { sendLogin } from '../../services/user'

const Login = () =>{
    const { input, onChangeInput, cleanFields } = useForm({
        email:'',
        password:''
    })
    const onSubmitLogin = (event) =>{
        event.preventDefault()
        sendLogin(input)
        cleanFields()
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmitLogin}>
                <input required value={input.email} name={'email'} onChange={onChangeInput} placeholder='E-mail'/>
                <input required type='password' value={input.password} name={'password'} onChange={onChangeInput} placeholder='Senha'/>
                <button>enviar</button>
            </form>
        </div>
    )
}
export default Login