import React,{useState,useEffect} from 'react';

import { XCircle } from "react-bootstrap-icons";
import { IconButton } from "@mui/material";

const FOreignAds=(props)=>{

  const [countdown, setCountdown] = useState(3661); // Initial countdown value in seconds (example: 1 hour, 1 minute, and 1 second)

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000); // Update countdown every second

      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;
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
        {countdown === 0 ? (
        <p>Countdown finished!</p>
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