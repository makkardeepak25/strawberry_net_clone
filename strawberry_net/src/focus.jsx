import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./focus.module.css"

export const Focussed = () => {
   
    return (
        <div>
            <div style={{display:"flex",justifyContent:"space-evenly",background:"blue"}}>
                <NavLink to={"/yes"} activeStyle={{ backgroundColor: "yellow", color: "white" }}> <div style={{ cursor: "pointer" }} className={styles.foc}>Deepak</div></NavLink>
                <NavLink to={"/my"} activeStyle={{backgroundColor:"yellow",color:"white"}}> <div  style={{cursor:"pointer"}} className={styles.foc}>who</div></NavLink>
                <div>absdjsa</div>
                <div>adsfd</div>
                <div>Dsdfds</div>
                <div>sdfd</div>
            </div>
        </div>
    )
}