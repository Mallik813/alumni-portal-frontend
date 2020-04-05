import React from 'react';
import styles from './Home.module.css'
import ProfileImg from '../../images/profile.jpg'
import Setting from '../../images/settings.png'
import UploadPosts from '../../components/UploadPosts/UploadPosts';
import ShowPosts from '../../components/ShowPosts/ShowPosts';
import {useAuth} from '../../components/Hooks/Auth'
import { Redirect, useLocation } from "react-router-dom"
import Loader from '../../components/Loader/Loader'

const Home =()=>{

    const {currentUser} = useAuth();
    const location = useLocation();
    const referer = location.state && location.state.referer ? location.state.referer : '/';
    if(!currentUser)
        return <Loader />
    if(referer!=='/'){
        console.log('dfs'); 
        location.state=null;
       return  <Redirect to={referer} />
    }
    return (
        <div className={styles.home}>
            
            <div className={styles.left}>
                <div className={styles.left_upper}>
                    <div className={styles.info}>
                        <img src={ProfileImg}  alt='Logo' className={styles.photo}/>
                        <div className={styles.name}> {currentUser.name.split(" ")[0]} </div>
                    </div>
                    <div className={styles.editProfile}>
                        <div>Edit Profile</div>
                        <img src={Setting} alt='Setting' />
                    </div>
                </div>

                <div className={styles.left_lower}>
                    <div className={styles.noti_title}> Notificaitons </div>
                    <div className={styles.notifications}>
                        <div className={styles.noti_content}>26th Jan Celebrations Photo</div>
                        <div className={styles.noti_content}>15th Aug Celebrations Photo</div>
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.right_upper}> 
                    <UploadPosts /> 
                </div>

                <div className={styles.right_lower}>
                   <ShowPosts findAll={true} userId={currentUser._id} />
                </div>
            </div>
        </div>
    );
}
export default Home;
