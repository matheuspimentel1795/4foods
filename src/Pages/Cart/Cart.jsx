import React  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const Cart= ({setLogged, changeInfoHeader}) =>{
    useProtectedPage()
    setLogged(true)
    changeInfoHeader("Meu Carrinho")
    return(
        <div>
            Cart
        </div>
    )
}
export default Cart