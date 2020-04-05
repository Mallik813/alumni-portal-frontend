import React, { useEffect, useState }  from "react";
import ShowPosts from "../../components/ShowPosts/ShowPosts";
import ProfileImg from "../../images/profile.jpg";
import styles from './Profile.module.css'
import { useParams } from "react-router-dom";
import { useAuth } from "../../components/Hooks/Auth";
import Loader from "../../components/Loader/Loader";

const Profile = () =>{
    const {authToken} = useAuth();
    const {profileId} = useParams();
    const [userDetails,setUser] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:4000/api/profile/${profileId}`,{
            method:'GET',
            headers:{'Content-Type':'application/json',  'Authorization' : `Bearer ${authToken}`,}
        })
        .then(response=>response.json())
        .then(user =>{
            setUser(user);
        })
    },[])

    if(!userDetails)
        return <Loader size={'60px'}/>
    return (
        <div className={styles.profile}>
            <div className={styles.left}>
                <div className={styles.left_content}>
                    <img src={ProfileImg} alt='DP' className={styles.profile_photo} />
                    <p className={styles.name}> {userDetails.name} </p>
                    <div className={styles.details}>
                        <p> {userDetails.admissionYear} {userDetails.batchName} {userDetails.subBatch && userDetails.subBatch}</p>
                        <p> Director of XYZ</p>
                        <p> Worked in ABC</p>
                        <p> Lives in Bombay</p>
                    </div>
                </div>
            </div> 
            <div className={styles.right}>
                   <ShowPosts findAll={false} userId={userDetails._id}  />
            </div>
        </div>
    )
}

export default Profile;