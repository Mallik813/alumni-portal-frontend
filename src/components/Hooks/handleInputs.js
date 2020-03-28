import { useState } from "react";

export const useForm =(initialValues)=>{

    const [values,changeValue]=useState(initialValues);
    // console.log("handle Input",initialValues);
    return [  values,
                e=>{changeValue({...values,[e.target.name]:e.target.value})}
            ];
    

}
