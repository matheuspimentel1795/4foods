import React, { useEffect,useState } from 'react'
import {Card, Img, PName, PDescription, 
    ContainerDescription, PPrice, Button, ContainerCard,ContainerButton} from './styled'
import AddCart from '../AddCart/AddCartd'

const CardProduct = ({product, adicionado, setAdicionado}) => {
    const [renderAddCart, setRendedrAddCart] = useState(false)

    const productAdd = (add) => {
        setAdicionado(add)
        setRendedrAddCart(true)
    }

    
    return(
        <ContainerCard>
            { product && 
            <Card>
                <Img src={product.photoUrl} />
                <ContainerDescription>
                    <PName> {product.name} </PName>
                    <PDescription> {product.description}</PDescription>  
                    <PPrice> R${product.price.toFixed(2)} </PPrice>
                <ContainerButton>    
                { adicionado? 
                    <Button onClick={() => productAdd(true)}> Remover</Button>
                    : <Button onClick={() => productAdd(false)}> Adicionar </Button>}
                </ContainerButton>
                </ContainerDescription>
            </Card>}
            {
        renderAddCart?
          <AddCart />
          :
          <></>
      }
        </ContainerCard>
        
    )
}

export default CardProduct