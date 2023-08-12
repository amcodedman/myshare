import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import FreezePage from "./components/Front/Pagefreeze";
import { GeoGet } from "./store/actions/geod";
import { getCourses } from "./store/actions/datacollection";
const Authcontainer=(props)=>{
    const [holdp,setholdp]=useState(false)
    const dispatch = useDispatch();
    
  useEffect(()=>{
    dispatch(
      getCourses()
    )
  },[dispatch])


    useEffect(()=>{
        dispatch(GeoGet())
        },[])
        const location = useSelector((item) => item.geodetails);

        useEffect(() => {
            if (location) {
              if (location.GEOD !==null) {
               
                if(location.GEOD.blockrate >0){
                  setholdp(true)
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