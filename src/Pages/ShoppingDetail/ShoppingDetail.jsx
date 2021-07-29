import React, { useContext, useState }  from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'

const ShoppingDetail = ({setLogged, changeInfoHeader}) =>{
    useProtectedPage()
    setLogged(true)
    

    const [quant,setQuant]=useState(0)
    const [add,setAdd]=useState(false)
    const {cart,setCart}=useContext(GlobalStateContext)
    const data = useRequestData({},`/restaurants/${1}`)
    const onChangeQuant = (event) =>{
        setQuant(event.target.value)
    } 
    const sendOrder = ()=>{
        setAdd(true)
    }
    const sendQuant = (id,nome,preco,descricao,picture)=>{
        const obj = {
            id: id,
            name:nome,
            description:descricao,
            quantidade: Number(quant),
            price: preco,
            url: picture
        } 
        setCart([...cart,obj])
    }
    const produtos = data.restaurant?.products.map((x)=>{
        return (
        <div>
            <h2>{x.name}</h2>
            <h2>{x.price}</h2>
            <button onClick={sendOrder}>Adicionar ao carrinho</button>
            {add===true && <div>
                <input type='number' value={quant} onChange={onChangeQuant}  placeholder='quantidade'></input>
                <button onClick={()=>sendQuant(x.id,x.name,x.price,x.description,x.photoUrl)} >Enviar</button>
                             </div> }
        </div>
            )
    })

    return(
        <div>
            {produtos}
        </div>
    )
}
export default ShoppingDetail