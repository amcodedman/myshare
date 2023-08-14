import React, { useEffect, useState,useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Search ,MenuButtonWide, List, XCircle} from "react-bootstrap-icons";
import { Avatar, IconButton } from "@mui/material";
import FOreignAds from "../reuseables";
import CatTemplete from "./categTemplete";
import { CheckProfile, Checkhover } from "./../utils/responsehover";
import { CheckTopAds } from "../utils/reuseable";
import ContentPreview from "./contentpreview";

import AdsFront from "./Adsfront";
import Testgood from "./HomeComment";
import CourseView from "./courseviewed";
import TopCate from "./topcates";
import { GeoDetail, GeoGet } from "../../store/actions/geod";
import { useDispatch, useSelector } from "react-redux";
import { GeoActiveD } from "../../store/actions/usercookie";
import LoaderView from "../utils/loaderView";
import ProfileNav from "../utils/ProfileBar";
import TopNav from "../utils/pagenav";
import AdsFrontf from "./adsfrontf";
import FreezePage from "./Pagefreeze";
import { getCourses, getCoursesP } from "../../store/actions/datacollection";
import MobileNav from "../utils/mobileNav";


const Home = () => {
  const dispatch = useDispatch();
  const courses = useSelector((value) => value.coursesl);
  const init_sort={ sortBy: '_id', order: 'desc', limit: 4, skip: 0}
  const [sort,Setsort] =useReducer((state, new_sort)=>({...state,new_sort}),init_sort)
  const Loadmore=() => {
    const Skip = sort.skip + sort.limit
    Setsort({skip: Skip})
    //dispatch(All_tickets({sort, skip: Skip}))
}




  useEffect(()=>{
    dispatch(
      getCourses()
    )
  },[dispatch])






  const [loading, setload] = useState(true);
  const Checkuser = useSelector((item) => item.authuser);
  const [holdp,setholdp]=useState(false)



  const [cat, setcat] = useState(false);
  const [alertProfile, setprofile] = useState(false);
  const [catsub, setsub] = useState(false);

  const location = useSelector((item) => item.geodetails);

  useEffect(() => {
    if (location) {
      if (location.GEOD !==null ) {
        if(courses){
          setload(false);
        }
    
      
       
      }
    }
  });

  

  useEffect(() => {
    // dispatch(GeoCookieT())
  }, []);

  useEffect(() => {
    //dispatch(GeoGet())
  }, []);

  useEffect(() => {
    Checkhover(setcat, setsub);
    
  });
  useEffect(() => {
    CheckProfile(setprofile);
  });

  useEffect(()=>{
    dispatch(GeoGet())
    },[])
  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");
  const [email, setemail] = useState("");
  useEffect(() => {
    if (Checkuser) {
    
      if (Checkuser.account) {
        setfn(Checkuser.account.firstname);
        setln(Checkuser.account.lastname);
        setemail(Checkuser.account.email)
       
      }
    }
  });

  const [topads, settopads] = useState(true);


  useEffect(()=>{
    if(location){
      if(location.GEOD){
        if(location.GEOD.country==="Ghana"){
         settopads(false)

        }
       
      }
      
    }
  }
   
  )
  const Route = useNavigate();
  return (
    <div className="MainContainer" >
   
      {loading ? (
        <LoaderView />
      ) : (
        
        <div
          className="mainLayout"
          style={{ minHeight: `${window.innerHeight}px` }}
        >



        { 
          holdp ?
          <FreezePage IP={`${location && location.GEOD ? location.GEOD.ipaddress :"" }`} country={`${location && location.GEOD ? location.GEOD.country:"" }`} />:null
        }
          <div className="maintop">
      <>{topads ? <FOreignAds settopads={settopads}/> :null}</>      
      <div className="desktopNav"><TopNav setprofile={setprofile} topads={topads}  fn={fn} ln={ln} email={email}/></div>
  
      <div className="mobiletopNav">    
  <MobileNav setprofile={setprofile} topads={topads}  fn={fn} ln={ln} email={email} /></div>
  

      
            {cat ? <CatTemplete catsub={catsub} /> : null}
            {topads ?
             <AdsFrontf/> : <AdsFront/>}

            
            <ContentPreview />
            <Testgood />
            <CourseView />
            <TopCate />
            {alertProfile ? <ProfileNav  fn={fn} ln={ln} email={email}/> : null}

       
          </div>
          <div
            className="frontpage"
            style={{ minHeight: `${window.innerHeight}px` }}
          >
            <p>Contributors</p>

            <div className="frontpage_c">
           
            </div>
          </div>
          <div className="footer">
            <div className="frontitemhover">
              <p>
                 Powered By Badu Technologies. All rights reserved
                <span style={{ color: "green" }}> @ </span> 2023
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
