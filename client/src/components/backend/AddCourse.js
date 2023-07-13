import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { PushSpinner } from 'react-spinners-kit';
import * as Yup from "yup";
const AddCourse=()=>{
    const [loadingbtn, setloadbtn] = useState(false);

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
         tiltle: Yup.string().required("field required"),
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
     
        },
      });


      const notifications = useSelector((value) => value.notification);
      useEffect(() => {
        if (notifications && notifications.notice) {
          setloadbtn(false);
        }
      });
    return(
        <div className="profile_box_m">
        <div className="profile_header">
          <h1>Create new Course</h1>
          <p>Add course</p>
        </div>
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
              label="Course Price"
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
              name="photo"
              value={Formik.values.photo}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={
                Formik.touched.photo && Boolean(Formik.errors.photo)
              }
              helperText={Formik.touched.photo && Formik.errors.photo}
              {...Formik.getFieldHelpers("photo")}
              label="Photo url"
            ></TextField>

            <TextField
              style={{ margin: "10px 10px 10px 0" }}
              name="address"
              value={Formik.values.address}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              {...Formik.getFieldHelpers("address")}
              label="My address"
            ></TextField>
           </div>

            <TextField
              style={{ margin: "10px 10px 10px 0" }}
              name="photo"
              value={Formik.values.photo}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={
                Formik.touched.photo && Boolean(Formik.errors.photo)
              }
              helperText={Formik.touched.photo && Formik.errors.photo}
              {...Formik.getFieldHelpers("photo")}
              label="Photo url"
            ></TextField>

            <TextField
              style={{ margin: "10px 10px 10px 0" }}
              name="address"
              value={Formik.values.address}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              {...Formik.getFieldHelpers("address")}
              label="My address"
            ></TextField>
            <TextField
              style={{ margin: "10px 10px 10px 0" }}
              name="age"
              value={Formik.values.age}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              {...Formik.getFieldHelpers("age")}
              label="My age"
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
      </div>
    )
}


export default AddCourse