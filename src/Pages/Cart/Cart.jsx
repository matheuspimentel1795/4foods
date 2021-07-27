import React  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const Cart= () =>{
    useProtectedPage()

    return(
        <div>
            Cart
        </div>
    )
}
export default Cart