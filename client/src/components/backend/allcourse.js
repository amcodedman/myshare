import React, { useEffect, useState } from "react";
import { RawToHtml } from "../utils/rawtohtml";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { DeleteCourse, getCourses } from "../../store/actions/datacollection";
import { PushSpinner } from "react-spinners-kit";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

const Allcourss = () => {
  useEffect(()=>{
    AOS.init();
  },[])
 
  const navigate=useNavigate();
  const courses = useSelector((value) => value.coursesl);

  const [loadingbtn, setloadbtn] = useState(false);
  const notifications = useSelector((value) => value.notification);
  useEffect(() => {
    if (notifications && notifications.notice) {
      setloadbtn(false);
    }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [loadingbtn]);

  return (
    <div
      className="profile_box_m_admin"
      style={{ minHeight: `${window.innerHeight}px` }}
    >
      <div className="profile_header">
        <h1>All Course</h1>
      </div>
      {courses && courses.Allcourse ? (
        courses.Allcourse.map((data, index) => {
          return (
            <div className=" courselabel" key={index} data-aos="fade-up">
            <p>No {index+1}</p>
              <div className="coursecontrol">
                <h1>{data.title}</h1>{" "}
                <div className="btnss">
                 

                  {loadingbtn ? (

                <PushSpinner size={8} />
                   
                  ) : (
                    <span
                      className="btnlabel"
                      onClick={() => {
                        dispatch(DeleteCourse(data._id));

                        setloadbtn(true);
                        dispatch(getCourses());
                      }}
                    >
                      Delete Course
                    </span>
                  )}


                  <span className="btnlabel"
                  onClick={()=>{
                    navigate(`/mainadmin/singlecourse/${data._id}`)
                  }}
                  >Show Details</span>
                </div>{" "}
              </div>

              <p>
                <span className="plabel"> Main Category </span> :{" "}
                {data.maincategory}
              </p>

             
              <p>
                {" "}
                <span className="plabel">Course Price</span>: GH₵ {data.price}
              </p>
           

          
              <div>
                <h3>About course</h3>
                <p>{data.abstract}</p>
              </div>

       
             
            </div>
          );
        })
      ) : (
        <div>
          <p>No courses</p>
        </div>
      )}
    </div>
  );
};
export default Allcourss;
