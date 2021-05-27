import { BrowserRouter, Switch, Route }  from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { AboutUs } from '../views/AboutUs'
import { ProductsView } from '../views/ProductsView'
import { RegisterView } from '../views/RegisterView'
import { ShoppingCartView } from '../views/ShoppingCartView'
import { SignInView } from '../views/SignInView'
import {ConatctUs} from '../views/ContactUs'
import {API} from '../views/API'

export const Routes = (props: { children?: React.ReactChild}) => {
    return (
        <BrowserRouter>
        {props.children}
        <Switch>
        <Route exact path={'/api'} component={API}/>
        <Route exact path={'/home'} component={HomeView}/>
        <Route exact path={'/signin'} component={SignInView}/>
        <Route exact path={'/products'} component={ProductsView}/>
        <Route exact path={'/about'} component={AboutUs}/>
        <Route exact path={'/contact'} component={ConatctUs}/>
        <Route exact path={'/register'} component={RegisterView}/>
        <Route exact path={'/cart'} component={ShoppingCartView}/>
        <Route component={API}/>
        </Switch>      
        </BrowserRouter>
    )
}
