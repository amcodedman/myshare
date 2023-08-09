import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";

import { CheckCircle } from "react-bootstrap-icons";
import { CircleSpinner } from "react-spinners-kit";
import { ComfirmUserS } from "../../store/actions/adminActions";

const ConfirmAccount = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("t");
  const dispatch = useDispatch();
  const notifications = useSelector((value) => value.notification);
  const [loading, setload] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (notifications && notifications.notice) {
      if (notifications.success) {
        setload(false);
        navigate("/");
      }
    }
  });
  const Comfirmme = () => {
    setload(true);
    dispatch(ComfirmUserS({ t: token }));
  };

  return (
    <div
      className="mainLayout"
      style={{ minHeight: `${window.innerHeight}px` }}
    >


      <p className="verifypage">
        Please click on{" "}
        <span style={{ fontFamily: "Roboto condensed", color: "blue",fontSize:"14px" }}>Verify me</span>{" "}
        to complete process
      </p>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        {loading ? (
          <CircleSpinner color="blue" />
        ) : (

          <span
            onClick={() => {
              Comfirmme();
            }}
            className="verifyme"
          >
            <CheckCircle /> Verify me
          </span>
        )}
      </div>
      <div className="footer">
        <div className="frontitemhover">
          <p>
             Powered By Badu Technologies. All rights reserved<span style={{ color: "green" }}> @ </span>{" "}
            2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAccount;
