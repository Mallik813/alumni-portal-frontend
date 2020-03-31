import React from 'react';
import {useForm} from '../../components/Hooks/handleInputs'
import { Link } from "react-router-dom"
import styles from './Login.module.css'
import { useAuth } from '../../components/Hooks/Auth';
import {emailValidation} from '../../utils/validateData';
import { triggerAlert } from '../../utils/getAlert/getAlert';

const Login =()=>{

    const [inputs,changeInputs]=useForm({email:'',password:''});
    

    const {setAuthToken}=useAuth();
    const handleLogin =(event)=>{
        
        event.preventDefault();

        if(emailValidation(inputs.email) && inputs.password.length>=6){
            console.log()
            fetch('http://localhost:4000/api/login',{
                method:'POST',
                headers:{'Content-Type' : "application/json"},
                body:JSON.stringify(inputs),
            })
            .then(response=>response.json())
            .then(res=>{
                if(res.response==="success"){
                    setAuthToken(res.data);
                    window.localStorage.setItem('token',res.data);
                    
                }
                else{
                    triggerAlert({icon: "error", title: res.response});
                }  
            })
        }
        else {
            emailValidation(inputs.email) ? triggerAlert({icon:"error", title : "Enter valid Password"})
                                          : triggerAlert({icon:"error", title : "Enter valid Email" });
        }
    }
   
    return (
        <div className={styles.login}>
           <div className={styles.login_box}>
                <form className={styles.form}>

                    <div className={styles.field} >
                        <label htmlFor="email-address">E-mail</label>
                        <input onChange={changeInputs} type="email" name="email" id="email" value={inputs.email} />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="password">Password</label>
                        <input onChange={changeInputs} type="password" name="password" id="password" value={inputs.password} />
                    </div>

                    <input onClick={handleLogin} className={styles.button} type="submit" value="Login"/>
                    
                    <hr className={styles.line}/> 
                    
                    <Link to='/register' className={styles.button}>Register</Link>
                    
                </form>
           </div>
        </div>
    );
}
export default Login;
