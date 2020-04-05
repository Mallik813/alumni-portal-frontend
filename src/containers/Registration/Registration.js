import React from "react";
import { useForm } from "../../components/Hooks/handleInputs";
import {emailValidation, phonenoValidation, isNull, gradutationYearValidation} from '../../utils/validateData';
import styles from './Registration.module.css';
import { useHistory } from 'react-router-dom';
import { triggerAlert } from "../../utils/getAlert/getAlert";

const Registration =()=>{
    let date=new Date();
    let current_year=date.getFullYear();
    let julyFlag=(Number)(date.getMonth()<=7);
    const history=useHistory();
    let duration=5;
  
    const [inputs,changeInputs]=useForm({name:'Priyansh',email:'kf@kf.com',password:'123456',phoneno:'9933332222',batchName:'IPG',subBatch:'MTech',dob:'1998-08-28',admissionYear:'2019', graduationYear:'2024', userType : 'student'});
    
    const handleRegister =(event)=>{
        event.preventDefault();
        switch(inputs.batchName){
            case 'IPG': 
                        duration=5;  
            break;
            case 'BCS': 
                        duration=4;
            break;
            case "MTech": duration=2;
            break;
            case 'MBA': duration=2;
            break;
            default: duration=5;
        }
        if(current_year> inputs.graduationYear){
            changeInputs({'target':{'name':'userType','value':'alumni'}});
        }
        if( isNull(inputs) && emailValidation(inputs.email) && phonenoValidation(inputs.phoneno) && gradutationYearValidation(+inputs.admissionYear+ +duration,+inputs.graduationYear) ){
            fetch('http://localhost:4000/api/signup',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(inputs),
            })
            .then(response=>response.json())
            .then(res=>{
                if(res.icon==="success"){
                    triggerAlert(res);
                    history.replace('/');
                }
                else{
                    triggerAlert(res);
                }
            })
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
                        <input required placeholder="Phone Number" type="text" name="phoneno" value={inputs.phoneno} onChange={changeInputs}/>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="password">Password</label>
                        <input required placeholder="Password" type="password" name="password" value={inputs.password} onChange={changeInputs}/>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="batchName">Batch</label>
                        <div className={styles.batch}>
                            <select name="batchName" onChange={changeInputs}>
                                <option value="IPG">IPG</option>
                                <option value="BCS">BCS</option>
                                <option value="MTech">M.Tech</option>
                                <option value="MBA">MBA</option>
                                <option value="PhD">PhD</option>
                            </select>
                            {inputs.batchName==="IPG"?
                                <select name="subBatch" onChange={changeInputs}>
                                    <option value="MTech">M.Tech</option>
                                    <option value="MBA">MBA</option>                                                                       
                                </select>
                                :inputs.batchName==="MTech"?
                                    <select name="subBatch" onChange={changeInputs}>
                                        <option value="DC">Digital Communication</option>
                                        <option value="CN">Computer Networks</option>
                                        <option value="VLSI">Very Large Scale Integration</option>
                                        <option value="ISS">Internet Security</option>                                                                           
                                    </select>
                                    :<select disabled name="subBatch" onChange={changeInputs}>
                                        <option value="NA">NA</option>
                                    </select>
                            }
                            {/* <input required type="number" min="1998" max={year} name="name" value={inputs.name} onChange={changeInputs}/> */}
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="admissionYear">Admission Year</label>
                        <input  required type="number" min="1999" max={current_year-julyFlag} name="admissionYear" value={inputs.admissionYear} onChange={changeInputs}/>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="graduationYear">Graduation Year</label>
                        <input  required type="number" min="1999" max={current_year+5} name="graduationYear" value={inputs.graduationYear} onChange={changeInputs}/>
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
