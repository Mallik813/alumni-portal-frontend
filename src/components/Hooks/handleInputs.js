import { useState } from "react";

export const useForm =(initialValues)=>{

    const [values,changeValue]=useState(initialValues);
    // console.log(values);
    return  [   values,
                e=>{changeValue({...values,[e.target.name]:e.target.value})}
            ];

}