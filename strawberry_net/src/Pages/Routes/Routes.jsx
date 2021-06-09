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
          <NavBar/>
      <div style={{height:"150px"}}></div>
          <Switch>
           <Route exact path="/">
           <Home/>
           </Route>
           <Route exact path="/signin">
             <Authentication/>
           </Route>
           <Route exact path="/userinfo">
          <Gradient/>
           </Route>

           <Route path="/:category/bag">
          <Bag/>
           </Route>
           <Route exact path="/:category">
             <CategoryPage/>
           </Route>
           <Route exact path="/:category/products/:id">
             <Product/>
           </Route>

           <Route exact path="/search/product-search">
             <Searchbar/>
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