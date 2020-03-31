import React from 'react';
import styles from './Home.module.css'
import Profile from '../../images/profile.jpg'
import Setting from '../../images/settings.png'
import UploadPosts from '../../components/UploadPosts/UploadPosts';
import ShowPosts from '../../components/ShowPosts/ShowPosts';
import {useAuth} from '../../components/Hooks/Auth'

const Home =()=>{

    const {currentUser} = useAuth();

    return (
        <div className={styles.home}>
            
            <div className={styles.left}>
                <div className={styles.left_upper}>
                    <div className={styles.info}>
                        <img src={Profile}  alt='Logo' className={styles.photo}/>
                        <div className={styles.name}> {currentUser.name} </div>
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
                   <ShowPosts />
                </div>
            </div>
        </div>
    );
}
export default Home;
