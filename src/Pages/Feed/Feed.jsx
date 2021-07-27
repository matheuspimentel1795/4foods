import React  from 'react'
import useUnProtected from '../../hooks/useUnprotectedPage'

const Feed = () =>{
    useUnProtected()
    return(
        <div>
            Feed
        </div>
    )
}
export default Feed