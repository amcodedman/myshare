import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Search, XCircle } from "react-bootstrap-icons";
import { IconButton } from "@mui/material";
import FOreignAds from "../reuseables";
import CatTemplete from "./categTemplete";
import {Checkhover} from "./../utils/responsehover"
import { CheckTopAds } from "../utils/reuseable";
import ContentPreview from "./contentpreview";
import AdsFront from "./Adsfront";
import Testgood from "./HomeComment";
import CourseView from "./courseviewed";
import TopCate from "./topcates";
import { GeoGet } from "../../store/actions/geod";
import {useDispatch} from "react-redux"
import { GeoActiveD, GeoCookieT } from "../../store/actions/usercookie";

const Home = () => {
  const [cat, setcat] = useState(false);
  const [catsub, setsub] = useState(false);
  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(GeoActiveD())
  })
 

  useEffect(()=>{
  // dispatch(GeoCookieT())
  },[])

  useEffect(()=>{
    //dispatch(GeoGet())
  },[])


  useEffect(()=>{
  Checkhover(setcat,setsub)
  CheckTopAds(topads)
  })

  const [searchvalue, setSearchValue] = useState("");
  const handlesearchbox = (event) => {
    setSearchValue(event.target.value);
  };
  const [topads, settopads] = useState(true);
  const Route = useNavigate();
  return (
    <div
      className="mainLayout"
      style={{ minHeight: `${window.innerHeight}px` }}
    >
      <div className="maintop">
        {topads ? <FOreignAds settopads={settopads} /> : null}

        <div className="navbar">
          <div className="navcontainer">
            <span className="sitename">
              <p>MyShare</p>
            </span>
          </div>
          <div className="searchspace">
            {" "}
            <span id="catbtnid" className="categorybtn">Categories</span>{" "}
            <input
              type="text"
              className="searchbox"
              id="searchid"
              name="search"
              onChange={handlesearchbox}
              value={searchvalue}
            />
            {searchvalue !== "" ? (
              <span className="searchbutton">
                <IconButton onClick={() => console.log(searchvalue)}>
                  <Search size={15} />
                </IconButton>{" "}
              </span>
            ) : null}
          </div>

          <div className="navcontainerlog">
            <span className="tutorbutton">Be A Tutor</span>
            <div className="userlog">
              <div className="signup">
                {" "}
                <span onClick={() => Route("/user/Signup")}>Join Now</span>
              </div>
              <div className="logincss">
                {" "}
                <span
                 onClick={()=>Route("/user/login")}>Login</span>
              </div>
            </div>
          </div>
        </div>
        {cat ?  <CatTemplete catsub={catsub}/> : null}
      
<AdsFront/> 
      <ContentPreview/>
      <Testgood/>
      <CourseView/>
      <TopCate/>
        <div
          className="homeContent"
          style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2018/04/16/05/32/technology-3323683_1280.jpg')`,
          }}
        >
          <div className="hcontent_l">
            <p>
              Hi there, Join the Content sharing Revolution Powered By Secure
              access
            </p>
            <div className="hcontent_l_intro">
              <span>
                Introducing the dawn of a revolutionary era in content sharing!
                Unlock the power of secure access and embark on a journey that
                will redefine the way you connect, collaborate, and explore.
                Join our vibrant community and be part of a digital revolution
                that ensures your privacy and protection are paramount. With
                cutting-edge technology and a seamless user experience, our
                platform invites you to discover a world where sharing
                knowledge, creativity, and ideas knows no boundaries. It's time
                to elevate your content sharing game and embrace the future.
                Register now and experience the thrill of secure access like
                never before!
              </span>
              <span className="membershipbtn">Join Our membership</span>
            </div>
          </div>
          <div className="hcontent_r">
            <div className="lform"></div>
            <div className="rform">
              <p>Share</p>
              <span className="uploadicon">Upload</span>
              <div className="uploadspace">
                <span>Choose a file</span>
                <span>*Required </span>
              </div>
              <div>
                <div className="progressicon">
                  <p>
                    <span className="percenticon">20%</span>
                    progress
                  </p>
                  <div className="progressbar">
                    <div className="fillprogress">dawn</div>
                  </div>
                  <span className="pause">Pause</span>
                </div>
                <div className="userDet">
                  <p>
                    <span>User ID</span> :1293**************
                  </p>
                </div>

                <div>
                  <span className="Lock">
                    {" "}
                    <Lock /> Submit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="frontpage"
        style={{ minHeight: `${window.innerHeight}px` }}
      >
        <p>Joint Use lets Drop It , Download and Share It...</p>

        <div className="frontpage_c">
          <div
            className="frontitem"
            style={{
              backgroundImage: `url('https://www.pngall.com/wp-content/uploads/4/Digital-Cyber-Security.png')`,
            }}
          >
            <div className="frontitemhover">
              <p>Secure access</p>
            </div>
          </div>
          <div
            className="frontitem"
            style={{
              backgroundImage: `url('https://img.freepik.com/premium-photo/shopping-price-tag-free_165073-954.jpg?w=740')`,
            }}
          >
            <div className="frontitemhover">
              <p>Fress Trial</p>
            </div>
          </div>
          <div
            className="frontitem"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg?w=740&t=st=1685300127~exp=1685300727~hmac=9f0e56779a5e67b2230060baba91a15e7f83647b5191a83806dc8ca615b57553')`,
            }}
          >
            <div className="frontitemhover">
              <p>24 Hours full support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="frontitemhover">
          <p>
            Powered By Cybertec Inc<span style={{ color: "green" }}> @ </span>{" "}
            2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
