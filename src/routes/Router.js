import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { 
    Footer, 
    Header, 
    Cart, 
    EditeProfile,
    Feed, 
    Login,
    Profile,
    ShoppingDetail,
    SignUp, 
    SignUpFormAdress,
    EditAddress, 
    Splash, 
    FeedSearch
} from '../Pages/export'


const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component ={Splash} />
                <Route exact path='/login' component ={() => <Login />} />
                <Route exact path='/cadastro' component={() => <SignUp />}/>
                <Route exact path='/cadastro-endereco' component={() => <SignUpFormAdress />}/>
                <Route exact path='/restaurantes' component={() => <Feed/>} />
                <Route exact path='/detalhes-restaurante/:id' component={() => <ShoppingDetail/>}/>
                <Route exact path='/perfil' component={() => <Profile/>}/>
                <Route exact path='/perfil/editar/' component={() => <EditeProfile/>}/>
                <Route exact path='/perfil/editar-endereco' component={() => 
                <EditAddress/>}/>
                <Route exact path='/carrinho' component={() => <Cart/>}/>
                <Route exact path='/restaurantes/busca' component={() => <FeedSearch />} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router
