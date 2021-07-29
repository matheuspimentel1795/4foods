import React, { useState } from 'react'
import { GlobalStateContext } from './GlobalStateContext'

const GlobalState = (props) =>{
    const [cart,setCart] = useState([])
    console.log('carrrinho global state', cart)
    return(
        <GlobalStateContext.Provider value={{ cart,setCart }}>
                {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState