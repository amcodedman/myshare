import { Avatar } from "@mui/material";
import React ,{ useEffect} from "react";
import { CheckHover } from "../utils/reuseable";
import { useNavigate } from "react-router-dom";

const TopCate = () => {
  useEffect(()=>{
    CheckHover("topcatlayout")
  })
  const navigateTo=useNavigate();
  return (
    <div className="topcate">
      <h1>Top categories</h1>
      <div className="topcatebox">
        <div
          className="topcatlayout"
          
          onClick={()=>{

                


navigateTo(`/courses/category/Business`)
                  }}
          style={{
            backgroundImage: `url('https://myportfoliocontent.s3.eu-north-1.amazonaws.com/ControllerImg/business.png47090.3282142807')`,
          }}
        >
          <div className="catebtn" 
          ><p className="topcat_pi">Business</p></div>
        </div>

        <div
          className="topcatlayout"
          onClick={()=>{

                


navigateTo(`/courses/category/Programming`)
                  }}
          style={{
            backgroundImage: `url('https://myportfoliocontent.s3.eu-north-1.amazonaws.com/ControllerImg/programming.png52451.09205561433')`,
          }}
        >
          <div className="catebtn"><p className="topcat_pi">Programming</p></div>
        </div>

        <div
          className="topcatlayout"
          onClick={()=>{

                


navigateTo(`/courses/category/Data Science`)
                  }}
          style={{
            backgroundImage: `url('https://myportfoliocontent.s3.eu-north-1.amazonaws.com/ControllerImg/data+center+picture.png89268.20860813982')`,
          }}
        >
          <div className="catebtn"><p className="topcat_pi">Data Science</p></div>
        </div>


     


      </div>
    </div>
  );
};

export default TopCate;
