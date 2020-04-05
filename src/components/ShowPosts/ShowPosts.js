import React, { useState, useEffect } from "react";
import styles from "./ShowPosts.module.css";
import Posts from "../../images/institute.jpeg"
import { useAuth } from "../Hooks/Auth";
import Loader from "../Loader/Loader";
import { Link } from 'react-router-dom';

function ShowPosts( {findAll, userId} ){

    const {authToken} = useAuth();
    const [activeTab,handleTabChange]=useState('1');
    const [postsData,setpostsData]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/api/fetchposts',{
            method:'POST',
            headers:{'Content-Type':'application/json',  'Authorization' : `Bearer ${authToken}`,},
            body : JSON.stringify({type:activeTab, findAll, userId}),
        })
        .then(response=>response.json())
        .then(res=>{
            setpostsData(res);
        })
    },[activeTab]);

    const posts=postsData.map(post=>{
        const img = post.imageUrl!=='';
        return (
            <div className={styles.post}>   
                <Link to={`/profile/${post.ID}`}>{post.userName}</Link>
                <div>{post.text}</div>
                {img &&  <img src={post.imageUrl} alt="Posts" />}
            </div>
        )
    })
    if(!postsData)
        return <Loader />
    return (
        <div className={styles.showPosts}>
            <div className={styles.tab_header}>
                <button className={ activeTab==="1" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("1")} >Referrals</button>
                <button className={ activeTab==="2" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("2")} >Help Me!</button>
                <button className={ activeTab==="3" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("3")} >Activities</button>
            </div>
             <div className={styles.content}>
                 {posts}
                 <div className={styles.post}>   
                    <div>Name</div>
                    <div>Text.......</div>
                    <img src={Posts} alt="Posts" />
                </div>
                <div className={styles.post}>   
                    <div>Name</div>
                    <div>Text.......</div>
                    <img src={Posts} alt="Posts" />
                </div>
            </div>  
        </div>
    );
}

export default ShowPosts;
