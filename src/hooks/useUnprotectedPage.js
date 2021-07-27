import { useEffect } from "react"
import { useHistory } from "react-router-dom"


const useUnprotected = () => {
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            goToFeedPage(history)
        }
    }, [history])
}