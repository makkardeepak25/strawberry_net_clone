import React from 'react';
import {Route,Switch} from 'react-router-dom';
import { Footer } from '../../Components/HomeComponents/Footer';
import { NavBar } from '../../Components/HomeComponents/NavBar';
import { Authentication } from '../Authentication/Authentication';
import { Bag } from '../Bag/Bag';
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
           <Route exact path="/:category/products/:id">
             <Product/>
           </Route>

           <Route exact path="/:category/signin">
             <Authentication/>
           </Route>
           <Route exact path="/:category/userinfo">
          <Gradient/>
           </Route>

           <Route exact path="/bag">
          <Bag/>
           </Route>
              <Route>
                <h1>404 | Product Not Found</h1>
              </Route>
        
           </Switch>
<Footer/>


        </div>
    );
};

export default Routes;