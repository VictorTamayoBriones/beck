import { Route, Switch } from 'react-router-dom';
import { Home } from '../views/Home';
import { Login } from '../views/Login';
import { Logup } from '../views/Logup';
import { Contact } from '../views/Contact';
import { Shop } from '../views/Shop';
import { Plant } from '../views/Plant';
import { AddAddress } from '../views/AddAddress';
import { PayCar } from '../views/PayCar';
import { FourOFour } from '../views/404'

export const Routes = () =>{

    return(
        <Switch>
            <Route path="/" exact={ true } component={ Home } />
            <Route path="/login" component={ Login } />
            <Route path="/logup" component={ Logup } />
            <Route path="/contacto" component={ Contact } />
            <Route path="/shop" component={ Shop } />
            <Route path="/plant:id" component={ Plant } />
            <Route path="/addAddress" component={ AddAddress } />
            <Route path="/payCar" component={ PayCar } />
            <Route component={ FourOFour } />
        </Switch>
    )

};