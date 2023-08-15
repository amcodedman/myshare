import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import FreezePage from "./components/Front/Pagefreeze";
import { GeoGet } from "./store/actions/geod";
import { getControls, getCourses } from "./store/actions/datacollection";


const Authcontainer=(props)=>{


  const targetDateString = "2023/11/2 11:30 pm"; // Replace with your specific date string
  const targetDate = new Date(targetDateString)

  console.log(targetDate- Date.now())
    const [holdp,setholdp]=useState(false)
    const dispatch = useDispatch();
    function disableScroll() {
      // Save the current scroll position
      var scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
  
      // Add styles to make the page fixed at the current scroll position
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
    }
    
useEffect(()=>{
  dispatch(getControls())
},[])
  useEffect(()=>{
    dispatch(
      getCourses()
    )
  },[dispatch])


    useEffect(()=>{
        dispatch(GeoGet())
        },[])
        const location = useSelector((item) => item.geodetails);
        const controls = useSelector((item) => item.ControlVersion);
        const [dangerrate,setrate]=useState(0)

useEffect(()=>{
  if(controls && controls.control){
    setrate(controls.control.vpnaccess)
  }
})
        useEffect(() => {
            if (location) {
              if(controls && controls.control){
                if(location.GEOD.blockrate >dangerrate){
                 

                  if (location.GEOD !==null) {

                    console.log(location.GEOD.blockrate)
                   
                    if(controls && controls.control){
                     setrate(controls.control.vpnaccess)
                   }
     
                     if(location.GEOD.blockrate >dangerrate){
                       setholdp(true)
                       document.body.style.overflow = "hidden";
                       disableScroll()
                     }
     
                    
                   
                   }
                }

               
              }

         
            }
          });

         
    return(
<>
{
          holdp ?
          <FreezePage IP={`${location && location.GEOD ? location.GEOD.ipaddress :"" }`} country={`${location && location.GEOD ? location.GEOD.country:"" }`} />:null
        }

<div>
{props.children}


</div>

</>




    )
}


export default Authcontainer