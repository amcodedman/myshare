
import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import {BrowserRouter,Routes,Route} from "react-router-dom"
import {ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import MyForm from "./components/Front/RegistrationForm";

import Home from './components/Front/home';

import { showToastify } from "./components/utils/reuseable";
import { ClearNotify } from "./store/actions/notification";
import  "./components/style/custome.css"


import Login from "./components/Front/login";

import Resetpasspage from "./components/Front/resetpassword";
import ConfirmAccount from "./components/Front/confirmAccount";
import Forgotpass from "./components/Front/forgotpassword";
import { AutoLogin } from "./store/actions/adminActions";
import UserProfile from "./components/Front/userProfile";
import UserSec from "./components/Front/userSecurity";
import UserNotification from "./components/Front/mynotification";
import MyCart from "./components/Front/mycart";

function App() {
  const notifications =useSelector((value)=>value.notification);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(AutoLogin());
  },[])
  useEffect(()=>{
  
if(notifications && notifications.notice){
  if(notifications.success){
    showToastify("SUCCESS", notifications.notice.msg)
    dispatch(ClearNotify());
 
  
  }
  if(notifications.success===false){
    showToastify("ERROR", notifications.notice.msg)
dispatch(ClearNotify());
 
  
  }
  window.scrollTo(0,0);
}
  });
 
  return (
   <BrowserRouter>
<Routes>
<Route path='/' 
element={<Home/>}/> 
<Route
  path="/user/Signup"
  element={<MyForm/>}
  
/>
<Route path="/user/login"  element={<Login/>}/>
<Route path="/account/verification" element={<ConfirmAccount/>}/>
<Route path="/account/passwordreset" element={<Resetpasspage/>}/>
<Route path="user/login/forgottenpassword" element={<Forgotpass/>}></Route>
<Route path="user" element={<UserProfile/>}></Route>
<Route path="/user/myaccount/accountsettings" element={<UserSec/>}></Route>
<Route path="/user/myaccount/notifications" element={<UserNotification/>}></Route>
<Route path="/user/myaccount/cart" element={<MyCart/>}></Route>
</Routes>
<ToastContainer/>
   </BrowserRouter>
  );
}

export default App;
