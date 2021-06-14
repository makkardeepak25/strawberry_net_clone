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
import Panel from "../../admin/Panel/Panel"
import Profiles from '../../admin/Profiles/Profiles';
import AdminProducts from '../../admin/Products/AdminProducts';
import Orders from "../../admin/Orders/Orders"
import { OrderTracking } from '../OrderTracking/OrderTracking';
import SingleOrder from '../../admin/Orders/OrderCard/SingleOrder/SingleOrder';
import OrderList from '../Orders/OrderList';
import { Setting } from '../UserInfo/Settings/Setting';


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
           <Footer/>
           </Route>

           {/* Admin Panel Route */}
           <Route exact path="/admin/dashboard">
             <Panel/>
           </Route>

           <Route exact path="/admin/profiles">
            <Profiles/>
           </Route>

           <Route exact path="/admin/products">
           <AdminProducts/>
           </Route>
           <Route exact path="/admin/orders">
           <Orders />
           </Route>
           <Route exact path="/admin/orders/:userId/:orderId">
          <SingleOrder/>
           </Route>

          {/* Admin Panel Route Ended */}

          <Route exact path="/user/ordertracking/:id">
          <NavBar/>
      <div style={{height:"150px"}}></div>
      <Gradient/>
            <OrderTracking/>
            <Footer/>
          </Route>

          <Route exact path="/user/orders">
          <NavBar/>
      <div style={{height:"150px"}}></div>
      <Gradient/>
            <OrderList/>
            <Footer/>
          </Route>

          <Route exact path="/user/setting">
          <NavBar/>
      <div style={{height:"150px"}}></div>
            <Gradient/>
            <Setting/>
            <Footer/>
          </Route>


           <Route exact path="/signin">
           <NavBar/>
      <div style={{height:"150px"}}></div>
             <Authentication/>
             <Footer/>
           </Route>

          

           <Route path="/:category/bag">
           <NavBar/>
      <div style={{height:"150px"}}></div>
          <Bag/>
          <Footer/>
           </Route>
           <Route exact path="/:category">
           <NavBar/>
      <div style={{height:"150px"}}></div>
             <CategoryPage/>
             <Footer/>
           </Route>

           <Route exact path="/:category/products/:id">
           <NavBar/>
      <div style={{height:"150px"}}></div>
             <Product/>
             <Footer/>
           </Route>

           <Route exact path="/search/product-search">
           <NavBar/>
      <div style={{height:"150px"}}></div>
             <Searchbar/>
             <Footer/>
           </Route>

           <Route exact path="/:category/checkout">
           <NavBar/>
      <div style={{height:"150px"}}></div>
          <Checkout/>
          <Footer/>
           </Route>

              <Route>
                <h1>404 | Product Not Found</h1>
              </Route>
        
           </Switch>



        </div>
    );
};

export default Routes;