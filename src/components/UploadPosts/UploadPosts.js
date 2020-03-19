import React,{useState} from "react";
import styles from './UploadPosts.module.css';

const UploadPosts =()=>{

    const [activeTab,setActiveTab]=useState("tab1");

    const handleTabChange=(e)=>{
        
        setActiveTab(e);
    }
   
    return(
        <div className={styles.uploadPosts}>
            
            <div className={styles.tab_header}>
                <button className={ activeTab==="tab1" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("tab1")} >Share an Oppotunity</button>
                <button className={ activeTab==="tab2" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("tab2")} >Ask for Referral</button>
                <button className={ activeTab==="tab3" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("tab3")} >Activities</button>
            </div>
            <div className={styles.content}>
                <textarea placeholder="Write a Post" ></textarea>
            </div>
            <div className={styles.uploadPosts_buttons}>
                <button>Upload a photo/video</button>
                <button>Post</button>
            </div>

            
        </div>
    );
}

export default UploadPosts;