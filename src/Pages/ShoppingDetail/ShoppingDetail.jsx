import React  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const ShoppingDetail = () =>{
    useProtectedPage()

    return(
        <div>
            detalhes
        </div>
    )
}
export default ShoppingDetail