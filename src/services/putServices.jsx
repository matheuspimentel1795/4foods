import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeed } from '../routes/coordinator'

export const putAddAdress = ( body,history,cleanFields) => {
    const config = {
        method: 'put',
        url: BASE_URL + "/address",
        headers: { 'auth': localStorage.getItem('token') },
        data: body,
    }

    axios(config)
        .then((res) => {
            cleanFields()
            goToFeed(history)
            localStorage.setItem('token',res.data.token)
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