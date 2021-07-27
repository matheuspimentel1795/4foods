import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const putAddAdress = (token, body) => {
    const config = {
        method: 'put',
        url: BASE_URL + "/address",
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

export const putUpdateProfile = (token, body) => {
    const config = {
        method: 'put',
        url: BASE_URL + "/profile",
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