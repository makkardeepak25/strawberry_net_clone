import React from 'react';
import {Route,Switch} from 'react-router-dom';
import { Footer } from '../../Components/HomeComponents/Footer';
import { NavBar } from '../../Components/HomeComponents/NavBar';
import { Authentication } from '../Authentication/Authentication';
import CategoryPage from '../Category/CategoryPage';
import { Home } from '../Home/Home';
import Product from '../Product_Page/Product';
import { Gradient } from '../UserInfo/Gradient';

const Routes = () => {
   
    return (
        <div>
          <NavBar/>
      <div style={{height:"150px"}}></div>
          <Switch>
           <Route exact path="/">
           <Home/>
           </Route>
           <Route exact path="/:category">
             <CategoryPage/>
           </Route>
           <Route exact path="/products/:id">
             <Product/>
           </Route>

           <Route exact path="/signin">
             <Authentication/>
           </Route>
           <Route exact path="/userinfo">
          <Gradient/>
           </Route>

       
           </Switch>
<Footer/>


        </div>
    );
};

export default Routes;