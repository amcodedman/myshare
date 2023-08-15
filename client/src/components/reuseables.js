import React,{useState,useEffect} from 'react';

import { XCircle } from "react-bootstrap-icons";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { getControls } from '../store/actions/datacollection';

const FOreignAds=(props)=>{



const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getControls())
},[dispatch])


const controls = useSelector((item) => item.ControlVersion);

const [promodate,setpromo]=useState()
const [countdown, setCountdown] = useState(promodate - Date.now());


useEffect(()=>{
  if(controls && controls.control){

    let targetDate = new Date(controls.control.adscount);
    setpromo(targetDate)
    console.log(targetDate)
 
  }
},[controls])


  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const timeLeft = Math.max(0, promodate - now);
      setCountdown(timeLeft);
    }, 1000); // Update countdown every second

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(countdown / (1000 * 60 * 60));
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);
    return(
        <div className="foreign">
        <div className="admessage">
          <span>
            Get courses from GH₵ 50 for a limited time| A special offer for
            new learners
          </span>
          <IconButton onClick={()=>{props.settopads(false)}}>
            <XCircle />
          </IconButton>
        </div>
        <div className="adofferlimit">
        {countdown < 0 ? (
        <p>Promo opens soon!</p>
      ) : (
        <p>
          {hours} hours, {minutes} minutes, {seconds} seconds
        </p>
      )}
        </div>
      </div>
       
    )
}
export default FOreignAds