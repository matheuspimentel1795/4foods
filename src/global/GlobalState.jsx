import React, {useState} from 'react'
import GlobalStateContext from './GlobalStateContext'
import useRequestData from '../hooks/useRequestData'


const GlobalState = (props) => {
    const token = {
        auth: localStorage.getItem('token')
    }
    
    const {data: profile, getData: getProfile} = useRequestData({}, `/perfil`, token)
    const {data: address} = useRequestData({}, `/cadastro-endereco`, token)
    const [order, setOrder] = useState([]);

    return <GlobalStateContext.Provider value={{order, setOrder, address, profile, getProfile}} >
        {props.children}
    </GlobalStateContext.Provider>
}

export default GlobalState
