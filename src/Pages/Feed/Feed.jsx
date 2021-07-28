import React from 'react'
import { useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { Container, ContainerList } from './style'

const Feed = ({ setLogged, changeInfoHeader }) => {
    useProtectedPage()
    setLogged(true)
    changeInfoHeader("Ifuture")

    const [restaurantList, setRestaurantList] = useState()
    const [isLoading, setIsLoading] = useState(false)
    
    const list = useRequestData({},'/restaurants',setIsLoading)

    console.log(list)

    const displayList = list.restaurants?.map((item)=>{
        return <RestaurantCard item={item}/>
    })

    return (
        <Container>
            Feed
            <ContainerList>
                {displayList ? displayList : <Loading/>}
            </ContainerList>
        </Container>
    )
}
export default Feed