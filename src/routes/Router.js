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
    const [logged, setLogged] = useState(false)
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
                <Route exact path='/perfil/editar-endereco' component={() => 
                <EditAddress setLogged={setLogged} changeInfoHeader={changeInfoHeader}/>}/>
                <Route exact path='/carrinho' component={() => <Cart setLogged={setLogged} changeInfoHeader={changeInfoHeader}/>}/>
                <Route exact path='/restaurantes/busca' component={() => <FeedSearch setLogged={setLogged} />} />
            </Switch>
            {logged ? <Footer infoHeader={infoHeader}/>: <></>}
        </BrowserRouter>
    )
}
export default Router
