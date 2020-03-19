import React from 'react';
import styles from  './Navbar.module.css';
import Logo from '../../images/logo.png'
import { useAuth } from '../../components/Hooks/Auth';
import SearchIcon from '../../images/search_icon.png'
const Navbar =()=>{

    const {authToken} = useAuth();
    return (
        <div>
            {!authToken?
                <div className={styles.unauthorize_navbar}>
                    <img src={Logo}  alt='Logo' className={styles.logo}/>
                    <div className={styles.unauthorize_text}>Atal Bihari Vajpayee Indian Institute of Information Technology and Management Gwalior Alumni Association Portal</div>
                </div>
                :<div className={styles.authorize_navbar}>
                    <div className={styles.left}>
                        <img src={Logo}  alt='Logo' className={styles.logo}/>
                        <div className={styles.authorize_text}>
                            <div className={styles.inst_name}>ABV-IIITMG</div>
                            <div className={styles.portal_name}>Alumni Association Portal</div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.search_box}>
                            <img src={SearchIcon} alt="search_icon" className={styles.search_icon} ></img>
                            <input type="text" placeholder="Search.." name="search" className={styles.search_text} />
                        </div>
                        <div className={styles.hamburger}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>}
            

        </div>
      
    );
}
export default Navbar;