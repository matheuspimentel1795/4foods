import React, {useState} from 'react'
import useRequestData from '../../hooks/useRequestData'
import {convertMonth} from '../../functions/functions'
import {ContainerOrderHistory, ContainerCardOrder} from './styled'

const OrdersHistory = () => {
    const [isLoading, setIsLoading] = useState(false)

    const orderHistory = useRequestData([],"/orders/history", setIsLoading)

    

    const convertDate = (dateOfOrder) => {
        const date = new Date(dateOfOrder)

        return `${date.getDate()} de ${convertMonth(date.getMonth())} de ${date.getFullYear()}`
    }

    console.log(orderHistory)
    const allOrder = orderHistory.orders?.map((order) => {
        const date = convertDate(order.createdAt)

        return(
            <ContainerCardOrder>
                <p id={"nameRestaurant"}>{order.restaurantName}</p>
                <p id={"date"}>{date}</p>
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