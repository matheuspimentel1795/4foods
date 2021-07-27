import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cart from '../Pages/Cart/Cart'
import Feed from '../Pages/Feed/Feed'
import Login from '../Pages/Login/Login'
import Profile from '../Pages/Profile/Profile'
import ShoppingDetail from '../Pages/ShoppingDetail/ShoppingDetail'
import SignUp from '../Pages/SignUp/SignUp'
import Splash from '../Pages/Splash/Splash'

const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
            {/* <Route exact path='/' component ={Splash} /> */}
                <Route exact path='/' component ={Login} />
                <Route exact path='/cadastro' component={SignUp}/>
                <Route exact path='/restaurantes' component={Feed} />
                <Route exact path='/detalhes-restaurante' component={ShoppingDetail} />
                <Route exact path='/perfil' component={Profile}/>
                <Route exact path='/carrinho' component={Cart}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router