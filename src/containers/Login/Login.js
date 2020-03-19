import React from 'react';
import {useForm} from '../../components/Hooks/handleInputs'
import {useHistory, Link} from "react-router-dom"
import styles from './Login.module.css'
import { useAuth } from '../../components/Hooks/Auth';
import { emailValidation } from '../../ValidateData/ValidateData';

const Login =()=>{

    const [inputs,changeInputs]=useForm({email:'',password:''});
    const history=useHistory();

    const {setAuthToken}=useAuth();

    const handleLogin =(event)=>{
        
        event.preventDefault();

        const {email,password}=inputs;
        if(emailValidation(email)){
            
            // fetch('http://localhost:4000/api/signup',{
            //     method:'POST',
            //     headers:{'Content-Type' : "application/json"},
            //     body:JSON.stringify({
            //         email:email,
            //         password:password
            //     }),
            // })
            // .then(res=>res.json())
            setAuthToken(true);
            history.push('./home');
        }
    }
   
    return (
        <div className={styles.login}>
           <div className={styles.login_box}>
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

                    <input onClick={handleLogin} className={styles.button} type="submit" value="sumbit"/>
                        {/* Login
                    </input> */}
                    
                    <hr className={styles.line}/> 
                    {/* <Link to='/register'> */}
                        <Link to='/register' className={styles.button}>Register</Link>
                    {/* </Link> */}
                </form>
           </div>
        </div>
    );
}
export default Login;