import React from 'react'
import { useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { Container, ContainerList } from './style'
import { OutlinedInput, Typography } from '@material-ui/core'

const FeedSearch = ({ setLogged }) => {
    useProtectedPage()
    setLogged(true)

    // const [restaurantList, setRestaurantList] = useState()
    // const [isLoading, setIsLoading] = useState(false)
    // const list = useRequestData({},'/restaurants',setIsLoading)

    // const displayList = list.restaurants?.map((item)=>{
    //     return <RestaurantCard item={item}/>
    // })

    return (
        <Container>
            <Typography>Busca</Typography>
            <OutlinedInput />
            <ContainerList>
                {/* {displayList ? displayList : <Loading/>} */}
            </ContainerList>
        </Container>
    )
}
export default FeedSearch