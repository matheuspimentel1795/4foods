import axios from 'axios'
import { BASE_URL } from '../constants/urls'


export const postPlaceOrder = (restaurantID, token, body) => {

    const config = {
        method: 'put',
        url: BASE_URL + `/restaurants/${restaurantID}/order`,
        headers: { 'auth': token },
        data: body,
    }

    axios(config)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        window.alert(err.response.data.message)
    })
}