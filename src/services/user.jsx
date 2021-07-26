import axios from 'axios'
import React  from 'react'
import { BASE_URL } from '../constants/urls'

export const sendLogin = (body) =>{
    axios.post(`${BASE_URL}/login`,body)
    .then((res)=>{
        localStorage.setItem('token', res.data.token)
    })
    .catch((err)=>{
        console.log(err.response.data.message)
    })
}