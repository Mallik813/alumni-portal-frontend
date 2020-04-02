import React, { useState } from "react";
import styles from "./ShowPosts.module.css";
import Posts from "../../images/institute.jpeg"
function ShowPosts(){

    const [activeTab,handleTabChange]=useState('1');
    return (
        <div className={styles.showPosts}>
            <div className={styles.tab_header}>
                <button className={ activeTab==="1" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("1")} >Referrals</button>
                <button className={ activeTab==="2" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("2")} >Help Me!</button>
                <button className={ activeTab==="3" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("3")} >Activities</button>
            </div>
             <div className={styles.content}>
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
