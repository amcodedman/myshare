import React from "react";

const FreezePage = (props) => {
  return (
    <div className="freezeC"  style={{
        minHeight: `${window.innerHeight}px`,
       
      }}>
      <div className="freelayout"

      >
      <div className="freeel_l" 
       style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2013/07/12/19/23/padlock-154684_640.png')`,
        }}>
       

      </div>
      <div className="freeze_c">
            <h1>Access Denied</h1>
            <p>Message: <span>You tried to access with a fake location</span></p>
            <p>We detected Ip address :<span className="dangers">{props.IP}</span> from country <span className="dangers">{props.country}</span></p>
            <p>Please you have being restricted from accessing the site.Please turn off any Vpn application or proxy cahnger and reload</p>
            <span className="brand">Power by BaduTec.org..</span>
        </div>

      </div>
    </div>
  );
};

export default FreezePage;
