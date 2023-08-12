import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckProfile } from "./responsehover";
import { CheckTopAds } from "./reuseable";

const TopNav = (props) => {
  const navigateTo = useNavigate();
  const [searchvalue, setSearchValue] = useState("");
  const Checkuser = useSelector((item) => item.authuser);
  useEffect(() => {
    CheckProfile(props.setprofile);
  });
  useEffect(() => {
    CheckTopAds(props.topads);
  });
  const Route = useNavigate();
  const handlesearchbox = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="navbar">
      <div className="navcontainer">
        <span className="sitename">
          <div className="companyname"
          onClick={()=>navigateTo("/")}
          >
            {" "}
            <img
              style={{ width: "60px", height: "60px" }}
              alt=""
              src="https://myportfoliocontent.s3.eu-north-1.amazonaws.com/ControllerImg/myshare.png31468.422511441375"
            />{" "}
            <p >MyShare</p>
          </div>
        </span>
      </div>
      <div className="searchspace">
        {" "}
        <span id="catbtnid" className="categorybtn">
          Categories
        </span>{" "}
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
      {}

      <div className="navcontainerlog">
        <span className="tutorbutton">Be A Tutor</span>
        {Checkuser && Checkuser.auth ? (
          <>
            <div className="plain_space profile_out"></div>
            <div className="uavatar userAvatar" onClick={() => Route("/user")}>
              <p className="presshoverAv">
                {props.fn.charAt(0)}
                {props.ln.charAt(0)}
              </p>
            </div>
          </>
        ) : (
          <div className="userlog">
            <div className="signup">
              {" "}
              <span onClick={() => Route("/user/Signup")}>Join Now</span>
            </div>
            <div className="logincss">
              {" "}
              <span onClick={() => Route("/user/login")}>Login</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
