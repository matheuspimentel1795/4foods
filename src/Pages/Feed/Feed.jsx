import React from 'react'
import { useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { Container, ContainerList } from './style'
import { OutlinedInput } from '@material-ui/core'
import { goToFeedSearch } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const Feed = ({ setLogged }) => {
    useProtectedPage()
    setLogged(true)

    const [restaurantList, setRestaurantList] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const list = useRequestData({}, '/restaurants', setIsLoading)
    const [selectedCategory, setSelectedCategory] = useState({
        active: false,
        category: "",
    })


    const history = useHistory()

    const displayList = list.restaurants?.map((item) => {
        if (!selectedCategory.active) {
            return <RestaurantCard item={item} />
        } else {
            if (selectedCategory.category === item.category) {
                return <RestaurantCard item={item} />
            }
        }
    })

    const onClickCategory = (categoryName) => {
        setSelectedCategory({
            active: selectedCategory.category===categoryName ? false : true,
            category: categoryName
        })
    }

    const displayCategories = list.restaurants?.map((item) => {
        return <li
        onClick={()=>onClickCategory(item.category)}
        >{item.category}</li>
    })

    return (
        <Container>
            Feed
            <OutlinedInput
                onClick={() => goToFeedSearch(history)}
            />
            <>{displayCategories}</>
            <ContainerList>
                {displayList ? displayList : <Loading />}
            </ContainerList>
        </Container>
    )
}
export default Feed