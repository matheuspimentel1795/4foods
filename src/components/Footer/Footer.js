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

    return(
        <ContainerFooter>
            <img src={iconHomePage} alt={"Icone Página Inicial"} onClick={() =>goToFeed(history)}/>
            <img src={iconShoppingCard} alt={"Icone Carrinho"} onClick={() =>goToCarr(history)}/>
            <img src={iconAvatar} alt={"Icone Perfil"} onClick={() =>goToProfile(history)}/>
        </ContainerFooter>
    )
}

export default Footer