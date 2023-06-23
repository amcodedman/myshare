import React, { useState } from "react";

import { ChevronCompactRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const ProfileNav = (props) => {
  const navigate=useNavigate();
  return (
    <div
      id="maincatloyout"
      className="profile_layout"
      style={{ minHeight: `${window.innerHeight}px` }}
    >
      <div  className="leftlayout_p ProfileHover profile_out"></div>

      <div className="rightlayout_p ProfileHover">
        <div className="profileArrow">
          <span className="triangle"></span>
        </div>
        <div className="profile_content">
          <div className="profile_name">
            <div className="uavatar" onClick={()=>navigate("/user")}>
              <p className="presshoverAv">{(props.fn).charAt(0)}{(props.ln).charAt(0)}</p>
            </div>
            <div className="profiledetails">
              <h1 >{props.fn} {props.ln}</h1>
              <p>{props.email}</p>
            </div>
          </div>
          <div className="profilelist">
            <p className="presshover_p">My Wishlists</p>
            <p className="presshover_p">My Cart</p>
          </div>
          <div className="myaccount">
            <p className="presshover_p"> My Account</p>
            <p className="presshover_p"> My Notifications</p>
            <p className="presshover_p"> My Following</p>
            <p className="presshover_p"> My Purchases</p>
          </div>
          <div className="myaccount_signout">
            <span className="presshover_p">Sign out</span>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
