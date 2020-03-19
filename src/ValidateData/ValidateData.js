export const emailValidation =(email)=>{
    const regx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regx.test(email);
}

export const phonenoValidation = phoneno =>{
    const regx=/^\d{10}$/;
    return regx.test(phoneno)
}
