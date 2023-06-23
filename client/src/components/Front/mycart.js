import React, { useEffect, useRef, useState } from "react";
import TopNav from "../utils/pagenav";
import ProfileNav from "../utils/ProfileBar";
import LoaderView from "../utils/loaderView";
import { useDispatch, useSelector } from "react-redux";
import CatTemplete from "./categTemplete";
import { Checkhover } from "../utils/responsehover";
import { Avatar, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PushSpinner } from "react-spinners-kit";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CheckTopp } from "../utils/reuseable";
import { UpdatePass, updateAccount } from "../../store/actions/adminActions";
import { StarFill, StarHalf, Check } from "react-bootstrap-icons";

const MyCart = () => {
  const [promocode, setcode] = useState();
  const ApplyCoupon = () => {
    console.log(promocode);
  };
  const dispatch = useDispatch();
  const Checkuser = useSelector((item) => item.authuser);
  const navigate = useNavigate();

  const [myid, setmyid] = useState("");
  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");
  const [email, setemail] = useState("");
  useEffect(() => {
    if (Checkuser) {
      if (Checkuser.account) {
        setmyid(Checkuser.account._id);
        setfn(Checkuser.account.firstname);
        setln(Checkuser.account.lastname);
        setemail(Checkuser.account.email);
      }
    }
  });
  const notifications = useSelector((value) => value.notification);
  useEffect(() => {
    if (notifications && notifications.notice) {
      setloadbtn(false);
    }
  });
  useEffect(() => {
    CheckTopp();
  });
  const Formik = useFormik({
    initialValues: {
      oldpass: "",
      newpass: "",
      comfirmpass: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      oldpass: Yup.string().required("field required"),
      newpass: Yup.string().required("field required"),
      comfirmpass: Yup.string().required("field required"),
    }),
    onSubmit: (value) => {
      setloadbtn(true);
      dispatch(UpdatePass(value, myid));
    },
  });

  const [loading, setload] = useState(true);
  const [loadingbtn, setloadbtn] = useState(false);

  const [alertProfile, setprofile] = useState(false);
  const [cat, setcat] = useState(false);
  const [catsub, setsub] = useState(false);
  useEffect(() => {
    if (Checkuser) {
      if (Checkuser.auth !== null) {
        if (!Checkuser.auth) {
          navigate("/");
        }
        setload(false);
      }
    }
  }, [Checkuser]);
  useEffect(() => {
    Checkhover(setcat, setsub);
  });

  return (
    <>
      {" "}
      {loading ? (
        <LoaderView />
      ) : (
        <>
          {cat ? <CatTemplete catsub={catsub} /> : null}
          {alertProfile ? <ProfileNav  fn={fn} ln={ln} email={email} /> : null}
          <div
            className="profilecontainer"
            style={{ minHeight: `${window.innerHeight}px` }}
          >
            <div>
              <TopNav setprofile={setprofile} fn={fn} ln={ln} email={email} />
            </div>
            <div className="box_layout">
              <div className="profile_box">
                <div className="profile_b_nav">
                  <div className="profile_rev">
                    <Avatar
                      style={{
                        width: "70px",
                        height: "70px",
                        paddingBottom: "5px",
                      }}
                    />
                    <p>
                      {fn} {ln}
                    </p>
                  </div>
                  <div className="profile_cont">
                    <span
                      className="p_span"
                      onClick={() => {
                        navigate("/user");
                      }}
                    >
                      Profile
                    </span>
                    <span
                      className="p_span"
                      onClick={() =>
                        navigate("/user/myaccount/accountsettings")
                      }
                    >
                      Account Settings
                    </span>
                    <span
                      className="p_span"
                      onClick={() => navigate("/user/myaccount/notifications")}
                    >
                      My Notifications
                    </span>
                    <span className="p_span">My Following</span>
                    <span className="p_span">My Purchases</span>
                    <span className="p_span">My Wishlist</span>
                    <span
                      className="p_span"
                      style={{ backgroundColor: "rgb(133, 127, 127)" }}
                    >
                      My Cart
                    </span>
                  </div>
                </div>

                <div className="profile_box_m">
                  <div className="profile_header">
                    <h1 style={{ marginTop: "5px" }}>My Carts</h1>
                    <p>Checkouts</p>
                  </div>
                  <div className="notification_form">
                    <div className="carthead">
                      <span className="cartDescript">Descriptions</span>
                      <span className="cartauth">Tutor</span>
                      <span className="cartprice">Price</span>
                    </div>
                    <div className="cartlist_layout">
                      <div className="cartlist_d">
                        <div className="list_frame"></div>
                        <div className="list_detail">
                          <h1 className="list_title">
                            The Complete 2023 Web Development Bootcamp
                          </h1>
                          <p className="listrate">
                            4.7 <StarFill /> <StarFill /> <StarFill />{" "}
                            <StarHalf /> (1000 ratings){" "}
                          </p>
                          <span className="list_point">
                            {" "}
                            <Check /> Intermediate
                          </span>
                          <span className="list_point">
                            {" "}
                            <Check /> 100 hours duration
                          </span>
                          <span className="list_point"></span>
                        </div>
                      </div>
                      <div className="cartlist_author">
                        <p>Dr James Mensah</p>
                      </div>
                      <div className="cartlist_price">
                        <p>GH₵ 200 </p> <s>GH₵ 250</s>
                      </div>
                    </div>
                    <div className="carttotal">
                      <span className="cartDescript"></span>
                      <span className="cartauth">Total</span>
                      <p className="cartprice_t">
                        <span>GH₵</span>200
                      </p>
                    </div>

                    <div className="carttotal">
                      <span className="cartDescript"></span>
                      <span className="cartauth"></span>
                      <span className="cartcheckout"> Checkout</span>
                    </div>
                    <div className="cart_promo">
                      <div className="cartpromo">
                        <p className="promo_h">Promotions</p>
                      </div>
                    </div>

                    <div className="cart_promo">
                      <div className="cartpromo">
                        <input
                          placeholder="Enter Coupon"
                          type="text"
                          onChange={(item) => setcode(item.target.value)}
                        />
                        <span
                          onClick={() => ApplyCoupon()}
                          className="appl_promo"
                        >
                          Apply now
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer">
              <div className="frontitemhover">
                <p>
                  Powered By Cybertec Inc
                  <span style={{ color: "green" }}> @ </span> 2023
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyCart;
