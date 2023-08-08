import React, { useEffect, useState } from "react";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../store/actions/datacollection";

const ContentPreview = () => {
  const courses = useSelector((value) => value.coursesl);
const [coursetype,setcoursetype]=useState("Programming");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  });

  return (  
    <div
      className="homepreview"
      style={{ minHeight: `${window.innerHeight}px` }}
    >
      <h1>You need quality contents to double up on your studies ?</h1>
      <p>Be part of our top learners who have taken these courses</p>
      <div className="coursepreview">
        <div className="coursepreviewlayout">
          <div className="coursepreviewnav">
          {

coursetype==="Programming" ?
<span style={{color:" rgb(9, 1, 31)", fontWeight:"bold"}}
            onClick={()=>{
              setcoursetype("Programming")
            }}>Programming</span>
:

       <span 
            onClick={()=>{
              setcoursetype("Programming")
            }}>Programming</span>  
          }
         
          {

coursetype==="Business" ?
<span style={{color:" rgb(9, 1, 31)", fontWeight:"bold"}}
            onClick={()=>{
              setcoursetype("Business")
            }}>Business</span>
:

       <span 
            onClick={()=>{
              setcoursetype("Business")
            }}>Business</span>  
          }


          {

coursetype==="Data Science" ?
<span style={{color:" rgb(9, 1, 31)", fontWeight:"bold"}}
            onClick={()=>{
              setcoursetype("Data Science")
            }}>Data Science</span>
:

       <span 
            onClick={()=>{
              setcoursetype("Data Science")
            }}>Data Science</span>  
          }
          </div>


            <>
            {

coursetype==="Programming" ?
<div className="coursepreviewmain">
            <h1>Expand your career opportunities in Programming</h1>
            <p>
              Take one of Myshare’s range of Python courses and learn how to code
              using this incredibly useful language. Its simple syntax and
              readability makes Python perfect for Flask, Django, data science,
              and machine learning. You’ll learn how to build everything from
              games to sites to apps.
            </p>

            <span className="coursepreviewmainbtn">Checkout Python</span>

            <div className="coursepreC">
            <div className="layouttest">
              {courses && courses.Allcourse
                ? courses.Allcourse.filter(
                    (data) => data.maincategory ==="Programming"
                  ).map((value, index) => {
                    return (
                      <div className="coursepreCstylef layoutspac">
                      <div  style={{
              backgroundImage: `url('${value.file}')`,
            }}
         className="coursepreCbox"></div>
               <p>{value.title}</p>
              <p className="prevAuthor">
                {" "}
                <span>Author </span>Man coded
              </p>
              <div className="courserate">
                <span>{value.rating}</span>
                <span className="starrate">
                  <StarFill color=" rgb(153, 153, 0)" size={10} />
                  <StarFill color=" rgb(153, 153, 0)" size={10} />
                  <StarFill color=" rgb(153, 153, 0.5)" size={10} />
                </span>
                <span>(1000)</span>
              </div>
                      </div>
                    );
                  })
                : null}
            
            </div>
          </div>
</div>


:null
}
    
            </>
            <>
            {

coursetype==="Business" ?
<div className="coursepreviewmain">
            <h1>Expand your career opportunities in Business world</h1>
            <p>
            Enhance your career opportunities in the business world by 
            enrolling in one of Myshare's range of business courses.
             These courses are designed to equip you with valuable skills 
             and knowledge needed to thrive in the dynamic corporate landscape.
            </p>

            <span className="coursepreviewmainbtn">Checkout Python</span>
<div className="coursepreC">
            <div className="layouttest">
              {courses && courses.Allcourse
                ? courses.Allcourse.filter(
                    (data) => data.maincategory ==="Business"
                  ).map((value, index) => {
                    return (
                      <div className="coursepreCstylef layoutspac">
                      <div  style={{
              backgroundImage: `url('${value.file}')`,
            }}
         className="coursepreCbox"></div>
               <p>{value.title}</p>
              <p className="prevAuthor">
                {" "}
                <span>Author </span>Man coded
              </p>
              <div className="courserate">
                <span>{value.rating}</span>
                <span className="starrate">
                  <StarFill color=" rgb(153, 153, 0)" size={10} />
                  <StarFill color=" rgb(153, 153, 0)" size={10} />
                  <StarFill color=" rgb(153, 153, 0.5)" size={10} />
                </span>
                <span>(1000)</span>
              </div>
                      </div>
                    );
                  })
                : null}
            
            </div>
          </div>
          </div>

:null
}
    
            </>
            <>
            {

coursetype==="Data Science" ?
<div className="coursepreviewmain">
            <h1>Expand your career horizons in the field of data science</h1>
            <p>
            Through these data science courses, you will learn how to leverage data to make 
            informed business decisions, extract valuable insights, and solve complex problems
             across various industries. Gain hands-on experience with popular data science tools
              and programming languages like Python and R, and learn
             how to work with large datasets and employ cutting-edge techniques to drive data-driven innovation.
            </p>

            <span className="coursepreviewmainbtn">Checkout Python</span>
<div className="coursepreC">

            <div className="layouttest">
              {courses && courses.Allcourse
                ? courses.Allcourse.filter(
                    (data) => data.maincategory ==="Data Science"
                  ).map((value, index) => {
                    return (
                      <div className="coursepreCstylef layoutspac">
                      <div  style={{
              backgroundImage: `url('${value.file}')`,
            }}
         className="coursepreCbox"></div>
               <p>{value.title}</p>
              <p className="prevAuthor">
                {" "}
                <span>Author </span>Man coded
              </p>
              <div className="courserate">
                <span>{value.rating}</span>
                <span className="starrate">
                  <StarFill color=" rgb(153, 153, 0)" size={10} />
                  <StarFill color=" rgb(153, 153, 0)" size={10} />
                  <StarFill color=" rgb(153, 153, 0.5)" size={10} />
                </span>
                <span>(1000)</span>
              </div>
                      </div>
                    );
                  })
                : null}
            
            </div>
          </div>
          </div>

:null
}
    
            </>

        


      
        </div>
      </div>
    </div>
  );
};

export default ContentPreview;
