import React, { useEffect, useState } from "react";
import TopNav from "../utils/pagenav";
import ProfileNav from "../utils/ProfileBar";
import LoaderView from "../utils/loaderView";
import { useDispatch, useSelector } from "react-redux";
import CatTemplete from "./categTemplete";
import { Checkhover } from "../utils/responsehover";
import { Avatar, IconButton, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PushSpinner } from "react-spinners-kit";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CheckTopp } from "../utils/reuseable";
import { updateAccount } from "../../store/actions/adminActions";
import MobileNav from "../utils/mobileNav";
import { List, XLg } from "react-bootstrap-icons";
import { getCourses } from "../../store/actions/datacollection";

const UserProfile = () => {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(
      getCourses()
    )
  },[dispatch])


  const Checkuser = useSelector((item) => item.authuser);
  const navigate = useNavigate();
  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");
  const [ph, setph] = useState("");
  const [exp, setexp] = useState("");
  const [img, setimg] = useState("");
  const [addres, setaddres] = useState("");
  const [agg, setagg] = useState("");
  const [myid, setmyid] = useState("");
  const [email, setemail] = useState("");
  useEffect(() => {
    if (Checkuser) {
      console.log({ name: fn });
      if (Checkuser.account) {
        setfn(Checkuser.account.firstname);
        setln(Checkuser.account.lastname);
        setemail(Checkuser.account.email)
        setph(Checkuser.account.phone);
        setexp(Checkuser.account.ex_phone);
        setimg(Checkuser.account.photo);
        setaddres(Checkuser.account.address);
        setagg(Checkuser.account.age);
        setmyid(Checkuser.account._id);
      }
    }
  });
  const notifications = useSelector((value) => value.notification);
  useEffect(() => {
    if (notifications && notifications.notice) {
      setloadbtn(false);
    }
  });
  useEffect(() => {
    CheckTopp();
  });
  const Formik = useFormik({
    initialValues: {
      firstname: `${fn !== null ? fn : ""}`,
      lastname: `${ln !== null ? ln : ""}`,
      phone: `${ph !== null ? ph : ""}`,
      ex_phone: `${exp !== null ? exp : ""}`,
      photo: `${img !== null ? img : ""}`,
      address: `${addres !== null ? addres : ""}`,
      age: `${agg !== null ? agg : ""}`,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      firstname: Yup.string().required("field required"),
      lastname: Yup.string().required("field required"),
    }),
    onSubmit: (value) => {
      setloadbtn(true);
      dispatch(updateAccount(value, myid));
      console.log(myid);
    },
  });

  const [loading, setload] = useState(true);
  const [loadingbtn, setloadbtn] = useState(false);
  const location = useSelector((item) => item.geodetails);
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
  const [showmennu, setmenu] = useState(false);
  return (
    <>
      {" "}
      {loading ? (
        <LoaderView />
      ) : (
        <>
        {
      showmennu ?
      <div
        className="mainmenu"
        style={{ minHeight: `${window.innerHeight + 100}px` ,width:`${window.innerWidth}px`}}
      >
        <div
          className="menu_left"
          style={{ minHeight: `${window.innerHeight }px` }}
        >
           <div className="profile_cont">
                    <span
                      className="p_span"
                     
                      style={{ backgroundColor: "rgb(133, 127, 127)" }}
                    >
                      Profile
                    </span>
                    <span
                      className="p_span"
                      onClick={() => navigate("/user/myaccount/accountsettings")}
                    >
                      Account Settings
                    </span>
                    <span
                      className="p_span"
                      onClick={() => navigate("/user/myaccount/notifications")}
                    >
                      My Notifications
                    </span>
                   
                    {
                      location &&   location.GEOD.blockrate >0 ? 
                  
                      <>
                      <span className="p_span">My Following</span>
                      <span className="p_span" >My Purchases</span>
                    <span className="p_span">My Wishlist</span>
                    <span className="p_span"   onClick={() => navigate("/user/myaccount/cart")}>My Cart</span>

                      </>
:null
                      
                    }
                    
                  </div>
   
         
      
        </div>
        <div
          className="menu_right"
          style={{ minHeight: `${window.innerHeight }px` }}
        >
     
            <span  className="menu_right_span"><IconButton
            onClick={()=>{
              setmenu(false)
            
            }}><XLg color="white" size={25}/> </IconButton></span>
        </div>
      </div> 
      :null
    }








          {cat ? <CatTemplete catsub={catsub} /> : null}
          {alertProfile ? <ProfileNav fn={fn} ln={ln} email={email}/> : null}
          <div
            className="profilecontainer"
            style={{ minHeight: `${window.innerHeight}px` }}
          >
          <div className="desktopNav">
              <TopNav setprofile={setprofile} fn={fn} ln={ln} email={email}/>
            </div>
            <div className="mobiletopNav">    
  <MobileNav   setprofile={setprofile} fn={fn} ln={ln} email={email} /></div>
  
            <div className="box_layout">
            <div className="mobiletopNav"><IconButton  
            onClick={()=>setmenu(true)}
             >
                <List color="black" size={30}/> 
                </IconButton> 
                </div>
              <div className="profile_box">
                <div className="profile_b_nav">
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
                     
                      style={{ backgroundColor: "rgb(133, 127, 127)" }}
                    >
                      Profile
                    </span>
                    <span
                      className="p_span"
                      onClick={() => navigate("/user/myaccount/accountsettings")}
                    >
                      Account Settings
                    </span>
                    <span
                      className="p_span"
                      onClick={() => navigate("/user/myaccount/notifications")}
                    >
                      My Notifications
                    </span>
                   
                    {
                      location &&   location.GEOD.blockrate >0 ? 
                  
                      <>
                      <span className="p_span">My Following</span>
                      <span className="p_span" >My Purchases</span>
                    <span className="p_span">My Wishlist</span>
                    <span className="p_span"   onClick={() => navigate("/user/myaccount/cart")}>My Cart</span>

                      </>
:null
                      
                    }
                    
                  </div>
                </div>

                <div className="profile_box_m">
                  <div className="profile_header">
                    <h1>Profile</h1>
                    <p>Modify your information</p>
                  </div>
                  <div className="update_form">
                    <form onSubmit={Formik.handleSubmit} className="myform">
                      <TextField
                      className="textfields"
                        style={{ margin: "10px 10px 10px 0", color: "red" }}
                        name="firstname"  
                        label="firstname"
                        {...Formik.getFieldHelpers("firstname")}
                        value={Formik.values.firstname}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        error={
                          Formik.touched.firstname &&
                          Boolean(Formik.errors.firstname)
                        }
                        helperText={
                          Formik.touched.firstname && Formik.errors.firstname
                        }
                      ></TextField>

                      <TextField
                      className="textfields"
                      
                        style={{ margin: "10px 10px 10px 0" }}
                        name="lastname"
                        value={Formik.values.lastname}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        error={
                          Formik.touched.lastname &&
                          Boolean(Formik.errors.lastname)
                        }
                        helperText={
                          Formik.touched.lastname && Formik.errors.lastname
                        }
                        {...Formik.getFieldHelpers("lastname")}
                        label="Lastname"
                      ></TextField>
                      <TextField
                      className="textfields"
                        style={{ margin: "10px 10px 10px 0" }}
                        name="phone"
                        value={Formik.values.phone}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        error={
                          Formik.touched.phone && Boolean(Formik.errors.phone)
                        }
                        helperText={Formik.touched.phone && Formik.errors.phone}
                        {...Formik.getFieldHelpers("phone")}
                        label="Phone Number"
                      ></TextField>
                      <TextField
                      className="textfields"
                    
                        style={{ margin: "10px 10px 10px 0" }}
                        name="ex_phone"
                        value={Formik.values.ex_phone}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        error={
                          Formik.touched.ex_phone &&
                          Boolean(Formik.errors.ex_phone)
                        }
                        helperText={
                          Formik.touched.ex_phone && Formik.errors.ex_phone
                        }
                        {...Formik.getFieldHelpers("ex_phone")}
                        label="Extra Line"
                      ></TextField>

                      <TextField
                    
                      className="textfields"
                        style={{ margin: "10px 10px 10px 0" }}
                        name="photo"
                        value={Formik.values.photo}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        error={
                          Formik.touched.photo && Boolean(Formik.errors.photo)
                        }
                        helperText={Formik.touched.photo && Formik.errors.photo}
                        {...Formik.getFieldHelpers("photo")}
                        label="Photo url"
                      ></TextField>

                      <TextField
                      className="textfields"
                      
                        style={{ margin: "10px 10px 10px 0" }}
                        name="address"
                        value={Formik.values.address}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        {...Formik.getFieldHelpers("address")}
                        label="My address"
                      ></TextField>
                      <TextField
                      className="textfields"
                        style={{ margin: "10px 10px 10px 0" }}
                        name="age"
                        value={Formik.values.age}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        {...Formik.getFieldHelpers("age")}
                        label="My age"
                      ></TextField>

                      <div></div>

                      {loadingbtn ? (
                        <div
                          style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "5px",
                          }}
                        >
                          <PushSpinner color="aqua" size={17} />
                        </div>
                      ) : (
                        <Button
                          type="submit"
                          style={{
                            marginBottom: "50px",
                            width: "25%",
                            minWidth: "98%",
                          }}
                        >
                          Update Details
                        </Button>
                      )}
                    </form>
                  </div>
                </div>
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
        </>
      )}
    </>
  );
};

export default UserProfile;
