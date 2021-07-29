import React, { useState } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import useRequestData from '../hooks/useRequestData'

const GlobalState = (props) =>{

    const token = {
        auth: localStorage.getItem('token')
    }

    const [cart,setCart] = useState([])
    console.log('carrrinho global state', cart)

    const address = useRequestData({}, `/profile/address`)
    
    return(
        <GlobalStateContext.Provider value={{ cart,setCart, address}}>
                {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState