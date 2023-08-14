
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
import FreezePage from "./components/Front/Pagefreeze";
import Authcontainer from "./Authcontainer";
import MyPanel from "./components/backend/mainpanel";
import CreateSections from "./components/utils/createsection";
import Mycourses from "./components/backend/mycourses";
import CourseDetail from "./components/backend/viewDetailCourse";
import ControlVersion from "./components/backend/controlversion";
import CouponPage from "./components/backend/couponGen";
import CourseSearch from "./components/Front/coursearch";
import SubCategories from "./components/Front/subcatesearch";
import CourseStudy from "./components/Front/studycourse";
import Searchresult from "./components/Front/resultsearch";

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
element={ <Authcontainer><Home/></Authcontainer>}/> 
<Route
  path="/user/Signup"
  element={ <Authcontainer> <MyForm/></Authcontainer> }
  
/>

<Route path="/user/login"  element={  <Authcontainer><Login/> </Authcontainer>}/>
<Route path="/account/verification" element={ <Authcontainer><ConfirmAccount/> </Authcontainer>}/>
<Route path="/account/passwordreset" element={<Authcontainer><Resetpasspage/> </Authcontainer>}/>
<Route path="user/login/forgottenpassword" element={ <Authcontainer><Forgotpass/>  </Authcontainer>}></Route>
<Route path="user" element={     <Authcontainer><UserProfile/>   </Authcontainer>    }></Route>
<Route path="/user/myaccount/accountsettings" element={           <Authcontainer><UserSec/>  </Authcontainer>   }></Route>
<Route path="/user/myaccount/notifications" element={      <Authcontainer><UserNotification/> </Authcontainer>   }></Route>
<Route path="/user/myaccount/cart" element={        <Authcontainer><MyCart/>  </Authcontainer>   }></Route>
<Route path="/freeze" element={   <FreezePage/> }></Route>
<Route path="/mainadmin/dashboard" element={   <MyPanel/> }></Route>
<Route path="/dash" element={   <CreateSections/> }></Route>
<Route  path="/mainadmin/creatorcourses" element={<Authcontainer><Mycourses/></Authcontainer>}></Route>
<Route  path="/courses/search/:searchspace" element={<Authcontainer><Searchresult/></Authcontainer>}></Route>
<Route  path="/mainadmin/singlecourse/:id" element={<Authcontainer><CourseDetail/></Authcontainer>}></Route>
<Route  path="/courses/category/:getcategory" element={<Authcontainer><CourseSearch/></Authcontainer>}></Route>
<Route  path="/courses/category/:getcategory/:getsubcat" element={<Authcontainer><SubCategories/></Authcontainer>}></Route>
<Route  path="/studycommunity/course/:getcategory/:coursename/:courseid" element={<Authcontainer><CourseStudy/></Authcontainer>}></Route>
<Route  path="/mainadmin/controlversion" element={<ControlVersion/>}></Route>
<Route  path="/mainadim/generatetokens" element={<CouponPage/>}></Route>
</Routes>
<ToastContainer/>
   </BrowserRouter>
  );
}

export default App;
