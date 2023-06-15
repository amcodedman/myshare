import React, { useState } from "react";

import { ChevronCompactRight } from "react-bootstrap-icons";

const CatTemplete = (props) => {
 
  return (
    <div id="maincatloyout"
      className="categorytem"
      style={{ minHeight: `${window.innerHeight}px` }}
    >
    <div className="leftlayout presshover">

    </div>

   
      <div  className="catLayout">
        <div id="maincat" className="maincate">
          <div className="content_layout">
            <span>Business</span>
            <span>
              <ChevronCompactRight />
            </span>
          </div>
        </div>
        {
            props.catsub ? 
            <div id="subcat" className="maincate">
          <div className="content_layout">
            <span>Communication</span>
          </div>
        </div>: null
        }
      
      </div>
      <div className="rightlayout presshover"></div>
    </div>
  );
};

export default CatTemplete;
