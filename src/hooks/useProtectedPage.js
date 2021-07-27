import { useEffect } from 'react'
import { useHistory } from 'react-router'

const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            goTologinPage(history)
        }
    }, [history])
}