import avatarRed from '../../assets/avatarRed.png'
import avatarWhite from '../../assets/avatarWhite.png'
import homepageRed from '../../assets/homepageRed.png'
import homepageWhite from '../../assets/homepageWhite.png'
import shoppingCartRed from '../../assets/shoppingCartRed.png'
import shoppingCartWhite from '../../assets/shoppingCartWhite.png'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { goToFeed, goToCarr, goToProfile } from '../../routes/coordinator'
import {ContainerFooter} from './styled'

const Footer = () => {
    const history = useHistory()
    const [iconHomePage, setIconHomePage] =  useState(homepageRed)
    const [iconShoppingCard, setIconShoppingCard] =  useState(shoppingCartWhite)
    const [iconAvatar, setIconAvatar] = useState(avatarWhite)
    
    const changeIcon = (page) => {
        switch(page){
            case "Home":
                setIconHomePage(homepageRed)
                setIconShoppingCard(shoppingCartWhite)
                setIconAvatar(avatarWhite)
                break;
            case "Carrinho":
                setIconHomePage(homepageWhite)
                setIconShoppingCard(shoppingCartRed)
                setIconAvatar(avatarWhite)
                break;
            case "Perfil":
                setIconHomePage(homepageWhite)
                setIconShoppingCard(shoppingCartWhite)
                setIconAvatar(avatarRed)
                break;
            default:
                setIconHomePage(homepageRed)
                setIconShoppingCard(shoppingCartWhite)
                setIconAvatar(avatarWhite)
                break;
        }
    }

    return(
        <ContainerFooter>
            <img src={iconHomePage} alt={"Icone Página Inicial"} onClick={() =>{changeIcon("Home"); goToFeed(history)}}/>
            <img src={iconShoppingCard} alt={"Icone Carrinho"} onClick={ () =>{changeIcon("Carrinho"); goToCarr(history)}}/>
            <img src={iconAvatar} alt={"Icone Perfil"} onClick={() =>{changeIcon("Perfil"); goToProfile(history)}}/>
        </ContainerFooter>
    )
}

export default Footer