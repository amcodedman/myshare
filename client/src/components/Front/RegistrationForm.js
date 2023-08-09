import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Form } from "react-bootstrap";
import { CircleSpinner } from "react-spinners-kit";
import { Avatar, IconButton, TextField } from "@mui/material";
import LoaderView from "../utils/loaderView";
import { preRegister } from "../../store/actions/adminActions";
import { useNavigate } from "react-router-dom";

const MyForm = () => {
  const notifications = useSelector((value) => value.notification);
  const [loading, setload] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (notifications && notifications.notice) {
      setload(false);
      if (notifications.success) {
       
        navigate("/");
      }
    }
  });

  
  const dispatch = useDispatch();
  const Formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      comfirmpass: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      firstname: Yup.string().required("field required"),
      lastname: Yup.string().required("field required"),
      username: Yup.string()
        .min(5, "username should be at least 5 characters")
        .required("field required"),
      password: Yup.string().required("field required"),
      email: Yup.string().required("field required").email("email invalid!"),
      comfirmpass: Yup.string().required("comfirm password"),
    }),
    onSubmit: (value) => {
      if(value.password !==value.comfirmpass){
        document.getElementById("errorspan").classList.add("showerror")

  
      }
      else{

         
      setload(true);
      dispatch(preRegister(value));
      }
    
    },
  });

useEffect(()=>{

    if(Formik.values.password === Formik.values.comfirmpass){
      document.getElementById("errorspan").classList.remove("showerror")
    }
   
})

  return (
    <div
      className="mainLayout"
      style={{ minHeight: `${window.innerHeight}px` }}
    >
      
      <div className="registerme">
        <div
          className="backgroundimage"
          style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_1280.jpg')`,
          }}
        >
          <span>
            Welcome to MyShare .Secure your digital world. Join us today and
            embark on a journey of cyber resilience and empowerment.
          </span>
        </div>
        <div className="formsp">
          <form onSubmit={Formik.handleSubmit} className="myform">
            <TextField
              style={{ margin: "10px 10px 10px 0", color: "red" }}
              name="firstname"
              label="firstname"
              {...Formik.getFieldHelpers("firstname")}
              value={Formik.values.firstname}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={
                Formik.touched.firstname && Boolean(Formik.errors.firstname)
              }
              helperText={Formik.touched.firstname && Formik.errors.firstname}
            ></TextField>

            <TextField
              style={{ margin: "10px 10px 10px 0" }}
              name="lastname"
              value={Formik.values.lastname}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={Formik.touched.lastname && Boolean(Formik.errors.lastname)}
              helperText={Formik.touched.lastname && Formik.errors.lastname}
              {...Formik.getFieldHelpers("lastname")}
              label="Lastname"
            ></TextField>
            <TextField
              style={{ margin: "10px 10px 10px 0" }}
              name="username"
              value={Formik.values.username}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={Formik.touched.username && Boolean(Formik.errors.username)}
              helperText={Formik.touched.username && Formik.errors.username}
              {...Formik.getFieldHelpers("username")}
              label="Username"
            ></TextField>
            <TextField
              style={{ margin: "10px 10px 10px 0" }}
              name="email"
              value={Formik.values.email}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={Formik.touched.email && Boolean(Formik.errors.email)}
              helperText={Formik.touched.email && Formik.errors.email}
              {...Formik.getFieldHelpers("email")}
              label="Email"
            ></TextField>

            <input
              style={{ margin: "10px 10px 10px 0" }}
              name="password"
              placeholder="Password"
            type="password"
              value={Formik.values.password}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={Formik.touched.password && Boolean(Formik.errors.password)}
              helperText={Formik.touched.password && Formik.errors.password}
              {...Formik.getFieldHelpers("password")}
              label="Password"
            ></input>

            <input
              style={{ margin: "10px 10px 10px 0" }}
              name="comfirmpass"
              placeholder="Comfirm Password"
            type="password"
              value={Formik.values.comfirmpass}
             onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={
                Formik.touched.comfirmpass && Boolean(Formik.errors.comfirmpass)
              }
              helperText={
                Formik.touched.comfirmpass && Formik.errors.comfirmpass
              }
              {...Formik.getFieldHelpers("comfirmpass")}
              label="Comfirm Password"
            ></input>
            <span id="errorspan" className="errorspan">password must be the same.</span>

            <div></div>
            {loading ? (
              <CircleSpinner color="aqua" />
            ) : (
              <Button
                type="submit"
                style={{ marginBottom: "50px", width: "25%",minWidth: "98%"}}
              >
                Create Account
              </Button>
            )}

            <div className="signin">
              <p>
                Already a member ? <span onClick={()=>navigate("/user/login")}>Sign In</span>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="footer">
        <div className="frontitemhover">
          <p>
             Powered By Badu Technologies. All rights reserved<span style={{ color: "green" }}> @ </span>{" "}
            2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
