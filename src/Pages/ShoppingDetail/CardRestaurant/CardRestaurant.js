import React  from 'react'
import { Container, Img, PName, Grey, ContainerDescription} from './styled'

 const CardRestaurant = ({restaurant}) => {
    return(
        <Container>
            <Img src={restaurant.logoUrl} />
            <ContainerDescription>
                <PName> {restaurant.name} </PName>
                <Grey> {restaurant.category} </Grey>
                <Grey>{restaurant.deliveryTime} min Frete: R${restaurant.shipping} </Grey>
                <Grey> {restaurant.address}</Grey>
            </ContainerDescription>
        </Container>
    )
}

export default CardRestaurant
