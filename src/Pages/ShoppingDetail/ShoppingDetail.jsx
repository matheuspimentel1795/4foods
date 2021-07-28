import React  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const ShoppingDetail = ({setLogged, changeInfoHeader}) =>{
    useProtectedPage()
    setLogged(true)
    changeInfoHeader("Restaurante")
    
    return(
        <div>
            detalhes
        </div>
    )
}
export default ShoppingDetail