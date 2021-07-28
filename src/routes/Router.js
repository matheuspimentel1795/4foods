import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Cart from '../Pages/Cart/Cart'
import EditeProfile from '../Pages/EditeProfile/EditeProfile'
import Feed from '../Pages/Feed/Feed'
import Login from '../Pages/Login/Login'
import Profile from '../Pages/Profile/Profile'
import ShoppingDetail from '../Pages/ShoppingDetail/ShoppingDetail'
import SignUp from '../Pages/SignUp/SignUp'
import SignUpFormAdress from '../Pages/SignUpFormAdress/SignUpFormAdress'
import Splash from '../Pages/Splash/Splash'
import FeedSearch from '../Pages/FeedSearch/FeedSearch'

const Router = () => {
    const [logged, setLogged] = useState(false)
    const token = localStorage.getItem('token')
    const [infoHeader, setInfoHeader] = useState("")

    const changeInfoHeader = (info) => {
        setInfoHeader(info)
    }

    return (
        <BrowserRouter>
            <Header infoHeader={infoHeader}/>
            <Switch>
            {/* <Route exact path='/' component ={Splash} /> */}
                <Route exact path='/' component ={() => <Login setLogged={setLogged} changeInfoHeader={changeInfoHeader}/>} />
                <Route exact path='/cadastro' component={() => <SignUp changeInfoHeader={changeInfoHeader}/>}/>
                <Route exact path='/cadastro-endereco' component={() => <SignUpFormAdress setLogged={setLogged} changeInfoHeader={changeInfoHeader}/>}/>
                <Route exact path='/restaurantes' component={() => <Feed setLogged={setLogged} changeInfoHeader={changeInfoHeader}/>} />
                <Route exact path='/detalhes-restaurante/:id' component={() => <ShoppingDetail setLogged={setLogged} changeInfoHeader={changeInfoHeader}/>}/>
                <Route exact path='/perfil' component={() => <Profile setLogged={setLogged} changeInfoHeader={changeInfoHeader}/>}/>
                <Route exact path='/perfil/editar/:name?/:email?/:cpf?' component={() => <EditeProfile setLogged={setLogged} changeInfoHeader={changeInfoHeader}/>}/>
                <Route exact path='/carrinho' component={() => <Cart setLogged={setLogged} changeInfoHeader={changeInfoHeader}/>}/>
                <Route exact path='/restaurantes/busca' component={() => <FeedSearch setLogged={setLogged} />} />
            </Switch>
            {logged ? <Footer infoHeader={infoHeader}/>: <></>}
        </BrowserRouter>
    )
}
export default Router
