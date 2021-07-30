
import React, { useContext, useState, useEffect }  from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'


import {useParams} from 'react-router-dom'
import CardRestaurant from './CardRestaurant/CardRestaurant'
import CardProduct from './CardProduct/CardProduct'
import getRestaurant from '../../services/getRestaurant/getRestaurant'
import Footer from '../../components/Footer/Footer'
import { ContainerRestaurantsDetails } from './styled'


const ShoppingDetail = ({setLogged, changeInfoHeader}) =>{
    changeInfoHeader("Restaurante")
    useProtectedPage()
    
    const [categories, setCategories] = useState([])
    const [restaurant, setRestaurant] = useState([])
    const [products, setProducts] = useState([])
    const params = useParams()
    const [quant, setQuant]=useState(0)
    const [add, setAdd]=useState(false)
    const {cart,setCart}=useContext(GlobalStateContext)
    
    const onChangeQuant = (event) =>{
        setQuant(event.target.value)
    } 
    const sendOrder = ()=>{
        setAdd(true)
    }

    
    const sendQuant = (id,nome,preco,descricao,picture,category)=>{ 
        const obj = {
            id: id,
            name:nome,
            description:descricao,
            quantidade: Number(quant),
            price: preco,
            url: picture,
            category: category,
            idRestaurant: params.id
        } 
        setCart([...cart,obj])
    }
        
    useEffect(() => {
        tryGetRestaurante()
    }, [])
    
    const tryGetRestaurante = async() => {
        try {
            const res = await getRestaurant(params.id)
            setRestaurant(res.data.restaurant)
            setProducts(res.data.restaurant.products)
            analizeCategories(res.data.restaurant.products)
                
        } catch (err){
            console.log(err.message)
        }
    }
    
    const analizeCategories = (products) => {
        const newCategories = []
        products.forEach(product=>{
            if(newCategories.includes(product.category) === false) {
                newCategories.push(product.category)
            }
        })
        setCategories(newCategories)
    }
    
    const renderCategory = () => {
        let i
        let  auxiliarArray = []
        for( i=0; i<categories.length; i++){
            const auxiliar = renderiza(categories[i])
            auxiliarArray.push(auxiliar)
                
        }
        return auxiliarArray
    }
    
    const renderiza = (category) => {
            // let categorie 
            // console.log("teste de subs",categories.substring(categories.length - 2) === "ão")
            
            // if(categories.substring(categories.length - 2) === "ão") {
              
            //     categorie = categories.repleceAll("ão", "ões")
            // } else {
            //     categorie = categories.concat("s")
            // }
        return(
            <div key={category}>
                <h3> {category}</h3>
                <div>{renderProducts(category)} </div>
            </div>
        )
    }
    
    const renderProducts = (category) => {
        return(
            products.map((product) => {
                if(category === product.category){
                    return(
                        <div key={product.id}>
                            <CardProduct 
                                product={product}  
                                onChangeQuant={onChangeQuant}
                                sendQuant={sendQuant}
                                quant={quant}
                            />
                        </div>
                    )  
                }
            })
        )
    }
        
    return(
        <ContainerRestaurantsDetails>
            <CardRestaurant restaurant={restaurant}/>
            <div> {renderCategory()} </div>
        </ContainerRestaurantsDetails>
    )
}

export default ShoppingDetail





