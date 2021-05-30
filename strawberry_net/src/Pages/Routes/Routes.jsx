import React from 'react';
import {Route} from 'react-router-dom';
import { Authentication } from '../Authentication/Authentication';
import { Home } from '../Home/Home';
import Product from '../Product_Page/Product';
const Routes = () => {
   
    return (
        <div>
           <Route exact path="/">
           <Home/>
           </Route>
           <Route exact path="/product">
             <Product/>
           </Route>

           <Route exact path="/signin">
             <Authentication/>
           </Route>
        </div>
    );
};

export default Routes;