import React, { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import clock from '../../assets/clock.png'
import { ContainerActiveOrder } from './styled'

const ActiveOrder = () => {
    const {ativeOrder} = useContext(GlobalStateContext)

    return(
        <div>
            {ativeOrder.order &&
            <ContainerActiveOrder>
                <img src={clock} alt={"relogio de tempo"}/>
                <div>
                    <p id={"title"}>Pedido em andamento</p>
                    <p>{ativeOrder.order.restaurantName}</p>
                    <p id={"price"}>SUBTOTAL: R${ativeOrder.order.totalPrice.toFixed(2)}</p>
                </div>
            </ContainerActiveOrder>}
        </div>
    )
}

export default ActiveOrder