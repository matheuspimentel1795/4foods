import avatarRed from '../../assets/avatarRed.png'
import avatarWhite from '../../assets/avatarWhite.png'
import homepageRed from '../../assets/homepageRed.png'
import homepageWhite from '../../assets/homepageWhite.png'
import shoppingCartRed from '../../assets/shoppingCartRed.png'
import shoppingCartWhite from '../../assets/shoppingCartWhite.png'
import React from 'react'
import { useHistory } from 'react-router'
import { goToFeed, goToCarr, goToProfile } from '../../routes/coordinator'
import {Container, ContainerFooter} from './styled'
import ActiveOrder from '../ActiveOrder/ActiveOrder'

const Footer = () => {
    const history = useHistory()

    return(
        <Container>
            {history.location.pathname === "/restaurantes" && <ActiveOrder/>}
            <ContainerFooter>
                <img src={history.location.pathname === "/restaurantes"? homepageRed: homepageWhite} alt={"Icone Página Inicial"} onClick={() =>goToFeed(history)}/>
                <img src={history.location.pathname === "/carrinho" ? shoppingCartRed: shoppingCartWhite} alt={"Icone Carrinho"} onClick={ () => goToCarr(history)}/>
                <img src={history.location.pathname === "/perfil" ? avatarRed : avatarWhite} alt={"Icone Perfil"} onClick={() => goToProfile(history)}/>
            </ContainerFooter>
        </Container>
    )
}

export default Footer