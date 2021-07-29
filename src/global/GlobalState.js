import React, { useState } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import useRequestData from '../hooks/useRequestData'

const GlobalState = (props) =>{

    const token = {
        auth: localStorage.getItem('token')
    }

    const [cart,setCart] = useState([])
    console.log('carrrinho global state', cart)

    const ativeOrder = useRequestData({}, "/active-order")
    const address = useRequestData({}, `/profile/address`)

    console.log(ativeOrder)
    
    return(
        <GlobalStateContext.Provider value={{ cart,setCart, address, ativeOrder}}>
                {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState