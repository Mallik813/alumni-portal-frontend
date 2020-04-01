import React,{useState, useEffect} from "react";
import styles from './UploadPosts.module.css';
import { useAuth } from "../Hooks/Auth";

const UploadPosts =()=>{

    const { authToken } = useAuth();
    const [activeTab,setActiveTab]=useState("1");
    const [post,setPost]=useState({ text:'', type:'1'});

    const handleTabChange=(id)=>{
        setActiveTab(id);
    }

    const handleTextArea=(event)=>{
        setPost({...post,text:event.target.value});
    }

    //setPost was rendering the value after 1 render
    useEffect(()=>{
        setPost({...post,type:activeTab});
    },[activeTab]);

    const onPost=(event)=>{
        event.preventDefault();
        
        console.log(post,activeTab);
        
        fetch('http://localhost:4000/api/uploadPost',{
            method:'POST',
            headers:{'Content-Type' : "application/json", "Authorization" : `Bearer ${authToken}`},
            body:JSON.stringify(post),
        })
        .then(response=>response.json())
        .then(resp=>{
            console.log(resp);
        })
    }
    return(
        <div className={styles.uploadPosts}>
            
            <div className={styles.tab_header}>
                <button className={ activeTab==="1" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("1")} >Share an Oppotunity</button>
                <button className={ activeTab==="2" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("2")} >Ask for Referral</button>
                <button className={ activeTab==="3" ? `${styles.active_tab} ${styles.tab}` :`${styles.tab}`} onClick={()=>handleTabChange("3")} >Activities</button>
            </div>
            <div className={styles.content}>
                <textarea onChange={handleTextArea} name="text"  placeholder="Write a Post" ></textarea>
            </div>
            <div className={styles.uploadPosts_buttons}>
                <button>Upload a photo/video</button>
                <button onClick={onPost}>Post</button>
            </div>

            
        </div>
    );
}

export default UploadPosts;
