import React, { useState, useEffect } from "react";

import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { PushSpinner } from "react-spinners-kit";



import {
    Deletecoupon,
    addCoupon,
  getControls,
  getCoupons,
  updateControls,
} from "../../store/actions/datacollection";
import { ArchiveFill, GearFill } from "react-bootstrap-icons";
const MyCouponsp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getControls());
  });
  const [loadingbtn, setloadbtn] = useState(false);
  const coups = useSelector((value) => value.tokens);
  const [showprice,setprice]=useState(false);
  const [spanid,setspanid]=useState("");

const hoverEffect=()=>{

}

  const notifications = useSelector((value) => value.notification);
  useEffect(() => {
    if (notifications && notifications.notice) {
      setloadbtn(false);
    }
  });
  const Formik = useFormik({
    initialValues: {
      amount:'',
     count: 1,
      
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
        amount: Yup.number().required("field required"),
    }),

    onSubmit: (data) => {
      dispatch(addCoupon(data));
      setloadbtn(true);
    },
  });

  return (
    <div className="contolv" style={{ minHeight: `${window.innerHeight}px` }}>
      <p>Generate Coupons</p>

      <Form

        onSubmit={Formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent:"space-evenly",
          alignItems: "center",
          width: "60%",
          height: "20%",
        }}
      >
       

        <TextField
                      className="textfields"
          style={{
            marginBottom: "30px",width:"150px"
          }}
          name="amount"
      
       
          value={Formik.values.amount}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          error={Formik.touched.amount && Boolean(Formik.errors.amount)}
          helperText={Formik.touched.amount && Formik.errors.amount}
          {...Formik.getFieldHelpers("amount")}
          label="Amount GH¢ "
        ></TextField>

        <TextField
                      className="textfields"
          style={{
            marginBottom: "30px",width:"150px"
          }}
          name="count"
          value={Formik.values.count}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          error={Formik.touched.count && Boolean(Formik.errors.count)}
          helperText={Formik.touched.count && Formik.errors.count}
          {...Formik.getFieldHelpers("count")}
          label="Number of Coupons"
        ></TextField>

        {loadingbtn ? (
          <div
         
            style={{
              display: "flex",
              width: "180px",
              height: "50px",
              justifyContent: "center",
              alignItems: "center",
              marginTop:"-30px",
            
     
            }}
          >
           <span  ><GearFill className="gearing" color="blue" size={30} /></span> 
          </div>
        ) : (
          <Button
            type="submit"
            style={{
              marginBottom: "30px",
              height: "50px",
              width: "180px",

           
            }}
          >
            Generate Coupons
          </Button>
        )}
      </Form>








      <div>
      <p>All Coupons</p>
      <div className="gridlayout">
      {
coups && coups.coupons ?
coups.coupons.map((data,index)=>{
    return(
        <div key={index}>
        <div className="couponcontainer"
         onMouseOver={
            ()=>{

setspanid(data._id);


setprice(true);

         }

      }
      onMouseLeave={
            ()=>{

setspanid(data._id);


setprice(false);

         }

      }
      >
        { showprice && spanid ==data._id  ?
           
            <span>GH₵ {data.amount}</span>:
           
            <span>{data.name}</span>
        }

<IconButton    onClick={()=>{
    dispatch(Deletecoupon(data.name))
    dispatch(getCoupons() );
}}>

<ArchiveFill color="darkgoldenrod" />
</IconButton>
        </div>

        </div>
    )

})

:null
}



      </div>



      </div>
    </div>
  );
};

export default MyCouponsp;
