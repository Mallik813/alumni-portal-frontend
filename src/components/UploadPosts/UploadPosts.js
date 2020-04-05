import React,{useState, useEffect} from "react";
import Swal from 'sweetalert2/src/sweetalert2';
import styles from './UploadPosts.module.css';
import { useAuth } from "../Hooks/Auth";
import { triggerAlert } from "../../utils/getAlert/getAlert";

const UploadPosts =()=>{


    /* activeTab
        1 - share opportunity
        2 - request for referal
        3 - activities
    */

    const { authToken } = useAuth();
    const [activeTab,setActiveTab]=useState("1");
    const [post,setPost]=useState({ text:'', type:'1',imageUrl:''});

    const onUploadFile=(async () => {

        const { value: file } = await Swal.fire({
          title: 'Select image',
          input: 'file',
          background: '#124479',
          inputAttributes: {
            'accept': 'image/*',
            'aria-label': 'Upload your profile picture'
          }
        })
        
        if (file) {
            const formData = new FormData();
            formData.append('file',file);
            fetch('http://localhost:4000/api/uploadimage',{
                method:'POST',
                headers:{'Authorization' : `Bearer ${authToken}`},
                body:formData,
            })
            .then(response=>response.json())
            .then(res=>{
                setPost( {...post,imageUrl: res.data} );
                triggerAlert( {icon:'success', title:'Image is Uploaded'} )
            })
        }
        
        })
    

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

    // const onUpload=()=>{
    // }

    const onPost=(event)=>{
        event.preventDefault();
        
        if(post.text.length===0){
            triggerAlert({icon:'error', title:`Post can't be empty!`})  
            return;
        }      
        fetch('http://localhost:4000/api/uploadPost',{
            method:'POST',
            headers:{'Content-Type' : "application/json", "Authorization" : `Bearer ${authToken}`},
            body:JSON.stringify(post),
        })
        .then(response=>response.json())
        .then(res=>{
            setPost( {...post,text:'',imageUrl:''} );
            triggerAlert(res);
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
                <button onClick={onUploadFile}>Upload a photo/video</button>
                <button onClick={onPost}>Post</button>
            </div>

            
        </div>
    );
}

export default UploadPosts;
