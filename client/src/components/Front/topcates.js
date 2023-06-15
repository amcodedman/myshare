import { Avatar } from "@mui/material";
import React ,{ useEffect} from "react";
import { CheckHover } from "../utils/reuseable";

const TopCate = () => {
  useEffect(()=>{
    CheckHover("topcatlayout")
  })
 
  return (
    <div className="topcate">
      <h1>Top categories</h1>
      <div className="topcatebox">
        <div
          className="topcatlayout"
          style={{
            backgroundImage: `url('https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg')`,
          }}
        >
          <div className="catebtn"><p className="topcat_pi">Business man</p></div>
        </div>

        <div
          className="topcatlayout"
          style={{
            backgroundImage: `url('https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg')`,
          }}
        >
          <div className="catebtn"><p className="topcat_pi">Business man</p></div>
        </div>

        <div
          className="topcatlayout"
          style={{
            backgroundImage: `url('https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg')`,
          }}
        >
          <div className="catebtn"><p className="topcat_pi">Business man</p></div>
        </div>


     


      </div>
    </div>
  );
};

export default TopCate;
