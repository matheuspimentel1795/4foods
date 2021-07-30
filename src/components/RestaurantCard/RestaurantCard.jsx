import { Typography } from '@material-ui/core'
import React from 'react'
import { Container, ContainerRow, RestaurantImage } from './style'
import { goToRestaurantDetail } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

export default function RestaurantCard({ item }) {
    const { id, name, logoUrl, shipping, deliveryTime } = item
    const history = useHistory()

    return (
        <Container
            onClick={() => goToRestaurantDetail(history, id)}
            >
            <RestaurantImage src={logoUrl} />
            <ContainerRow>
                <Typography color="secondary">{name}</Typography>
            </ContainerRow>
            <ContainerRow style={{ color: "#B8B8B8" }}>
                <Typography color="#B8B8B8">{Math.floor(deliveryTime * 0.9)} - {deliveryTime} min</Typography>
                <Typography>Frete R${Number(shipping).toFixed(2).toLocaleString('pt-br')}</Typography>
            </ContainerRow>
        </Container>
    )

}