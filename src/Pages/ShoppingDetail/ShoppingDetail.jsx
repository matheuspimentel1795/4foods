import React  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const ShoppingDetail = ({setLogged}) =>{
    useProtectedPage()
    setLogged(true)
    
    return(
        <div>
            detalhes
        </div>
    )
}
export default ShoppingDetail