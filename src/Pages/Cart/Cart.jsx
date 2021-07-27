import React  from 'react'
import useUnProtected from '../../hooks/useUnprotectedPage'

const Cart= () =>{
    useUnProtected()
    
    return(
        <div>
            Cart
        </div>
    )
}
export default Cart