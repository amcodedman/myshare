import axios from "axios";
import * as notify from "./notification";

const {  MAIN_COURSE, CONTENTS, SECTIONS,COURSES } = require("../type");


export const maincourse = (data) => ({
  type: MAIN_COURSE,
  payload: data,
});

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
  

    
axios.defaults.headers.post["Content-Type"] = "application/json";

export const AddCourseServer = (data) => {
  return async (dispatch, getdispatch) => {
    try {
      console.log("rev")
      const newd = await axios.post("/data/addcourse", data);
    
      dispatch(
        maincourse({course:newd.data})
      );
      dispatch(
        notify.notify_success({
          msg: `new Course Add !!`,
        }))
        console.log({msg:newd.data})
    } catch (error) {
      console.log(error.response.data);
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
        console.log(error.response.data);
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
        console.log(newd.data)
        dispatch(
            notify.notify_success({
              msg: `Add !`,
            }))
  
      } catch (error) {
        console.log(error.response.data);
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
            Allcourse({courses:newd.data})
          );
          console.log(newd.data)
        } catch (error) {
          console.log(error.response.data);
        }
      };
    };
    

    
    export const getCourse = (id) => {
      return async (dispatch, getdispatch) => {
        try {
          const newd = await axios.get(`/data/getcourse/${id}`);
          
      dispatch(
        maincourse({course:newd.data})

      );


          console.log({"REPLACE":newd.data})
        } catch (error) {
          console.log(error.response.data);
        }
      };
    };
    
  