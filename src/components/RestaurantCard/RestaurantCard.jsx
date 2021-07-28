import { Typography } from '@material-ui/core'
import React from 'react'
import { Container, ContainerRow, RestaurantImage, RestaurantName } from './style'
import { goToRestaurantDetail } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
// import { usePalette } from 'react-palette'

export default function RestaurantCard({ item }) {
    const { id, name, logoUrl, category, description, shipping, deliveryTime, address } = item
    const history = useHistory()
    // const { data } = usePalette(item.logoUrl)

    return (
        <Container
        /*style={{backgroundColor: data.vibrant}}*/
        onClick={()=>goToRestaurantDetail(history,id)}>
            <RestaurantImage src={logoUrl}/>
            <div id={"bg"} src={logoUrl}/>
            <ContainerRow>
                <Typography color="secondary">{name}</Typography>
            </ContainerRow>
            <ContainerRow>
                <Typography color="textPrimary">{deliveryTime} min</Typography>
                <Typography>Frete R${Number(shipping).toFixed(2).toLocaleString('pt-br')}</Typography>
            </ContainerRow>
        </Container>
    )

}