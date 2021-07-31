import React, { useContext, useState } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import styled from 'styled-components'
import useForm from '../../hooks/useForm'
import { postPlaceOrder } from '../../services/postServices'
import './Cart.css'
import Button from '@material-ui/core/Button';
import MyButton from './buttonStyled'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0px;
    p{
    :nth-child(2){
     width: 36px;
     height: 36px;
     display: flex;
     justify-content: center;
     align-items: center;
     border: 1px solid #e86e5a;
     box-sizing: border-box;
     border-top-right-radius: 8px;
     border-bottom-left-radius: 8px;
       padding: 0px;
       margin: 0px;
     color: #e86e5a;
   }
 }
`

const PName = styled.p`
margin: 1.125rem 3.063rem 1rem 1rem;
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #e8222e;
`
const PDescription = styled.p`
    margin: 0.5rem 1rem 0.25rem;
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #B8B8B8;
`
const ContainerPage = styled.div`
    margin: 64px 0 80px 0;
    `
const Container = styled.div`
    margin:2%;
    width: 100%;
    height: 100%;
    border: 1px solid #b8b8b8;
    display: grid;
    grid-template-columns: 97px 1fr;
    border-radius: 8px;
    //overflow: hidden;
    margin-bottom: 8px;
    position: relative;
`
const Imagem = styled.img`
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`
const ContainerDescription = styled.div`
    grid-column: 2/3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column; 
`
const ContainerFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    h2{
        margin-left: 2%;
    }
`

const Cart = () => {
    useProtectedPage()
    const { cart, setCart } = useContext(GlobalStateContext)
    const { input, onChangeInput, cleanFields } = useForm({
        paymentMethod: '',
    })
    const data = useRequestData({}, `/restaurants/${1}`)

    const adress = useRequestData([], `/profile/address`)
    const end = adress?.address
    /*----------------------------- Lógica remover quantidade--------------------------*/
    const removeQuant = (id) => {
        const algo = cart.map((x) => {
            if (x.id === id) {
                x.quantidade = x.quantidade - 1
            }
            return x
        }).filter((z) => {
            return z.quantidade > 0
        })
        setCart(algo)
    }

    /*----------------------------- Itens Carrinho--------------------------*/
    const list = cart.map((z) => {
        return (
            <Container>
                <div>
                    <Imagem src={z.url} />
                </div>
                <ContainerDescription>
                    <HeaderContainer>
                        <PName >{z.name}</PName >
                        <p> {z.quantidade}</p>
                    </HeaderContainer>
                    <PDescription>{z.description}</PDescription>
                    <ContainerFooter>
                        <h2> R$ {(z.price.toFixed(2) * z.quantidade).toFixed(2)}</h2>
                        <MyButton onClick={() => removeQuant(z.id)}>Remover</MyButton>
                    </ContainerFooter>
                </ContainerDescription>
            </Container>
        )
    })
    /*----------------------------- Lógica Soma--------------------------*/
    const valor = cart.map((c) => {
        return c.quantidade * c.price
    })
    let soma = 0.00
    for (let i = 0; i < valor.length; i++) {
        soma = soma + valor[i]
    }
    let somaWithFrete = soma + cart[0]?.shipping

    const onSubmitOrder = (event) => {
        event.preventDefault()
        const body = {
            'products': cart.map((a) => {
                return (
                    {
                        quantity: a.quantidade,
                        id: a.id
                    }
                )
            }),
            paymentMethod: input.paymentMethod
        }
        postPlaceOrder(cart[0]?.idRestaurant, body)
    }
    return (
        <div>
            <Header />
            <ContainerPage>
                <div className='adress-container'>
                    <h3 className='adress-title'>Endereço de entrega</h3>
                    <h3>{end?.street},{end?.number}</h3>
                </div>
                {cart.length>0 ? <div className='restaurant-address'>
                    <h3>{cart[0]?.restaurantName}</h3>
                    <h3 className='restauran-adress-time' >{cart[0]?.restauranteAddress}</h3>
                    <h3 className='restauran-adress-time'>{cart[0]?.restaurantTime} min</h3>
                </div> : <div></div>}
                <div>
                    {cart.length === 0 ? <h3 className='text'>Carrinho Vazio</h3> : list}
                </div>
                <h2 className='frete'>Frete: R$ {cart.length>0?cart[0]?.shipping.toFixed(2) : '0,00'} </h2>
                <div className='price-container'>
                    <h2>Subtotal  </h2>
                    <h2 className='price'>R${soma === 0 ? soma : somaWithFrete.toFixed(2)}</h2>
                </div>
                <h2 className='payment'>Forma de Pagamento</h2>
                <form className='submit-order' onSubmit={onSubmitOrder}>
                <div>
                <input value={'money'} name={'paymentMethod'} onChange={onChangeInput} required   type="radio" />
                    <label >Dinheiro </label> <br></br>
                    <input value={'creditcard'} name={'paymentMethod'} onChange={onChangeInput} required   type="radio" />
                    <label>Cartão de Crédito</label>
                </div>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        type='submit'
                    >
                        Confirmar
                    </Button>
                </form>

            </ContainerPage>
            <Footer />
        </div>
    )
}
export default Cart