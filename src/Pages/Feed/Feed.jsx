import React  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const Feed = ({setLogged}) =>{
    useProtectedPage()
    setLogged(true)
    
    return(
        <div>
            Feed
        </div>
    )
}
export default Feed