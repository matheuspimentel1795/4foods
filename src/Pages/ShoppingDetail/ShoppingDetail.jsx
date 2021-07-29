import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import {useParams} from 'react-router-dom'
import CardRestaurant from './CardRestaurant/CardRestaurant'
import CardProduct from './CardProduct/CardProduct'
import { useState, useEffect } from 'react'
import getRestaurant from '../../services/getRestaurant/getRestaurant'
import Footer from '../../components/Footer/Footer'



const ShoppingDetail = ({setLogged}) =>{
    useProtectedPage()
    const [adicionado, setAdicionado] = useState(false)
    const [categories, setCategories] = useState([])
    const [restaurant, setRestaurant] = useState([])
    const [products, setProducts] = useState([])
    const params = useParams()
    
    useEffect(() => {
        tryGetRestaurante()
    }, [])


    const tryGetRestaurante = async() => {
        try {
            const res = await getRestaurant(params.id)
            console.log("res", res)
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
                                adicionado={adicionado} 
                                setAdicionado={setAdicionado} 
                            />
                        </div>
                    )  
                }
            })
        )
    }
    

    return(
        <div>
            <CardRestaurant restaurant={restaurant}/>
            <div> {renderCategory()} </div>
            <Footer />
        </div>
    )
}
export default ShoppingDetail