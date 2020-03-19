import React from "react";
import { useForm } from "../../components/Hooks/handleInputs";
import styles from './Registration.module.css'
import { emailValidation, phonenoValidation } from "../../ValidateData/ValidateData";
import { useHistory } from 'react-router-dom'

const Registration =()=>{
    let date=new Date();
    let current_year=date.getFullYear();
    let max_year=current_year+4;
    const history=useHistory();
  
    const [inputs,changeInputs]=useForm({name:'Priyansh',email:'',password:'',phoneno:'',batch_name:'IPG',sub_batch:'MTech',dob:'1998-08-28',graduation_year:max_year});
    
    const handleRegister =(event)=>{
        event.preventDefault();
        console.log('sdf');
        console.log(inputs);
        if(emailValidation(inputs.email) && phonenoValidation(inputs.phoneno)){
            console.log('sdhhf');
            history.replace('/verifyemail');
        }
    }
    const handleGraduationYear=(e)=>{
        changeInputs(e);
        switch(inputs.batch_name){
            case 'IPG': 
                        max_year=current_year+4;  
            break;
            case 'BCS': 
                        max_year=current_year+3;
            break;
            case 'MTech': max_year=current_year+1;
            break;
            case 'MBA': max_year=current_year+1;
            break;
            default: max_year=current_year+5;
        }
        
    
    }
    return(
        <div className={styles.registration}>
            <div className={styles.registration_box}>
                <div className={styles.registration_header}>Register</div>
                <form className={styles.form}>
                    
                    <div className={styles.field}>
                        <label htmlFor="name">Name:</label>
                        <input required placeholder="Your Good Name" type="text" name="name" value={inputs.name} onChange={changeInputs}/>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="email">E-mail Id:</label>
                        <input required placeholder="Email address" type="email" name="email" value={inputs.email} onChange={changeInputs}/>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="phoneno">Phone Number</label>
                        <input required placeholder="Phone Number" type="text" name="phoneno" value={inputs.phone} onChange={changeInputs}/>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="password">Password</label>
                        <input required placeholder="Password" type="password" name="password" value={inputs.password} onChange={changeInputs}/>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="batch_name">Batch</label>
                        <div className={styles.batch}>
                            <select name="batch_name" onChange={handleGraduationYear}>
                                <option value="IPG">IPG</option>
                                <option value="BCS">BCS</option>
                                <option value="MTech">M.Tech</option>
                                <option value="MBA">MBA</option>
                                <option value="PhD">PhD</option>
                            </select>
                            {inputs.batch_name==="IPG"?
                                <select name="sub_batch">
                                    <option value="MTech">M.Tech</option>
                                    <option value="MBA">MBA</option>                                                                       
                                </select>
                                :inputs.batch_name==="MTech"?
                                    <select name="sub_batch">
                                        <option value="DC">Digital Communication</option>
                                        <option value="CN">Computer Networks</option>
                                        <option value="VLSI">Very Large Scale Integration</option>
                                        <option value="ISS">Internet Security</option>                                                                           
                                    </select>
                                    :<select disabled name="sub_batch">
                                        <option value="NA">NA</option>
                                    </select>
                            }
                            {/* <input required type="number" min="1998" max={year} name="name" value={inputs.name} onChange={changeInputs}/> */}
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="graduation_year">Graduation Year</label>
                        <input  required type="number" min="1999" max={max_year} name="graduation_year" value={inputs.graduation_year} onChange={changeInputs}/>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="dob">Date of Birth </label>
                        <input onChange={changeInputs} required type="date" name="dob" value={inputs.dob} />
                    </div>
                    <div className={styles.submit_div}>
                        <input onClick={handleRegister} className={styles.submit_button} type="submit" value="Register" />
                    </div>
                  </form>
            </div>
        </div>
    )
}

export default Registration;