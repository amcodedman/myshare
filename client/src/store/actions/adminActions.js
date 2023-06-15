import axios from  "axios"
import * as notify from "./notification"
import { LoadsCookie } from "./usercookie";

const { USER_DETAIL ,USERS,NEW_USER,PRE_REGISTER} = require("../type");

export const get_users=(detail)=>({
type:USERS,
payload:detail
})

export const pre_register=(data)=>({
    type:PRE_REGISTER,
    payload:data
    })




export const userDetail=(data)=>({
type:USER_DETAIL,
payload:data
})




axios.defaults.headers.post["Content-Type"]="application/json"

export const getAllUsers=()=>{
    return async(dispatch)=>
{
try { 
    const content =await axios.get("/user/alluser");
   dispatch(get_users(content.data))

} catch (error) {


    
}
}
}




export const preRegister=(userdata)=>{
    return async (dispatch,getdispatch)=>{
try {
    const newd=await axios.post("/user/preregister",userdata);
    dispatch(pre_register(newd.data))
    dispatch(notify.notify_success({msg:"Please check your mail to verify account"}))
} catch (error) {


    console.log(error.response.data);
    
}




    }
}

export const ComfirmUserS =(userdata)=>{
    return async (dispatch)=>{
try {
   
    const newd=await axios.post("/user/authenticateme",userdata);
    dispatch(userDetail(newd.data))
    dispatch(notify.notify_success({msg:"Account verified"}))
} catch (error) {


    console.log(error.response.data);
    dispatch(notify.notify_success({msg:error.response.data.msg}))
  
    
}




    }
}


export const updateAccount=(data,id)=>{
    return async(dispatch)=>{

        try {
            const profiledetail = await axios.patch(`/user/modifyuser:${id}`,data);
            dispatch(userDetail(profiledetail.data))
            dispatch(notify.notify_success({msg:"Account Updated"}))

        } catch (error) {
            dispatch(notify.notify_error({msg:error.response.data}))
            
        }
    }
}


export const SignIn=(data)=>{
    return async(dispatch)=>{

        try {
            const profiledetail = await axios.post("/user/signin",data);
            dispatch(userDetail(profiledetail.data))
            dispatch(notify.notify_success({msg:"Account Updated"}))

        } catch (error) {
            dispatch(notify.notify_error({msg:error.response.data.msg}))
            console.log(error.response.data.msg)
            
        }
    }
}


export const AutoLogin=(data)=>{
    return async(dispatch)=>{

        try {
            console.log('AutoLogin')
            const profiledetail = await axios.get("/user/profile",LoadsCookie);
            dispatch(userDetail(profiledetail.data))
            console.log('AutoLogin work')
          

        } catch (error) {
            dispatch(notify.notify_error({msg:error.response.data}))
            console.log("wrond")
            
        }
    }
}

export const SendresetLink=(data)=>{
    return async(dispatch)=>{

        try {
            const profiledetail = await axios.post("/user/userforgotpass",data);
          dispatch(notify.notify_success({msg:"Check your mails"}))

        } catch (error) {
            dispatch(notify.notify_error({msg:error.response.data}))
            
        }
    }
}

export const Passwordreset=(data)=>{
    return async(dispatch)=>{

        try {
            const profiledetail = await axios.patch("/user/passwordforgotreset",data);
          dispatch(notify.notify_success({msg:"Welcome back"}))

        } catch (error) {
            dispatch(notify.notify_error({msg:error.response.data}))
            
        }
    }
}


