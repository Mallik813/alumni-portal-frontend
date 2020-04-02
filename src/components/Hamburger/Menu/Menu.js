/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from "react";
import styles from "./Menu.module.css";

const Menu = ({openNav, logout}) =>{
   

    return (
        <div className={openNav?`${styles.menu} ${styles.openMenu}`: styles.menu}>
            <button onClick={logout}> LogOut</button>
        </div>
    )
}

export default Menu;