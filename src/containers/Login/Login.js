import React from 'react';
import {useForm} from '../../components/Hooks/handleInputs'
import {history, useHistory} from "react-router-dom"
import styles from './Login.module.css'
import { useAuth } from '../../components/Hooks/Auth';
import { emailValidation } from '../../validation';

const Login =()=>{

    const [inputs,changeInputs]=useForm({email:'',password:''});
    const history=useHistory();

    const {setAuthToken}=useAuth();

    const handleLogin =(event)=>{
        
        event.preventDefault();

        const {email,password}=inputs;
        if(emailValidation(email)){
            
            setAuthToken(true);
            history.push('./home');
        }
    }
   
    return (
        <div className={styles.login}>
           <div className={styles.box}>
                <form className={styles.form}>

                    <div className={styles.field} >
                        <label htmlFor="email-address">E-mail</label>
                        <input 
                            required
                            type="email" 
                            name="email"  
                            id="email"
                            value={inputs.email}
                            onChange={changeInputs}
                        />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="password">Password</label>
                        <input 
                          required
                          type="password" 
                          name="password"  
                          id="password"
                          value={inputs.password}
                          onChange={changeInputs}
                         />
                    </div>

                    <button onClick={handleLogin} className={styles.button}>
                        Login
                    </button>
                    
                    <hr className={styles.line}/> 

                    <button className={styles.button}>
                        Register
                    </button>
                </form>
           </div>
        </div>
    );
}
export default Login;