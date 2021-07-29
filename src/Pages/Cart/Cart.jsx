import React, { useContext, useState }  from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import styled from 'styled-components'
import useForm from '../../hooks/useForm'
import { postPlaceOrder } from '../../services/postServices'
import './Cart.css'
const Container = styled.div`
    border: 1px solid black;
`
const Imagem = styled.img`
    width: 20%;
`

const Cart= ({setLogged, changeInfoHeader}) =>{
    useProtectedPage()
    setLogged(true)

    const {cart,setCart}=useContext(GlobalStateContext)
    const [payment,setPayment]=useState('')
    const { input, onChangeInput, cleanFields } = useForm({
        paymentMethod:'',
    })
    console.log('cart',cart)
    const data = useRequestData([],`/restaurants/${1}`)
    const adress = useRequestData([],`/profile/address`)
    console.log(adress.address)
    const end = adress?.address
    const list = cart.map((z)=>{
        return (
            <Container>
                 <Imagem src={z.url}/> 
                <h2>{z.name}</h2>
                <h2>{z.description}</h2>
                <h2>Preço: R$ {z.price}</h2>
                <h2>Quantidade: {z.quantidade}</h2>
            </Container>
        )
    })
    console.log('pay',payment)
    const valor = cart.map((c)=>{  
        return c.quantidade*c.price
    })
    console.log(valor)
    let soma = 0
    for(let i=0;i<valor.length;i++){
        soma = soma + valor[i]
    }
    const onSubmitOrder = (event) =>{
        event.preventDefault()
        const body = {
            'products' : cart.map((a)=>{
                return(
                    {   quantity: a.quantidade,
                        id: a.id
                    }
                )
            }),
            paymentMethod : input.paymentMethod
        }
        postPlaceOrder(1,body)
        }
       

    return(
        <div>
            <h1>Meu Carrinho</h1>
            <div className='adress-container'> 
                <h3>Endereço de entrega</h3>
                <h3>{end?.street},{end?.number}</h3>
            </div>
            
            {list}
            <h2>Preço total: {soma} </h2>
            <h2>Forma de Pagamento</h2>
            <form onSubmit={onSubmitOrder}>
                    <input value={'money'} name={'paymentMethod'} onChange={onChangeInput} required   type="radio" />
                    <label >Dinheiro </label> <br></br>
                    <input value={'creditcard'} name={'paymentMethod'} onChange={onChangeInput} required   type="radio" />
                    <label>Cartão de Crédito</label>
                    <button>Confirmar</button>
            </form>  
        </div>
    )
}
export default Cart