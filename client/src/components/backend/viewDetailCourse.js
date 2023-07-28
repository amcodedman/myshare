import React, { useEffect, useState } from "react";
import { RawToHtml } from "../utils/rawtohtml";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { DeleteCourse, getCourses ,getCourse, DeleteSection, DeleteContent} from "../../store/actions/datacollection";
import { PushSpinner } from "react-spinners-kit";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate, useParams,} from "react-router-dom";
import LoaderView from "../utils/loaderView"
import AddContentReuse from "../addcontentreuse";
import { Arrow90degLeft } from "react-bootstrap-icons";
import AddSectionsResuse from "../utils/reuseasddsection";


const CourseDetail = () => {
    const cours = useSelector((value) => value.newCourse);
    const [mycourse,setcourse]=useState(null);
    const [action,setaction]=useState(null);
    const [contentheader,setheader]=useState(null);
    const [contentid,setcontentid]=useState(null);
    const {id}=useParams()
  

    const navigate=useNavigate();

  const [loadingbtn, setloadbtn] = useState(false);
  const notifications = useSelector((value) => value.notification);
  useEffect(() => {
    if (notifications && notifications.notice) {
      setloadbtn(false);
    }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourse(id));
   
  });


  useEffect(()=>{
   if(cours && cours.data){
    setcourse(cours.data.course);

   }
  })
 


  const Displayeditor=()=>{
    if(action=="newcontent"){
        return( 
            <AddContentReuse id={id}/>
        )
    }
    if(action=="newsection"){
      return(
        <
        AddSectionsResuse id={contentid}   header={contentheader}/>

      )
   

    }
  }


  return (
    <>
    {
        mycourse ?


        <div
      className="profile_box_m_page"
      style={{ minHeight: `${window.innerHeight}px` }}
    >
    
    <div  className="backlayout">
    
    <IconButton  
      
      onClick={()=>{
        navigate("/mainadmin/creatorcourses")
        
      }}>  
      
      <Arrow90degLeft size={14} color="aqua"/>
      </IconButton>

      <span>Back</span>

    </div>


      {mycourse ? 

        <div className=" courselabel">
        <p>Title</p>
              <div className="coursecontrol">
            
                <p className="courseheader">{mycourse.title}</p>{" "}
                <div className="btnss">
                 

                  {loadingbtn ? (

                <PushSpinner size={8} />
                   
                  ) : (
                    <span
                      className="btnlabel"
                      onClick={() => {
                        dispatch(DeleteCourse(mycourse._id));

                        setloadbtn(true);
                        dispatch(getCourses());
                      }}
                    >
                      Delete Course
                    </span>
                  )}


                  <span className="btnlabel"
                        onClick={()=>{
                    setaction("newcontent");
                    setTimeout(()=>{
                      document.getElementById("editorspace").scrollIntoView({behavior:"smooth"});

                    },500)
                   
                  }}
                  
                   >new content</span>
                  <span className="btnlabel"
             
                  >Modify Details</span>
                  <span className="btnlabel">feature</span>
                </div>{" "}
              </div>

              <p>
                <span className="plabel"> Main Category </span> :{" "}
                {mycourse.maincategory}
              </p>

              <p>
                <span className="plabel">Sub Category</span> :{" "}
                {mycourse.subcategory}
              </p>
              <p>
                {" "}
                <span className="plabel">Course Price</span>: GH₵ {mycourse.price}
              </p>
              <p>
                <span className="plabel"> course expections </span>:{" "}
                {mycourse.expections}
              </p>
              <p> <span className="plabel"> Course ratings</span>:{" "}</p>

              <div>
                <h3>Course Description</h3>
                <p>{mycourse.detail}</p>
              </div>
              <div>
                <h3>Abstract</h3>
                <p>{mycourse.abstract}</p>
              </div>    

              <div className="contents_layout">
                <span className="contentslabel">Course Contents</span>
                {mycourse.contents.length > 0
                  ? mycourse.contents.map((contents, ids) => {
                      return (
                        <div key={ids} className="contents_layout">
                        <div className="coursecontrol">
                        <h1>{contents.title}</h1>
                       
                       <div>
                       <span className="btnlabel"
                       onClick={()=>{
                        setheader(contents.title)
                        setcontentid(contents._id)
                        setaction("newsection");
                    setTimeout(()=>{
                      document.getElementById("editorspace").scrollIntoView({behavior:"smooth"});

                    },500)
                        
                       }}
                       
                       
                       
                       >Add section</span>
                       <span className="btnlabel">Modify</span>
                        <span
                        onClick={()=>{
                          dispatch(DeleteContent(contents._id))
                        }}
                         className="btnlabel_delete">Delete content </span>
                       </div>
                        </div>
                 
                        
                          <p>{contents.abstract} </p>
                          
                          <div>
                             <span className="contentslabel">
                              Contents Sections
                            </span>

                            {contents.sections.length > 0
                              ? contents.sections.map(
                                  (section, sectionindex) => {
                                    return (
                                      <div key={sectionindex} className="sectionlayout">
                                        <h3>{section.title}</h3>
                                        <p>{RawToHtml(section.detail)}</p>
                                      
                                        <div className="coursecontrol">

                              
                                        <span
                                        onClick={()=>{
                                          dispatch(DeleteSection(section._id))
                                        }}
                                         className="btnlabel_delete">Delete</span>

                                        </div> 
                                        <div className="dividerline"></div> 
                                      </div>
                                    );
                                  }
                                )
                              : null}
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>

<div>


</div>

            </div>
       : (
        <div>
          <p>No courses</p>
        </div>
      )}


    <div >{ Displayeditor()}</div> 

      <h1>Students:  </h1>
      <div id="editorspace"></div>
    <p>Comments:  </p>
   
    </div>
    :
    <LoaderView/>



    }
    </>
  );
};
export default CourseDetail;
