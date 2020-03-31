import getAlert from './getAlert/getAlert'
export const emailValidation =(email)=>{
    const regx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const match = regx.test(email);
    return match;

}

export const phonenoValidation = phoneno =>{
    const regx=/^\d{10}$/; 
    const match = regx.test(phoneno);
    return match;
}

export const isNull = ({obj}) =>{
    for (const property in obj){
        if(!obj(property)){
            const toast = getAlert();
            toast.fire({
                icon : "error",
                title: "Enter valid details"
            })
            return 0;
        }
    }
    return 1;
}
