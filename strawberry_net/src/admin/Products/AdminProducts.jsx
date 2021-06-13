import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Button} from "@material-ui/core"
import SideBar from '../SideBar/SideBar';
import styles from "./AdminProducts.module.css"
import Card from "../Card/Card"
const AdminProducts = () => {
const [products,setProducts]=useState([])
const [pagination, SetPagination]=useState([])
const [page,setPage]=useState(1)
const [category,setCategory]=useState("")
const [isError,setIsError]=useState(false)
    const getproducts=()=>{

        axios.get(`https://api-strawberrynet.herokuapp.com/products`)
        .then((res)=>{
          setProducts(res.data)
          SetPagination(res.data)
        })
        .catch((err)=>{
            setIsError(true)
        })
    }

    const handlePage=(p)=>{
        setPage(p)
        const lessthan= page*5 
        const a= products.filter((prod,index)=> index>=lessthan-5 && index<lessthan )
      SetPagination(a)
    }
    const temp= Math.ceil(products.length/5)
const total_page= new Array(temp).fill(0)
useEffect(()=>{
handlePage(page)
},[page])
    useEffect(()=>{
      getproducts()
    },[])
    return (
        <div className={styles.container}>
            <SideBar prop="products"/>

            <div className={styles.products}>


          <h1>Products</h1>
          <div className={styles.filter}>
                 
                 <div></div>
                 <div>
                     <select name="" id="">
                         {
                             products.map((el)=> 
                              <option value={el.category}>{el.category}</option>
                             )
                         }
                     </select>

                     <select name="" id="">
                         {
                             products.map((el)=> 
                              <option value={el.prod_name}>{el.prod_name}</option>
                             )
                         }
                     </select>

                 </div>

            </div>
        
            <div className={styles.cards}>
                {
                    pagination.length>0&& pagination.map((el)=> <Card key={el._id} {...el}/> )
                }
            </div>

     
          
               <div className={styles.pagination}>
                   {
                       total_page.map((el,i)=>  
                       <Button variant="contained" className={styles.page_btn} color="primary" size="small"  onClick={()=> setPage(i+1)}>{i+1}</Button>
                       )
                   }
               </div>

            </div>
        </div>
    );
};

export default AdminProducts;