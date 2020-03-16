import React from 'react';
import styles from  './Navbar.module.css';
import Logo from '../../images/logo.png'
const Navbar =()=>{
    return (
        <div className={styles.navbar}>
            <img src={Logo}  alt='Logo' className={styles.logo}/>
            <div className={styles.text}>Atal Bihari Vajpayee Indian Institute of Information Technology and Management Gwalior Alumni Association Portal</div>
            
        </div>
    );
}
export default Navbar;