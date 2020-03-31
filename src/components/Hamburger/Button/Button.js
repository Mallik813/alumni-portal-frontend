import React from "react";
import styles from "./Button.module.css";

const Button =({openNav,setOpenNav})=>{
    return (
        <div onClick={()=>setOpenNav(!openNav)} className={styles.styledButton}>
            <div className={openNav?`${styles.line} ${styles.openLine}` : styles.line}></div>
            <div className={openNav?`${styles.line} ${styles.openLine}` : styles.line}></div>
            <div className={openNav?`${styles.line} ${styles.openLine}` : styles.line}></div>
        </div>
    )
}

export default Button;