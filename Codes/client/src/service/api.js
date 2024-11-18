import axios from 'axios';

const URL ='http://localhost:8000';

export const authenticateSignup = async (data)=>{
    try{
        console.log("success");
        return await axios.post(`${URL}/signup`,data)
        
    }
    catch(error){
        console.log('Error while calling signup api',error);
    }
}

export const authenticateLogin = async (data)=>{
    try{
        console.log("success");
        return await axios.post(`${URL}/login`,data)
        
    }
    catch(error){
        console.log('Error while calling login api',error);
        return error.response;
    }
}

export const authenticateForgotPassword = async (data)=>{
    try{
        console.log("success");
        return await axios.post(`${URL}/forgot-password`,data)
        
    }
    catch(error){
        console.log('Error while calling forgot-password api',error);
    }
}
export const authenticateVerifyOtp = async (data)=>{
    try{
        console.log("success");
        return await axios.post(`${URL}/verify-otp`,data)
        
    }
    catch(error){
        console.log('Error while calling verify-otp api',error);
    }
}

export const authenticatesellerSignup = async (data)=>{
    try{
        console.log("success");
        return await axios.post(`${URL}/sellersignup`,data)
        
    }
    catch(error){
        console.log('Error while calling signup api',error); 
    }
}

export const authenticatesellerLogin = async (data)=>{
    try{
        console.log("success");
        return await axios.post(`${URL}/sellerlogin`,data)
        
    }
    catch(error){
        console.log('Error while calling login api',error);
        return error.response;
    }
}

export const addProduct = async (data) => {
    try{
        console.log("success");
        return await axios.post(`${URL}/addproduct`,data)
    }
    catch(error){
        console.log('Error while updating product',error);
        return error.response;
    }
}