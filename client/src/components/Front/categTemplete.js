import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronCompactRight } from "react-bootstrap-icons";
import { getCourses } from "../../store/actions/datacollection";

const CatTemplete = (props) => {
  const dispatch = useDispatch();
  const courses = useSelector((value) => value.coursesl);
  useEffect(()=>{
    dispatch(
      getCourses()
    )
  },[dispatch])
  const [categories,setcat]=useState([])
  const [subcategories,setsubcat]=useState([])
  const [catset,setcate]=useState()
  let Arraycat=[];
  let Arraysubcat=[];


  useEffect(()=>{
    if(courses){
      if(
        courses.Allcourse
      ){
        courses.Allcourse.map((data)=>{
      
          if(! Arraycat.includes(data.maincategory ) ){
  Arraycat.push(data.maincategory)
          }
        })
        setcat(Arraycat)
      }
  
    }
  
 
  })


  const GetSubcat=(value)=>{



      
          courses.Allcourse.filter((data)=>data.maincategory===value)
          .map((value)=>{
      
            if(! Arraysubcat.includes(value.subcategory ) ){
              Arraysubcat.push(value.subcategory)
            }
          })
          
          console.log(Arraysubcat)
          setsubcat(Arraysubcat)
     
   
    
  
  }

 


  return (
    <div id="maincatloyout"
      className="categorytem"
      style={{ minHeight: `${window.innerHeight}px` }}
    >
    <div className="leftlayout presshover">

    </div>

   
      <div  className="catLayout">
        <div id="maincat" className="maincate">
         
          
            {categories ? 
              categories.map((data,index)=>{
                return(
                 <>
                 <div
                  onMouseOver={()=>{
                    GetSubcat(data)

                  }}
                   className="content_layout">
                  
                  <span>{data}
                  </span>
                   <span>
                     <ChevronCompactRight />
                   </span>

                  </div>
                  <div className="linebtn"></div>
            
                 </>
                )
              })
              :null
          }
          
       
        </div>
        {
            props.catsub ? 
            <div id="subcat" className="maincate">

            {subcategories ? 
              subcategories.map((data,index)=>{
                return(
                  <>
                  <div
                  onMouseOver={()=>{
                    setcate(data)

                  }}
                   className="content_layout">
                  
                  <span>{data}
                  </span>
                

                  </div>
                  <div className="linebtn"></div>
            </>
                )
              })
              :null
          }
        </div>: null
        }
      
      </div>
      <div className="rightlayout presshover"></div>
    </div>
  );
};

export default CatTemplete;
