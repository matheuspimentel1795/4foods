import React, { useState } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import useRequestData from '../hooks/useRequestData'

const GlobalState = (props) =>{
    const token = {
        auth: localStorage.getItem('token')
    }

    const [cart,setCart] = useState([])
    console.log('carrrinho global state', cart)

    const {data: profile, getData: getProfile} = useRequestData({}, `/perfil`, token)
    const {data: address} = useRequestData({}, `/cadastro-endereco`, token)
    
    return(
        <GlobalStateContext.Provider value={{ cart,setCart, address, profile, getProfile }}>
                {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState