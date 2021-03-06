import React, { useState } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import useRequestData from '../hooks/useRequestData'

const GlobalState = (props) =>{

    const [cart,setCart] = useState([])
    const ativeOrder = useRequestData({}, "/active-order")
    const address = useRequestData({}, `/profile/address`)
    const dataProfile = useRequestData([], "/profile")
    
    return(
        <GlobalStateContext.Provider value={{ cart,setCart, address, ativeOrder, dataProfile}}>
                {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState