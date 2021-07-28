import React, {useState} from 'react'
import useRequestData from '../../hooks/useRequestData'
import {ContainerOrderHistory, ContainerCardOrder} from './styled'

const OrdersHistory = () => {
    const [isLoading, setIsLoading] = useState(false)

    const orderHistory = useRequestData([],"/orders/history", setIsLoading)

    console.log(orderHistory)
    const allOrder = orderHistory.orders?.map((order) => {
        return(
            <ContainerCardOrder>
                <p id={"nameRestaurant"}>{order.restaurantName}</p>
                <p id={"subtotal"}>SUBTOTAL: R$ {order.totalPrice.toFixed(2)}</p>
            </ContainerCardOrder>
        )
    })

    return(
        <ContainerOrderHistory>
            <p>Histórico de Pedidos</p>
            <hr/>
            {allOrder}
        </ContainerOrderHistory>
    )
}

export default OrdersHistory