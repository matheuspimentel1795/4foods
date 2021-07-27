import React  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const Cart= ({setLogged}) =>{
    useProtectedPage()
    setLogged(true)
    return(
        <div>
            Cart
        </div>
    )
}
export default Cart