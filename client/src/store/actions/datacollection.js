import axios from "axios";
import * as notify from "./notification";

const {  COURSESP,COURSEBYID,MAIN_COURSE, CONTENTS, SECTIONS,COURSES ,ACCESSCONTROL,ALLCOUPONS} = require("../type");


export const maincourse = (data) => ({
  type: MAIN_COURSE,
  payload: data,
});

export const coursebyid = (data) => ({
  type: COURSEBYID,
  payload: data,
});

export  const controlv=(data) => ({



  type:ACCESSCONTROL ,
  payload:data
} 
  )
export const contents_new = (data) => ({
  type: CONTENTS,
  payload: data,
});

export const section_new = (data) => ({
    type: SECTIONS,
    payload: data,
  });
  


  export const Allcourse = (data) => ({
    type:COURSES,
    payload: data,
  });
  

  export const AllcourseP = (data) => ({
    type:COURSESP,
    payload: data,
  });



  export const Allcoupons = (data) => ({
    type:ALLCOUPONS,
    payload: data,
  });
  







axios.defaults.headers.post["Content-Type"] = "application/json";

export const AddCourseServer = (data) => {
  return async (dispatch, getdispatch) => {
    try {
     
      const newd = await axios.post("/data/addcourse", data);
    
      dispatch(
        maincourse({course:newd.data})
      );
      dispatch(
        notify.notify_success({
          msg: `new Course Add !!`,
        }))
      
    } catch (error) {
      dispatch(
        notify.notify_error({
          msg: `failed !`,
        }))
    }
  };
};


export const addSection = (data) => {
    return async (dispatch, getdispatch) => {
      try {
        const newd = await axios.post("/data/createsection", data);
      
        dispatch(
            section_new({section:newd.data})
        );
  

        dispatch(
            notify.notify_success({
              msg: `Add`,
            }))
      } catch (error) {
        dispatch(
          notify.notify_error({
            msg: `failed !`,
          }))
      }
    };
  };
  

  
export const addContents = (data) => {
    return async (dispatch, getdispatch) => {
      try {
        const newd = await axios.post("/data/createcontent", data);
      
        dispatch(
         contents_new({content:newd.data})

        );
      
        dispatch(
            notify.notify_success({
              msg: `Add !`,
            }))
  
      } catch (error) {
        dispatch(
          notify.notify_error({
            msg: `failed !`,
          }))
      }
    };
  };
  







  export const DeleteCourse= (id) => {
    return async (dispatch, getdispatch) => {
      try {
        const newd = await axios.delete(`/data/deletecourse/${id}`);
        dispatch(
            notify.notify_success({
              msg: `Course removed !!`,
            }))
      } catch (error) {
        console.log(error.response.data);
        dispatch(
          notify.notify_error({
            msg: `failed !!`,
          }))
      }
    };
  };
  
  
  export const DeleteSection = (id) => {
      return async (dispatch, getdispatch) => {
        try {
          const newd = await axios.delete(`/data/deletesection/${id}`);
        
          dispatch(
            notify.notify_success({
              msg: `section removed !!`,
            }))
    
        } catch (error) {
          console.log(error.response.data);
          dispatch(
            notify.notify_error({
              msg: `failed!!`,
            }))
        }
      };
    };
    
  
    
  export const DeleteContent = (id) => {
      return async (dispatch, getdispatch) => {
        try {
          const newd = await axios.delete(`/data/deletecontent/${id}`);

          dispatch(
            notify.notify_success({
              msg: `content removed !!`,
            }))
        } catch (error) {
          console.log(error.response.data);
          dispatch(
            notify.notify_error({
              msg: `failed!!`,
            }))
        }
      };
    };
    

    export const getCourses = () => {
      return async (dispatch, getdispatch) => {
        try {
          const newd = await axios.get(`/data/getcourses`);
          dispatch(
            Allcourse(newd.data)
          );
      
        } catch (error) {
        
        }
      };
    };



    export const CoursesClear = (data) => {
      return async (dispatch, getdispatch) => {
        try {

       
        dispatch(
          AllcourseP(null)
        );

        
        } catch (error) {
         
        }
      };
    };















    export const getCoursesP = (data) => {
      return async (dispatch, getdispatch) => {
        try {
     
          const newd = await axios.post(`/data/getcoursespaginate`,data);
       

        let newdata=[...newd.data]; 
   
          const prevdata=getdispatch().coursesp
          if(prevdata){
            newdata=[...prevdata.AllcourseP,...newd.data];
  

        }
       
        dispatch(
          AllcourseP(newdata)
        );

        
        } catch (error) {
          console.log(error);
        }
      };
    };





















    export const getCoupons= () => {
      return async (dispatch, getdispatch) => {
        try {
          const newd = await axios.get(`/data/getcoupons`);
      
          dispatch(
            Allcoupons(newd.data)
          );

      
        } catch (error) {
          console.log(error.response.data);
        }
      };
    };


    export const addCoupon= (data) => {
      return async (dispatch, getdispatch) => {
        try {
          const newd = await axios.post("/data/generatecoupons", data);
          dispatch(
              notify.notify_success({
                msg: `Coupon generated !`,
              }))
        } catch (error) {
          dispatch(
            notify.notify_error({
              msg: `failed !`,
            }))
        }
      };
    };
    
  





       
  export const Deletecoupon = (data) => {
    return async (dispatch, getdispatch) => {
      try {
    
        const newd = await axios.delete(`/data/deletecoupon/${data}`,{name:"dddd"});

        dispatch(
          notify.notify_success({
            msg: `coupon removed !!`,
          }))
      } catch (error) {
        console.log(error.response.data);
        dispatch(
          notify.notify_error({
            msg: `failed!!`,
          }))
      }
    };
  };
  





  export const applycoupons=(data)=>{


    return async(dispatch)=>{

      try{
        const result=await  axios.patch(`/data/applycoupon`,data);
       
        dispatch(
          notify.notify_success({
            msg: `Coupon applied ,check your account Credit!!`,
          }));
      }catch(error){
        dispatch(
          notify.notify_error({
            msg: `failed !!`,
          }));
        
      }
    }

  }














    

    

    
    export const getCourse = (id) => {
      return async (dispatch, getdispatch) => {
        try {
          const newd = await axios.get(`/data/getcourse/${id}`);
          
      dispatch(
        coursebyid({course:newd.data})

      );


        } catch (error) {
          console.log(error.response.data);
        }
      };
    };



    export const updateCourse = (id,data) => {
      return async (dispatch, getdispatch) => {
        try {
        
          const newd = await axios.patch(`/data/modifycourse/${id}`,data);
          
      dispatch(
        coursebyid({course:newd.data})
      );



      dispatch(
        notify.notify_success({
          msg: `Updated !!`,
        }));

        } catch (error) {
          console.log(error.response.data);
        }
      };
    };
    export const clearCourse = (id) => {
      return async (dispatch, getdispatch) => {
        try {
    
          
      dispatch(
        coursebyid(null)

      );


        } catch (error) {
          console.log(error.response.data);
        }
      };
    };
    
  


    export const getControls=(id)=>{


      return async(dispatch)=>{

        try{
          const result=await  axios.get("/data/getaccess");
          dispatch(controlv(result.data[0]));

        }catch(error){
          
        }
      }

    }
    export const updateControls=(id,datacontrol)=>{


      return async(dispatch)=>{

        try{
          const result=await  axios.patch(`/data/updatecontrols/${id}`,datacontrol);
          dispatch(controlv(result.data));
          dispatch(
            notify.notify_success({
              msg: `Updated !!`,
            }));
        }catch(error){
          
        }
      }

    }