import React, { useEffect } from "react";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../store/actions/datacollection";

const ContentPreview = () => {
  const courses = useSelector((value) => value.coursesl);

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
            <span>Python</span>
            <span>Business</span>
            <span>Data Science</span>
          </div>

          <div className="coursepreviewmain">
            <h1>Expand your career opportunities in Programming</h1>
            <p>
              Take one of Udemy’s range of Python courses and learn how to code
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
        </div>
      </div>
    </div>
  );
};

export default ContentPreview;
