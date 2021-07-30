import React, { useContext, useState }  from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import styled from 'styled-components'
import useForm from '../../hooks/useForm'
import { postPlaceOrder } from '../../services/postServices'
import './Cart.css'
import Button from '@material-ui/core/Button';
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const ContainerPage = styled.div`
    margin: 64px 0 80px 0;
    `
const Container = styled.div`
    margin: 2%;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 0.5fr 1fr ;
`
const Imagem = styled.img`
    width: 100%;
    height: 100%;
`

const Cart= ({setLogged, changeInfoHeader}) =>{
    useProtectedPage()
    changeInfoHeader("Meu Carrinho")
    setLogged(true)
    const {cart,setCart}=useContext(GlobalStateContext)
    const { input, onChangeInput, cleanFields } = useForm({
        paymentMethod:'',
    })
    console.log('cart',cart)
    const data = useRequestData({},`/restaurants/${cart.map((x)=>{
        return x.idRestaurant
    })}`)
    console.log(data.restaurant)
    const adress = useRequestData([],`/profile/address`)
    const end = adress?.address
 /*----------------------------- Lógica remover quantidade--------------------------*/
    const removeQuant = (id) =>{
       const algo= cart.map((x)=>{
            if(x.id===id){
                x.quantidade = x.quantidade-1
            }
            return x
       }).filter((z)=>{
            return z.quantidade>0
       })
        setCart(algo)
        console.log('algo',algo)
    }
  
/*----------------------------- Itens Carrinho--------------------------*/
    const list = cart.map((z)=>{
        return (
            <Container>
                <div>
                 <Imagem src={z.url}/>
                 </div>
                 <div>
                     <HeaderContainer>
                <h2>{z.name}</h2>
                <h2>Quant: {z.quantidade}</h2>
                    </HeaderContainer>
                <h2>{z.description}</h2>
                <div>
                <h2>Preço: R$ {z.price*z.quantidade}</h2>
                
                <button onClick={()=>removeQuant(z.id)}>Remover</button>
                </div>
                </div>
            </Container>
        )
    })
    /*----------------------------- Lógica Soma--------------------------*/
    const valor = cart.map((c)=>{  
        return c.quantidade*c.price
    })
    console.log(valor)
    let soma = 0
    for(let i=0;i<valor.length;i++){
        soma = soma + valor[i] 
    }
    let somaWithFrete = soma + data.restaurant?.shipping
    
    const onSubmitOrder = (event) =>{
        console.log('oi')
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
        <ContainerPage>
            <div className='adress-container'> 
                <h3 className='adress-title'>Endereço de entrega</h3>
                <h3>{end?.street},{end?.number}</h3>
            </div>
            <div className='restaurant-address'>
                <h3>{data.restaurant?.name}</h3>
                <h3 className='restauran-adress-time' >{data.restaurant?.address}</h3>
                <h3 className='restauran-adress-time'>{data.restaurant?.deliveryTime} min</h3>
            </div>
            <div>
            {cart.length===0? <h3 className='text'>Carrinho Vazio</h3> :  list }
            </div>
            <h2 className='frete'>Frete: R$ {data.restaurant?.shipping},00 </h2>
           <div className='price-container'>
                <h2>Subtotal  </h2>
                <h2 className='price'>R${soma===0? soma: somaWithFrete},00</h2>
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
    )
}
export default Cart