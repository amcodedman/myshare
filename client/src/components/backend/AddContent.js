import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { PushSpinner } from 'react-spinners-kit';
import * as Yup from "yup";
import { AddCourseServer, addContents, getCourse, getCourses } from '../../store/actions/datacollection';
import CourseContent from './contents_sections';
import CreateSections from '../utils/createsection';

const AddContent=(props)=>{
    const [loadingbtn, setloadbtn] = useState(false);
    
const dispatch=useDispatch();
const newcourse=useSelector((value)=>value.newCourse)
const newcont=useSelector((value)=>value.newContents)
const [contentsid,setcontentid]=useState("")
const [courseid,setcourseid]=useState("")
const [getnewcourse,setnewfield]=useState(false);


useEffect(()=>{
 if(newcourse && newcourse.data){
  
  if(newcourse.data.course ){
    setcourseid(newcourse.data.course._id);
  }

 } else{
props.setnewfield(false)
 }
})




useEffect(()=>{
  dispatch(getCourses());
},[dispatch])




useEffect(()=>{
  dispatch(getCourse(courseid));

},[dispatch,courseid])



const Formik = useFormik({
        initialValues: {
          title: "",
          course:`${props.id}`,
          abstract: "",
      
        },
    
        enableReinitialize: true,
        validationSchema: Yup.object({
         title: Yup.string().required("field required"),
         abstract: Yup.string().required("field required"),
      
        
        }),
        onSubmit: (value) => {
      
          setloadbtn(true);
       dispatch(addContents(value))
      dispatch(getCourse(courseid));
    
        },
      });


      const notifications = useSelector((value) => value.notification);

      useEffect(() => {
        if (notifications && notifications.notice) {
          setloadbtn(false);
        }
      });
      const [edith,setedith]=useState(false)
    return(
        <div className="profile_box_m_admin">
         <div><p>{props.course} Content</p></div> 
        <CourseContent changefield={setedith}  edith={edith} newcourse={newcourse} courseid={courseid}  setcontentid={setcontentid}/>  

      
   
  
        <div className="update_formscontent">
   {edith ? 
    <CreateSections  id={contentsid} mainid={props.id}/>:
    <form onSubmit={Formik.handleSubmit} className="myformadmin">
          <div className='fieldlayout'>
          <TextField
              style={{ margin: "10px 10px 10px 0", color: "red" }}
              name="title"
              label="Content label"
              {...Formik.getFieldHelpers("title")}
              value={Formik.values.title}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={
                Formik.touched.title &&
                Boolean(Formik.errors.title)
              }
              helperText={
                Formik.touched.title && Formik.errors.title
              }
            ></TextField>

   
          </div>
            <TextField
              multiline
      rows={6}

              style={{ margin: "10px 10px 10px 0" }}
              name="abstract"
              value={Formik.values.abstract}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              {...Formik.getFieldHelpers("abstract")}
              error={
                Formik.touched.abstract && Boolean(Formik.errors.abstract)
              }
              helperText={Formik.touched.abstract && Formik.errors.abstract}
              label="Abstract"
            ></TextField>
            <div></div>

            {loadingbtn ? (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <PushSpinner color="aqua" size={17} />
              </div>
            ) : (
              <Button
                type="submit"
                style={{
                  marginBottom: "50px",
                  width: "25%",
                  minWidth: "98%",
                }}
              >
                Update Details
              </Button>
            )}
          </form>


   }

          
      
        </div>
    
      </div>
    )
}


export default AddContent