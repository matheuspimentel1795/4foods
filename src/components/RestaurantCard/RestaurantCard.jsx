import { Typography } from '@material-ui/core'
import React from 'react'
import { Container, ContainerRow, RestaurantImage, RestaurantName } from './style'
// import { usePalette } from 'react-palette'

export default function RestaurantCard({ item }) {
    const { id, name, logoUrl, category, description, shipping, deliveryTime, address } = item

    // const { data } = usePalette(item.logoUrl)

    return (
        <Container /*style={{backgroundColor: data.vibrant}}*/>
            <RestaurantImage src={logoUrl}/>
            <div id={"bg"} src={logoUrl}/>
            <ContainerRow>
                <Typography>{name}</Typography>
            </ContainerRow>
            <ContainerRow>
                <Typography>{deliveryTime} min</Typography>
                <Typography>Frete R${Number(shipping).toFixed(2).toLocaleString('pt-br')}</Typography>
            </ContainerRow>
        </Container>
    )

}