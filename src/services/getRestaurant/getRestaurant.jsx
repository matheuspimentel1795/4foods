import axios from 'axios'
import { BASE_URL } from '../../constants/urls'


export default async function getRestaurant(id) {
    const headers = {
        auth: localStorage.getItem('token') 
    }
    try{
        return await axios.get(`${BASE_URL}/restaurants/${id}`, {headers})
    } catch (err) {
        throw new Error(err.response.data.message)
        
    }
}

