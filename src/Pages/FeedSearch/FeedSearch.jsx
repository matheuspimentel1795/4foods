import React from 'react'
import { useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { Container, ContainerList } from './style'
import { OutlinedInput, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const FeedSearch = ({ setLogged }) => {
    useProtectedPage()
    setLogged(true)

    const history = useHistory()

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