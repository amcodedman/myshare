import React from 'react';

import { XCircle } from "react-bootstrap-icons";
import { IconButton } from "@mui/material";

const FOreignAds=(props)=>{
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
          <p>Ends in 22h 53m 28s.</p>
        </div>
      </div>
       
    )
}
export default FOreignAds