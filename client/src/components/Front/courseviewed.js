import React from "react";
import { StarFill, StarHalf } from "react-bootstrap-icons";

const CourseView = () => {
  return (
    <div className="CourseView">
      <h1>How learners like you are achieving their goals</h1>
      <div className="layouttest">
      <div className="coursepreCstylef layoutspac">
          <div className="coursepreCbox"></div>
          <p>Automate the Boring Stuff with Python Programming</p>
          <p className="prevAuthor">
            {" "}
            <span>Author </span>Man coded
          </p>
          <div className="coursevrate">
            <span>4.6</span>
            <span className="starrate">
              <StarFill color=" rgb(153, 153, 0)" size={10} />
              <StarFill color=" rgb(153, 153, 0)" size={10} />
              <StarHalf color=" rgb(153, 153, 0)" size={10} />
            </span>
            <span>(1000)</span>
          </div>
          <div className="enrollnow">
            <span className="enrollbtn">Enroll Now</span>
             
          </div>
        </div>
        <div className="coursepreCstylef layoutspac">
          <div className="coursepreCbox"></div>
          <p>Automate the Boring Stuff with Python Programming</p>
          <p className="prevAuthor">
            {" "}
            <span>Author </span>Man coded
          </p>
          <div className="coursevrate">
            <span>4.6</span>
            <span className="starrate">
              <StarFill color=" rgb(153, 153, 0)" size={10} />
              <StarFill color=" rgb(153, 153, 0)" size={10} />
              <StarHalf color=" rgb(153, 153, 0)" size={10} />
            </span>
            <span>(1000)</span>
          </div>
          <div className="enrollnow">
            <span className="enrollbtn">Enroll Now</span>
            <span>GH₵ 500</span>
            <s className="oldprice">GH₵ 700</s>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
