import React from 'react'
import { useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { Container, ContainerCategories, ContainerList } from './style'
import { OutlinedInput, Typography } from '@material-ui/core'
import { goToFeedSearch } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const Feed = ({ setLogged, changeInfoHeader }) => {
    useProtectedPage()
    setLogged(true)
    changeInfoHeader("Ifuture")

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
            return <RestaurantCard key={item.id} item={item} />
        } else {
            if (selectedCategory.category === item.category) {
                return <RestaurantCard item={item} />
            }
        }
    })

    const onClickCategory = (categoryName) => {
        setSelectedCategory({
            active: selectedCategory.category === categoryName ? false : true,
            category: selectedCategory.category === categoryName ? "false" : categoryName,
        })
    }

    const categories = []

    const filterCat = list.restaurants?.map((item) => { return item.category })
        .sort((a, b) => { return a.localeCompare(b) })
        .forEach((item, index, array) => {
            if (item !== array[index + 1] || item === array[index - 1]) {
                return categories.push(item)
            }
        })

    const displayCategories = categories?.map((item, index) => {
        return <Typography key={index}
            onClick={() => onClickCategory(item)}
            color={item === selectedCategory.category ? "secondary" : "textPrimary"}>
            {item}</Typography>

    })

    return (
        <Container>
            Feed
            <OutlinedInput
                onClick={() => goToFeedSearch(history)}
            />
            <ContainerCategories>
                {displayCategories}
            </ContainerCategories>
            <ContainerList>
                {displayList ? displayList : <Loading />}
            </ContainerList>
        </Container>
    )
}
export default Feed