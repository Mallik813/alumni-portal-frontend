import { useState } from "react";

export const useForm =(initialValues)=>{
    const [values,changeValue]=useState(initialValues);
    const func=e=>{
        changeValue({...values,[e.target.name]:e.target.value});
    }
    return [  values,func];
    

}
