import React from "react"
import { useSelector } from "react-redux"
import SearchIcon from '@material-ui/icons/Search';
import styles from "./Searchbar.module.css"

export function Searchbar(){
    const searchData=useSelector(state=>state.prod.searchProd)
    return(
        <div className={styles.Maindiv}>
            <div className={styles.Div1}>Search Results</div>
            <div className={styles.Search} ><SearchIcon style={{fontWeight:"1000", width: "40px", height: "33px", color: "#e82e74",padding:"0px" }}/><span className={styles.Div3}>SEARCH RESULTS</span></div>

            <div className={styles.Div4}>
                <div className={styles.Div5}>
                    <div>{`${searchData.length} RESULTS FOR ${searchData.slice(0,1).map(el=>{return el.prod_name})}`}</div>
                </div>
            </div>



        </div>
    )
}