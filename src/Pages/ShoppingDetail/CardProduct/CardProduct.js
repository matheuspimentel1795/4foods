import React, { useEffect,useState, useContext } from 'react'
import {Card, Img, PName, PDescription, 
    ContainerDescription, PPrice, Button, ContainerCard, Text} from './styled'
import AddCart from '../AddCart/AddCartd'
import { GlobalStateContext } from '../../../global/GlobalStateContext'

const CardProduct = ({product, sendQuant, onChangeQuant, quant,idRestaurant}) => {
    const [cardExist, setCardExist] = useState(0)
    const {cart,setCart} = useContext(GlobalStateContext)

    const verificaprodutoCarrinho = () => {
        if(cart.length > 0){
            for(const prod of cart) {
                if(product.id === prod.id){
                    setCardExist(prod.quantidade)
                    break
                } else {
                    setCardExist(0)
                }
            }
        } else {
            setCardExist(0)
        }
    }
    useEffect(() => {
        verificaprodutoCarrinho()
    }, [cart])

    return(
        <ContainerCard>
            { product && 
            <Card>
                <Img src={product.photoUrl} />
                <ContainerDescription>
                    <Text>
                        <PName> {product.name} </PName>
                        {cardExist ? 
                            <p> {cardExist}</p>
                        : <></>}</Text>
                    <PDescription> {product.description}</PDescription>  
                    <PPrice> R${product.price.toFixed(2)} </PPrice>
            <AddCart 
                sendQuant={sendQuant} 
                product={product} 
                onChangeQuant={onChangeQuant}
                quant={quant}
                idRestaurant={idRestaurant}
            /> </ContainerDescription>
            </Card>}
        </ContainerCard>
    )
}

export default CardProduct
