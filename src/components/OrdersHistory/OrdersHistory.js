import React, {useState} from 'react'
import useRequestData from '../../hooks/useRequestData'
import {convertMonth} from '../../functions/functions'
import {ContainerOrderHistory, ContainerCardOrder} from './styled'
import CircularProgress from '@material-ui/core/CircularProgress'

const OrdersHistory = () => {
    const [isLoading, setIsLoading] = useState(false)

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
                <p id={"subtotal"}>SUBTOTAL: R$ {order.totalPrice.toFixed(2)}</p>
            </ContainerCardOrder>
        )
    })

    return(
        <ContainerOrderHistory>
            <p>Histórico de Pedidos</p>
            <hr/>
            {isLoading? <CircularProgress color={"inherit"} size={24}/>: <div>{allOrder}</div>}
            
        </ContainerOrderHistory>
    )
}

export default OrdersHistory