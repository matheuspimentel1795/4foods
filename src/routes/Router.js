import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Cart from '../Pages/Cart/Cart'
import Feed from '../Pages/Feed/Feed'
import Login from '../Pages/Login/Login'
import Profile from '../Pages/Profile/Profile'
import ShoppingDetail from '../Pages/ShoppingDetail/ShoppingDetail'
import SignUp from '../Pages/SignUp/SignUp'
import SignUpFormAdress from '../Pages/SignUpFormAdress/SignUpFormAdress'
import Splash from '../Pages/Splash/Splash'

const Router = () =>{
    const [logged, setLogged] = useState(false)
    console.log(logged)

    return(
        <BrowserRouter>
            <Switch>
            {/* <Route exact path='/' component ={Splash} /> */}
                <Route exact path='/' component ={() => <Login setLogged={setLogged}/>} />
                <Route exact path='/cadastro' component={SignUp}/>
                <Route exact path='/cadastro-endereco' component={SignUpFormAdress}/>
                <Route exact path='/restaurantes' component={() => <Feed setLogged={setLogged}/>} />
                <Route exact path='/detalhes-restaurante' component={() => <ShoppingDetail setLogged={setLogged}/>}/>
                <Route exact path='/perfil' component={() => <Profile setLogged={setLogged}/>}/>
                <Route exact path='/carrinho' component={() => <Cart setLogged={setLogged}/>}/>
            </Switch>
            {logged ? <Footer/>: <></>}
        </BrowserRouter>
    )
}
export default Router