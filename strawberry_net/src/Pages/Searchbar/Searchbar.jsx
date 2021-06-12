import React from "react"
import { useSelector } from "react-redux"
import SearchIcon from '@material-ui/icons/Search';
import styles from "./Searchbar.module.css"
import ProductCard from "./../../Components/Horizontal card/ProductCard"
import ReorderIcon from '@material-ui/icons/Reorder';
import AppsIcon from '@material-ui/icons/Apps';


export function Searchbar(){
    const searchData = useSelector(state => state.prod.searchProd)
    let searchKey = localStorage.getItem("searchKey")
    searchKey=JSON.parse(searchKey)
    return(
        <div className={styles.Maindiv}>
            <div className={styles.Div1}>Search Results</div>
            <div className={styles.Search} ><SearchIcon style={{fontWeight:"1000", width: "40px", height: "33px", color: "#e82e74",padding:"0px" }}/><span className={styles.Div3}>SEARCH RESULTS</span></div>

            <div className={styles.Div4}>
                <div className={styles.Div5}>
                    <div style={{textTransform:"uppercase"}}>{`${searchData.length} RESULTS FOR ${searchKey}`}</div>
                </div>
            </div>
            {searchData.length>0?<div className={styles.container}>
            <div className={styles.filter_container}>
                <div>

                </div>
                <div className={styles.by_brand}>
                    <h3>Refine By Brand</h3>
                    <div className={styles.checkbox}>
                        {
                            searchData.map((object)=> <div> <input type="checkbox" id={object.id}/> <label htmlFor={object.id} >{object.prod_name}</label> </div>)
                        }
                    </div>
                </div>
            </div>
            <div className={styles.product_container}>
            
             <div>
                 <h4>{searchData.length} results for <span style={{color:"#C7007D",textTransform:"uppercase"}}>{searchData.slice(0,1).map(el=>{return el.prod_name})}</span></h4>
             </div>
             <div className={styles.divider}></div>
           
           <div className={styles.view}>
               <div></div>
                 <div className={styles.sort_by}>
                     <h6>View</h6>
                     <div> <div><ReorderIcon className={styles.list} /></div>
                     <div className={styles.by_list}><h6>list</h6></div> </div>
                     <div><div> <AppsIcon className={styles.list}/></div> <div className={styles.by_list}><h6>grid</h6></div></div>
                     <select>
                         <option value=""> SORT BY POPULARITY</option>
                         <option value=""> SORT BY LOWEST PRICE</option>
                         <option value="asc"> SORT BY BRAND A-Z</option>
                         <option value="desc"> SORT BY BRAND Z-A</option>
                     </select>
                 </div>
           </div>

             <div className={styles.brand_title}>
                 <h4>{searchData.slice(0,1).map(el=>{return el.prod_name})}</h4>
             </div>

             <div>
                 {
                     searchData.length>0 && searchData.map((prod)=> <ProductCard key={prod.id} {...prod}/> )
                     
                 }
             </div>
             </div>
            </div>:<div style={{width:"90%",margin:"auto"}}><img style={{width:"100%",margin:"auto"}} src="/notFound.JPG" /></div>}
            



        </div>
    )
}