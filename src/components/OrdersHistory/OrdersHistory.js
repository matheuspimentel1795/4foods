import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import {convertMonth} from '../../functions/functions'
import {ContainerOrderHistory, ContainerCardOrder} from './styled'

const OrdersHistory = () => {

    const orderHistory = useRequestData([],"/orders/history")

    const convertDate = (dateOfOrder) => {
        const date = new Date(dateOfOrder)
        return `${date.getDate()} de ${convertMonth(date.getMonth()+1)} de ${date.getFullYear()}`
    }

    const allOrder = orderHistory.orders?.map((order, index) => {
        const date = convertDate(order.createdAt)
        return(
            <ContainerCardOrder key={index}>
                <p id={"nameRestaurant"}>{order.restaurantName}</p>
                <p id={"date"}>{date}</p>
                <p id={"subtotal"}>SUBTOTAL: R$ {order.totalPrice.toFixed(2).replace(".",",")}</p>
            </ContainerCardOrder>
        )
    })

    return(
        <ContainerOrderHistory>
            {orderHistory.orders ? <div>{allOrder}</div>: <p>Você não realizou nenhum pedido</p> }
        </ContainerOrderHistory>
    )
}

export default OrdersHistory