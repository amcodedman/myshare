import React, { useEffect, useReducer } from "react";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesP,CoursesClear } from "../../store/actions/datacollection";
import { useNavigate } from "react-router-dom";
import { showcoursesm } from "../utils/coursesanim";

const CourseView = () => {
  const navigateTo=useNavigate();
  const dispatch = useDispatch();
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_SKIP':
        return { ...state, skip: action.payload };
      default:
        return state;
    }
  };
  const init_sort={ sortBy: '_id', order: 'desc', limit: 12, skip: 0}
  const [sort,Setsort] =useReducer(reducer, init_sort);
useEffect(()=>{
  showcoursesm()
});
  useEffect(()=>{
     const Skip = sort.skip + sort.limit 
     Setsort({ type: 'UPDATE_SKIP', payload: Skip });

  },[])
  const Loadmore=() => {
    const Skip = sort.skip + sort.limit 
    Setsort({ type: 'UPDATE_SKIP', payload: Skip });
 if(Skip>0){
  dispatch(getCoursesP(sort))
 }
    
  
}

useEffect(()=>{
 
  if(!courses ) 
    dispatch(getCoursesP(init_sort))
  
},[dispatch])
  const courses = useSelector((value) => value.coursesp);
  return (
    <div className="CourseView">
      <h1>Some hot courses to get started with</h1>
      <div className="layouttest">
      {
        
       courses && courses.AllcourseP ?
       courses.AllcourseP.filter((data)=>data.title).map((data,index)=>{
return(
  <div key={index} className="coursepreCstylef layoutspacv">
          <div
           style={{
                backgroundImage: `url('${data.file}')`,
              }}
           className="coursepreCbox"></div>
          <p>{data.title}</p>
          <p className="prevAuthor">
            {" "}
            <span>Author </span>Admin
          </p>
          <div className="coursevrate">
            <span>{data.rating}</span>
            <span className="starrate">
              <StarFill color=" rgb(153, 153, 0)" size={10} />
              <StarFill color=" rgb(153, 153, 0)" size={10} />
              <StarHalf color=" rgb(153, 153, 0)" size={10} />
            </span>
            <span>(1000)</span>
          </div>
          <div className="enrollnow">
            <span className="enrollbtn"
                onClick={()=>{
                              navigateTo(
`/studycommunity/course/${data.maincategory}/${data.title}/${data._id}`
                              )

                           
                            }}
            
            >Learn now</span>
             
          </div>
        </div>

)
   
       })
       :null
      }
    
     
    
      </div>
     <span
     onClick={()=>{
      Loadmore();
     }}
      className="loadmorebtn">Load more course</span>
    </div>
  );
};

export default CourseView;
