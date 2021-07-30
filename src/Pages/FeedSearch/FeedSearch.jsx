import React from 'react'
import { useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { Container, ContainerList, ContainerRow } from './style'
import { Input, OutlinedInput, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Header from '../../components/Header/Header'

const FeedSearch = () => {
    useProtectedPage()

    const [isLoading, setIsLoading] = useState(false)

    const { input, onChangeInput } = useForm({
        search: ""
    })

    const loadList = useRequestData({}, '/restaurants', setIsLoading)

    const history = useHistory()

    const searchResult = input.search && loadList.restaurants?.filter((item) => {
        return item.name.toLowerCase().includes(input.search.toLowerCase())

    })

    const renderResult = input.search && searchResult.length > 0 ? searchResult?.map((item) => {
        return <RestaurantCard item={item} />

    }) : input.search && !searchResult.length && <p>item não encontrado</p>


    return (
        <div>
            <Header/>
            <Container>
                <OutlinedInput
                    type="text"
                    onChange={onChangeInput}
                    value={input.search}
                    name={"search"}
                    placeholder={"Restaurante"}
                />
                <ContainerList>
                    {isLoading ? <Loading /> : renderResult ? renderResult : <Typography>busque por nome de restaurante</Typography>}
                </ContainerList>
            </Container>
        </div>
    )
}
export default FeedSearch