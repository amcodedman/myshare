import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { PushSpinner } from 'react-spinners-kit';
import * as Yup from "yup";
import { AddCourseServer, getCourses } from '../../store/actions/datacollection';
import AddContent from './AddContent';

const AddCourse=()=>{
    const [loadingbtn, setloadbtn] = useState(false);
    
const dispatch=useDispatch();
const newcourse=useSelector((value)=>value.newCourse)
const [getnewcourse,setnewfield]=useState(false);
const [courseid,setcourseid]=useState(null)
const [coursename,setcoursename]=useState();
useEffect(()=>{
 
 if(newcourse && newcourse.data){

  
  if(newcourse.data.course ){
    setcourseid(newcourse.data.course._id);
  }
 
  setnewfield(true)

 } else{
setnewfield(false)


 }
},[dispatch,newcourse])




useEffect(()=>{
  dispatch(getCourses());
},[dispatch])
    const Formik = useFormik({
        initialValues: {
          title: "",
          maincategory: "",
          subcategory: "",
          price: "",
          detail:"",
          file: "",
          abstract: "",
          expections:""
        },
    
        enableReinitialize: true,
        validationSchema: Yup.object({
         title: Yup.string().required("field required"),
         maincategory: Yup.string().required("field required"),
         subcategory: Yup.string().required("field required"),
         price: Yup.string().required("field required"),
         detail: Yup.string().required("field required"),
         file: Yup.string().required("field required"),
  
         abstract: Yup.string().required("field required"),
         expections: Yup.string().required("field required"),
        
        }),
        onSubmit: (value) => {
          setloadbtn(true);
        dispatch(
          AddCourseServer(value))
    
        },
      });


      const notifications = useSelector((value) => value.notification);
      useEffect(() => {
        if (notifications && notifications.notice) {
          setloadbtn(false);
        }
      });
    return(
        <div className="profile_box_m_admin">
        <div className="profile_header">
          <h1>Create new Course</h1>
          <p>Add course</p>
        </div>

        {

  getnewcourse ?

  <div>
<p>

</p>
<AddContent  id={courseid}  setnewfield={setnewfield} course={newcourse && newcourse.data? newcourse.data.course.title :null}/>


  </div>


:
  
        <div className="update_form">
          <form onSubmit={Formik.handleSubmit} className="myformadmin">
          <div className='fieldlayout'>



          <TextField
              style={{ margin: "10px 10px 10px 0", color: "red" }}
              name="title"
              label="Course Title"
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

            <TextField
              style={{ margin: "10px 10px 10px 0" }}
              name="price"
              value={Formik.values.price}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={
                Formik.touched.price &&
                Boolean(Formik.errors.price)
              }
              helperText={
                Formik.touched.price && Formik.errors.price
              }
              {...Formik.getFieldHelpers("price")}
              label="Price (GH₵)"
            ></TextField>
          </div>

          <div className='fieldlayout'>


          <TextField
              style={{ margin: "10px 10px 10px 0" }}
              name="maincategory"
              value={Formik.values.maincategory}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={
                Formik.touched.maincategory && Boolean(Formik.errors.maincategory)
              }
              helperText={Formik.touched.maincategory && Formik.errors.maincategory}
              {...Formik.getFieldHelpers("maincategory")}
              label="Category"
            ></TextField>
            <TextField
              style={{ margin: "10px 10px 10px 0" }}
              name="subcategory"
              value={Formik.values.subcategory}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={
                Formik.touched.subcategory &&
                Boolean(Formik.errors.subcategory)
              }
              helperText={
                Formik.touched.subcategory && Formik.errors.subcategory
              }
              {...Formik.getFieldHelpers("subcategory")}
              label="Subcategory"
            ></TextField>
          </div>
           <div className='fieldlayout'>

           <TextField
              style={{ margin: "10px 10px 10px 0" }}
              name="file"
              value={Formik.values.file}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={
                Formik.touched.file && Boolean(Formik.errors.file)
              }
              helperText={Formik.touched.file && Formik.errors.file}
              {...Formik.getFieldHelpers("file")}
              label="Image url"
            ></TextField>

            <TextField
              style={{ margin: "10px 10px 10px 0" }}
              name="expections"
              value={Formik.values.expections}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              {...Formik.getFieldHelpers("expections")}
              helperText={Formik.touched.expections && Formik.errors.expections}
              {...Formik.getFieldHelpers("expections")}
              label="expections"
            ></TextField>
           </div>

            <TextField
              style={{ margin: "10px 10px 10px 0"  }}
              name="detail"
              multiline
      rows={10}
              value={Formik.values.detail}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={
                Formik.touched.detail && Boolean(Formik.errors.detail)
              }
              helperText={Formik.touched.detail && Formik.errors.detail}
              {...Formik.getFieldHelpers("detail")}
              label="Course Description"
            ></TextField>

            <TextField
              multiline
      rows={10}

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
        </div>
     
      }
      </div>
    )
}


export default AddCourse