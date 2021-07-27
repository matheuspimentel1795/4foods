import React  from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const Feed = () =>{
    useProtectedPage()

    return(
        <div>
            Feed
        </div>
    )
}
export default Feed