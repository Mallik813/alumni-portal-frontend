import React, {useRef, useState} from 'react';
import styles from  './Navbar.module.css';
import Logo from '../../images/logo.png'
import { useAuth } from '../../components/Hooks/Auth';
import SearchIcon from '../../images/search_icon.png';
import { Link} from 'react-router-dom';
import Button from "../../components/Hamburger/Button/Button";
import Menu from '../../components/Hamburger/Menu/Menu';
import { useOnClickOutside } from "../../components/Hooks/useOnClickOutside"

const Navbar =({logout })=>{

  const [openNav,setOpenNav]=useState(0);
  const {authToken} = useAuth();
    const node=useRef();
    useOnClickOutside(node,()=>setOpenNav(0));

    return (
        <div>
            {!authToken?
                <div className={styles.unauthorize_navbar}>
                    <Link to="/" className={styles.logo} >
                        <img src={Logo}  alt='Logo' />
                    </Link>
                    <div className={styles.unauthorize_text}>Atal Bihari Vajpayee Indian Institute of Information Technology and Management Gwalior Alumni Association Portal</div>
                </div>
                :<div className={styles.authorize_navbar}>
                    <div className={styles.left}>
                        <Link to="/" className={styles.logo} >
                            <img src={Logo}  alt='Logo' />
                        </Link>
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
                            <Button openNav={openNav} setOpenNav={setOpenNav} />
                            <Menu openNav={openNav} logout={logout} />
                        </div>
                    </div>
                </div>}
            

        </div>
      
    );
}
export default Navbar;
