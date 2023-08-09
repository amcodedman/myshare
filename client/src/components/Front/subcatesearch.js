import React, { useEffect, useState, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Lock, Search } from "react-bootstrap-icons";
import { Avatar, IconButton } from "@mui/material";
import FOreignAds from "../reuseables";
import CatTemplete from "./categTemplete";
import { CheckProfile, Checkhover } from "./../utils/responsehover";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import { GeoDetail, GeoGet } from "../../store/actions/geod";
import { useDispatch, useSelector } from "react-redux";

import LoaderView from "../utils/loaderView";
import ProfileNav from "../utils/ProfileBar";
import TopNav from "../utils/pagenav";

import FreezePage from "./Pagefreeze";
import {
  CoursesClear,
  getCourses,
  getCoursesP,
} from "../../store/actions/datacollection";

const SubCategories = () => {
  const { getcategory } = useParams();
  const { getsubcat } = useParams();
  const newcat = decodeURIComponent(getcategory);
  const newsub = decodeURIComponent(getsubcat);
  const dispatch = useDispatch();
  const courses = useSelector((value) => value.coursesl);
  useEffect(() => {
    dispatch(getCourses());
  });
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_SKIP":
        return { ...state, skip: action.payload };
      default:
        return state;
    }
  };
  const init_sort = { sortBy: "_id", order: "desc", limit: 30, skip: 0 };
  const [sort, Setsort] = useReducer(reducer, init_sort);
  const navigateTo = useNavigate();
  useEffect(() => {
    const Skip = sort.skip + sort.limit;
    Setsort({ type: "UPDATE_SKIP", payload: Skip });
  }, []);
  const Loadmore = () => {
    const Skip = sort.skip + sort.limit;
    Setsort({ type: "UPDATE_SKIP", payload: Skip });
    if (Skip > 0) {
      dispatch(getCoursesP(sort));
    }
  };

  useEffect(() => {
    dispatch(getCoursesP(init_sort));
  }, []);

  const [loading, setload] = useState(true);
  const Checkuser = useSelector((item) => item.authuser);
  const [holdp, setholdp] = useState(false);

  const [cat, setcat] = useState(false);
  const [alertProfile, setprofile] = useState(false);
  const [catsub, setsub] = useState(false);

  const location = useSelector((item) => item.geodetails);

  useEffect(() => {
    if (location) {
      if (location.GEOD !== null) {
        if (courses) {
          setload(false);
        }
      }
    }
  });

  useEffect(() => {
    if (location) {
      if (location.GEOD !== null) {
        if (location.GEOD.blockrate > 0) {
          setholdp(true);
        }
      }
    }
  });
  useEffect(() => {
    // dispatch(GeoCookieT())
  }, []);

  useEffect(() => {
    //dispatch(GeoGet())
  }, []);

  useEffect(() => {
    Checkhover(setcat, setsub);
  });
  useEffect(() => {
    CheckProfile(setprofile);
  });

  useEffect(() => {
    dispatch(GeoGet());
  }, []);
  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");
  const [email, setemail] = useState("");
  useEffect(() => {
    if (Checkuser) {
      if (Checkuser.account) {
        setfn(Checkuser.account.firstname);
        setln(Checkuser.account.lastname);
        setemail(Checkuser.account.email);
      }
    }
  });

  const [topads, settopads] = useState(true);

  useEffect(() => {
    if (location) {
      if (location.GEOD) {
        if (location.GEOD.country === "Ghana") {
          settopads(false);
        }
      }
    }
  });
  const Route = useNavigate();
  return (
    <>
      {loading ? (
        <LoaderView />
      ) : (
        <div
          className="mainLayout"
          style={{ minHeight: `${window.innerHeight}px` }}
        >
          {holdp ? (
            <FreezePage
              IP={`${location && location.GEOD ? location.GEOD.ipaddress : ""}`}
              country={`${
                location && location.GEOD ? location.GEOD.country : ""
              }`}
            />
          ) : null}
          <div className="maintop">
            <>{topads ? <FOreignAds settopads={settopads} /> : null}</>
            <TopNav
              setprofile={setprofile}
              topads={topads}
              fn={fn}
              ln={ln}
              email={email}
            />
            {cat ? <CatTemplete catsub={catsub} /> : null}

            <div className="layoutcolumn">
              <div className="layouturl">
                <p
                  onClick={() => {
                  
                      navigateTo("/");
            

                  }}
                >
                  Home
                </p>
                <span>/</span>
                <span>Category</span>
                <span> / </span>
                <p
                  onClick={() => {
                   
                 
                      navigateTo(`/courses/category/${newcat}`);
                 
                  }}
                >
                  {newcat}
                </p>
                <span> / </span>
                <p>{newsub}</p>
              </div>
              {courses && courses.Allcourse
                ? courses.Allcourse.filter(
                    (data) => data.subcategory === newsub
                  ).map((data, index) => {
                    return (
                      <div key={index} className="coursepreColumn">
                        <div
                          style={{
                            backgroundImage: `url('${data.file}')`,
                          }}
                          className="coursepreCboxcolum"
                        ></div>
                        <div className="layoutdetail">
                          <p className="columntitle">{data.title}</p>
                          <p className="columnabstract">{data.abstract}</p>

                          <p className="prevAuthor">
                            {" "}
                            <span>Author </span>Admin
                          </p>
                          <div className="coursevrate">
                            <span>{data.rating}</span>
                            <span className="starrate">
                              <StarFill color=" rgb(153, 153, 0)" size={10} />
                              <StarFill color=" rgb(153, 153, 0)" size={10} />
                              <StarHalf color=" rgb(153, 153, 0)" size={10} />
                            </span>
                            <span>(1000)</span>
                          </div>
                          <div className="enrollnow">
                            <span className="enrollbtn" 
                            onClick={()=>{
                              navigateTo(
`/studycommunity/course/${data.maincategory}/${data.title}/${data._id}`
                              )

                           
                            }}
                            >Learn now</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>

            {alertProfile ? <ProfileNav fn={fn} ln={ln} email={email} /> : <LoaderView />}
          </div>
          <div
            className="frontpage"
            style={{ minHeight: `${window.innerHeight}px` }}
          ></div>
          <div className="footer">
            <div className="frontitemhover">
              <p>
                 Powered By Badu Technologies. All rights reserved
                <span style={{ color: "green" }}> @ </span> 2023
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubCategories;
