import React, { useEffect, useState } from "react";
import TopNav from "../utils/pagenav";
import ProfileNav from "../utils/ProfileBar";
import LoaderView from "../utils/loaderView";
import { useDispatch, useSelector } from "react-redux";

import { Checkhover } from "../utils/responsehover";
import { Avatar, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PushSpinner } from "react-spinners-kit";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CheckTopp } from "../utils/reuseable";
import { updateAccount } from "../../store/actions/adminActions";
import CatTemplete from "../Front/categTemplete";
import AddCourse from "./AddCourse";
import { getCourses } from "../../store/actions/datacollection";
import Mycontrolspage from "./mycontrols";

const ControlVersion= () => {
  const dispatch = useDispatch();
  const Checkuser = useSelector((item) => item.authuser);
  const navigate = useNavigate();
  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");

 

  useEffect(()=>{
    dispatch(getCourses);
    
    
        },)
  const notifications = useSelector((value) => value.notification);
  useEffect(() => {
    if (notifications && notifications.notice) {
      setloadbtn(false);
    }
  });
  useEffect(() => {
    CheckTopp();
  });
 
  const [loading, setload] = useState(true);
  const [loadingbtn, setloadbtn] = useState(false);

  const [alertProfile, setprofile] = useState(false);
  const [cat, setcat] = useState(false);
  const [catsub, setsub] = useState(false);
  useEffect(() => {
    if (Checkuser) {
      if (Checkuser.auth !== null) {
        if (!Checkuser.auth) {
          navigate("/");
        }
        setload(false);
      }
    }
  }, [Checkuser]);
  useEffect(() => {
    Checkhover(setcat, setsub);
  });

  return (
    <>
      {" "}
      {loading ? (
        <LoaderView />
      ) : (
        <>
      
          {alertProfile ? <ProfileNav fn={fn} ln={ln} email={"email"}/> : null}
          <div
            className="profilecontainer"
            style={{ minHeight: `${window.innerHeight}px` }}
          >
            <div>
          
            </div>
            <div className="box_layout">
              <div className="admin_box">
              <div className="profile_b_navadminmain">

           
                <div className="profile_b_navadmin">
                  <div className="profile_rev">
                    <Avatar
                      style={{
                        width: "70px",
                        height: "70px",
                        paddingBottom: "5px",
                      }}
                    />
                      <p>{fn} {ln}</p>
                  </div>
                  <div className="profile_cont">
                    <span
                      className="p_span"
                      onClick={() => navigate("/mainadmin/dashboard")}
                    
                     
                    >
                      Create Course
                    </span>


                    
                    <span

                      className="p_span"
                      onClick={() => navigate("/mainadmin/controlversion")}
                      style={{ backgroundColor: "rgb(133, 127, 127)" }}
                    >
                      Access Control Management
                    </span>
                    <span
                   className="p_span"
                      onClick={() => navigate("/mainadmin/creatorcourses")}
                    >
                      All Courses
                    </span>
                    <span className="p_span">Accounts</span>
                 
                    <span className="p_span">Sign out</span>
                    <span className="p_span"   onClick={() => navigate("/user/myaccount/cart")}>Coupon Generation</span>
                  </div>
                </div>
                </div>

             <Mycontrolspage/> 
            
           </div>
              </div>
            </div>

            <div className="footer">
              <div className="frontitemhover">
                <p>
                  Powered By Cybertec Inc
                  <span style={{ color: "green" }}> @ </span> 2023
                </p>
              </div>
            </div>
      
        </>
      )}
    </>
  );
};

export default ControlVersion;
