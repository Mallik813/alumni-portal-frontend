import React, { useState } from "react";
import styles from "./ShowPosts.module.css";
import Posts from "../../images/institute.jpeg"
function ShowPosts(){

    const [activeTab,handleTabChange]=useState('tab1');
    return (
        <div className={styles.showPosts}>
            <div className={styles.tab_header}>
                <button className={ activeTab==="tab1" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("tab1")} >Referrals</button>
                <button className={ activeTab==="tab2" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("tab2")} >Help Me!</button>
                <button className={ activeTab==="tab3" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("tab3")} >Activities</button>
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
