import React, { useEffect, useState } from "react";

import { ArrowUp, ArrowDown, ArrowUpShort,Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { DeleteContent, DeleteSection, getCourse } from "../../store/actions/datacollection";
import { RawToHtml } from "../utils/rawtohtml";
import { IconButton } from "@mui/material";
import DeleteContentID from "../utils/deletecontent";


const CourseContent = (props) => {
  const [showsection, setshow] = useState(false);
  const newcourse=useSelector((value)=>value.newCourse)
  const newcontent=useSelector((value)=>value.newContents)
  const [contents,setcontents]=useState(null);
  const [sections,setsections]=useState(null);
  const dispatch=useDispatch();

  const [courseid,setcourseid]=useState("")
  const [getnewcourse,setnewfield]=useState(false);
  
    


  useEffect(()=>{
   if(newcourse && newcourse.data){
    
  
      if(newcourse.data.course ){
  setcourseid(newcourse.data.course._id);
  setcontents(newcourse.data.course.contents)


  
      
      }
     
  
   } else{
  props.setnewfield(false)
   }
  })
  useEffect(()=>{
  
    dispatch(getCourse(courseid));
  
  },[dispatch,courseid])
  


  useEffect(() =>{
  if(contents){
    setsections(contents.sections)
  }
  })
  


  









  return (
    <div>
    {
      contents ?
      contents.map((lists,index)=>{
    return(
     
        <div className="content_c">
        
      <div>
        <h1>{lists.title}</h1>
        <p>
        {
          lists.abstract
        }
         
        </p>


        <div className="btnlayout">
        {showsection ? (
          <span className="contentshowbtn"  onClick={() => {
                setshow(false);
                props.changefield(false)
              }}>
            Show Sections{" "}
            <ArrowUpShort
              size={12}
             
            />
          </span>
        ) : (
          <span className="contentshowbtn"   onClick={() => {
                

                setshow(true);
              }}>
            Show Sections{" "}
            <ArrowDown
              size={12}
            
            />
          </span>
        )}


        <span className="contentshowbtn"  onClick={() => {
     
              
              
              }}>
              <IconButton    onClick={()=>{
               dispatch( DeleteContent(lists._id))
               dispatch(getCourse(courseid)); 
          
              }}>

                <Trash size={15} color="white"/>
              </IconButton>
          
          
          </span>

        </div>

      
      </div>

      {showsection ? 
      <div className="content_section">
      <div className="contentnav">
      <span className="contentshowbtn"  onClick={() => {
        props.setcontentid(lists._id)
        props.changefield(true)
                setTimeout(()=>{
                 
                    document.querySelector('#editor').scrollIntoView({behavior:"smooth"})
            
                },500)
              
              
              }}>
           Add Section
          
          </span>
      </div>


      { lists && lists.sections?
        lists.sections.map((section,index)=>{
          return(
            <div className="contentsections">
              <h1>{section.title}</h1>
              <div>{RawToHtml(section.detail)}</div>
              <span className="contentdeletebtn"  onClick={() => {     
                dispatch(DeleteSection(section._id));
                dispatch(getCourse(courseid)); 
          

              }}>
           Delete section
          
          </span>
            </div>
          );
        }):null }
      
       </div> : null}
    </div>


    )

})


:null

    }


 
    </div>
  
  );
};

export default CourseContent;
