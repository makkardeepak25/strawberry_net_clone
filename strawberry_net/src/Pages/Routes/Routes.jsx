import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Route,Switch} from 'react-router-dom';
import { Footer } from '../../Components/HomeComponents/Footer';
import { NavBar } from '../../Components/HomeComponents/NavBar';
import { getUserDetails } from '../../Redux/Auth/authAction';
import { Authentication } from '../Authentication/Authentication';
import { getUser } from '../Authentication/localstorage_s';
import { Bag } from '../Bag/Bag';
import CategoryPage from '../Category/CategoryPage';
import { Checkout } from './../Checkout/Checkout';

import { Home } from '../Home/Home';
import Product from '../Product_Page/Product';
import { Searchbar } from '../Searchbar/Searchbar';
import { Gradient } from '../UserInfo/Gradient';



const Routes = () => {
  const userid = useSelector(state => state.auth.userId)
  //console.log(userid,"ROutes")
  const dispatch = useDispatch()


  React.useEffect(()=>{
    console.log("route",userid);
   dispatch(getUserDetails(userid))

  },[userid])

  // const user = useSelector(state => state.auth.user)
  // console.log(user)

   
    return (
        <div>
      
          <Switch>
           <Route exact path="/">
           <NavBar/>
      <div style={{height:"150px"}}></div>
           <Home/>
           </Route>
           <Route exact path="/signin">
           <NavBar/>
      <div style={{height:"150px"}}></div>
             <Authentication/>
           </Route>
           <Route exact path="/userinfo">
           <NavBar/>
      <div style={{height:"150px"}}></div>
          <Gradient/>
           </Route>

           <Route path="/:category/bag">
           <NavBar/>
      <div style={{height:"150px"}}></div>
          <Bag/>
           </Route>
           <Route exact path="/:category">
           <NavBar/>
      <div style={{height:"150px"}}></div>
             <CategoryPage/>
           </Route>
           <Route exact path="/:category/products/:id">
           <NavBar/>
      <div style={{height:"150px"}}></div>
             <Product/>
           </Route>

           <Route exact path="/search/product-search">
           <NavBar/>
      <div style={{height:"150px"}}></div>
             <Searchbar/>
           </Route>

           <Route exact path="/:category/checkout">
           <NavBar/>
      <div style={{height:"150px"}}></div>
          <Checkout/>
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