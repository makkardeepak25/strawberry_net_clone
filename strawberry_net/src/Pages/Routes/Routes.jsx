import React from 'react';
import {Route,Switch} from 'react-router-dom';
import { NavBar } from '../../Components/HomeComponents/NavBar';
import { Authentication } from '../Authentication/Authentication';
import { Home } from '../Home/Home';
import Product from '../Product_Page/Product';
const Routes = () => {
   
    return (
        <div>
          <NavBar/>
      <div style={{height:"150px"}}></div>
          <Switch>
           <Route exact path="/">
           <Home/>
           </Route>
           <Route exact path="/products/:id">
             <Product/>
           </Route>

           <Route exact path="/signin">
             <Authentication/>
           </Route>

           </Switch>



        </div>
    );
};

export default Routes;