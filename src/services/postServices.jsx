import axios from 'axios'
import { BASE_URL } from '../constants/urls'


export const postPlaceOrder = (restaurantID, body) => {
    console.log('body',body)
    console.log(restaurantID)
    const config = {
        method: 'post',
        url: BASE_URL + `/restaurants/${restaurantID}/order`,
        headers: { 'auth': localStorage.getItem('token') },
        data: body,
    }
   
    axios(config)
    .then((res) => {
        alert('Pedido realizado com sucesso!')
        return res.data
    })
    .catch((err) => {
        window.alert(err.response.data.message)
        console.log(err.response.data.message)
    })
}