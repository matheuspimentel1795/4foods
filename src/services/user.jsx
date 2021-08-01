import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToAdress, goToFeed } from '../routes/coordinator'

export const sendLogin = (body, history, cleanFields, setSpan) =>{
    axios.post(`${BASE_URL}/login`,body)
    .then((res)=>{
        localStorage.setItem('token', res.data.token)
        cleanFields()
        goToFeed(history)
    })
    .catch((err)=>{
        setSpan(err.response.data.message)
    })
}

export const sendSignUp = (body,history, cleanFields, setSpan) =>{
    axios.post(`${BASE_URL}/signup`,body)
    .then((res)=>{
        localStorage.setItem('token', res.data.token)
        cleanFields()
        goToAdress(history)
    })
    .catch((err)=>{
        setSpan(err.response.data.message)
    })
}
