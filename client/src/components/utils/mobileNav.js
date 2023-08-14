import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ChevronCompactRight,
  List,
  Search,
  XCircle,
  XLg,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckProfile } from "./responsehover";
import { CheckTopAds } from "./reuseable";
import { getCourses } from "../../store/actions/datacollection";

const MobileNav = (props) => {
  const [showsub, setshowsub] = useState(false);

  // Disable scrolling
  function disableScroll() {
    // Save the current scroll position
    var scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    // Add styles to make the page fixed at the current scroll position
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
  }

  // Enable scrolling
  function enableScroll() {
    // Get the previous scroll position from the style attribute
    var scrollPosition = parseInt(document.body.style.top, 10);

    // Remove the fixed positioning and restore the scroll position
    document.body.style.position = "";
    document.body.style.top = "";

    // Scroll back to the original position
    window.scrollTo(0, scrollPosition);
  }

  const [searchvalue, setSearchValue] = useState("");
  const Checkuser = useSelector((item) => item.authuser);
  const [showsearch, setdisplay] = useState(false);
  const [showmennu, setmenu] = useState(false);

  const Route = useNavigate();
  const handlesearchbox = (event) => {
    setSearchValue(event.target.value);
  };
  const navigateTo = useNavigate();

  const dispatch = useDispatch();
  const courses = useSelector((value) => value.coursesl);
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  const [categories, setcat] = useState([]);
  const [subcategories, setsubcat] = useState([]);
  const [catset, setcate] = useState("");
  
  let Arraysubcat = [];

  useEffect(() => {
    let Arraycat = [];
    if (courses) {
      if (courses.Allcourse) {
        courses.Allcourse.map((data) => {
          if (!Arraycat.includes(data.maincategory)) {
            Arraycat.push(data.maincategory);
          }
        });
        setcat(Arraycat);
      }
    }
  },[courses]);

  const GetSubcat = (value) => {
    courses.Allcourse.filter((data) => data.maincategory === value).map(
      (value) => {
        if (!Arraysubcat.includes(value.subcategory)) {
          Arraysubcat.push(value.subcategory);
        }
      }
    );

    setsubcat(Arraysubcat);
  };

  return (
    <div style={{ width: "100%" }}>
      <>
        {showmennu ? (
          <div
            className="mainmenu"
            style={{
              minHeight: `${window.innerHeight + 100}px`,
              width: `${window.innerWidth}px`,
            }}
          >
            <div
              className="menu_left"
              style={{ minHeight: `${window.innerHeight}px` }}
            >
              <>
                {Checkuser && Checkuser.auth ? (
                  <>
                    <div className="uavatar " onClick={() =>{ 
                      enableScroll()
                      Route("/user")}}>
                      <p className="presshoverAv">
                        {props.fn.charAt(0)}
                        {props.ln.charAt(0)}
                      </p>
                    </div>
                    <p className="menu_p">
                      {props.fn} {props.ln}
                    </p>
                  </>
                ) : (
                  <>
                    <span onClick={() =>{ 
                      enableScroll()

                      Route("/user/Signup")}} className="menu_p">Join us</span>
                    <span onClick={() => {
                         enableScroll()
                      Route("/user/login")}} className="menu_p">Login </span>
                  </>
                )}
              </>

              <div className="breaklinei">
                <p className="menu_h1">
                  Categories{" "}
                  {showsub ? (
                    <span>
                      <IconButton onClick={() => setshowsub(false)}>
                        {" "}
                        <ArrowLeft color="dark" size={15} />
                      </IconButton>
                    </span>
                  ) : null}
                </p>

                {showsub ? (
                  <>
                    {subcategories
                      ? subcategories.map((data, index) => {
                          return (
                            <>
                              <div
                                onClick={() => {
                                  setmenu(false);

                                  navigateTo(
                                    `/courses/category/${catset}/${data}`
                                  );
                                }}
                                className="content_layout"
                              >
                                <span>{data}</span>
                              </div>
                              <div className="linebtn"></div>
                            </>
                          );
                        })
                      : null}
                  </>
                ) : (
                  <>
                    {categories
                      ? categories.map((data, index) => {
                          return (
                            <>
                              <div
                                onMouseOver={() => {
                                  setcate(data);
                                  GetSubcat(data);
                                }}
                                className="content_layout"
                              >
                                <span
                                  onClick={() => {
                                    setmenu(false);
                                    enableScroll()
                                    navigateTo(`/courses/category/${data}`);
                                  }}
                                >
                                  {data}
                                </span>
                                <span
                                  onClick={() => {
                                    setshowsub(true);
                                  }}
                                >
                                  <ChevronCompactRight />
                                </span>
                              </div>
                              <div className="linebtn"></div>
                            </>
                          );
                        })
                      : null}
                  </>
                )}
              </div>
            </div>
            <div
              className="menu_right"
              style={{ minHeight: `${window.innerHeight}px` }}
            >
              <span className="menu_right_span">
                <IconButton
                  onClick={() => {
                    setmenu(false);
                    enableScroll();
                  }}
                >
                  <XLg color="white" size={25} />{" "}
                </IconButton>
              </span>
            </div>
          </div>
        ) : null}
      </>

      {showsearch ? (
        <div className="mobileNav">
          <div className="displayrow">
            {" "}
            <input
              type="text"
              className="searchboxMobile"
              id="searchid"
              name="search"
              onChange={handlesearchbox}
              value={searchvalue}
            />
            {searchvalue !== "" ? (
              <span className="searchbuttonmobile">
                <IconButton 
                  onClick={() => navigateTo(`/courses/search/${searchvalue}`)}
              
                 >
                  <Search size={15} color="black" />
                </IconButton>{" "}
              </span>
            ) : null}
          </div>
          <IconButton
            onClick={() => {
              setdisplay(false);
            }}
          >
            {" "}
            <XCircle />
          </IconButton>
        </div>
      ) : (
        <div className="mobileNav">
          <div className="companyname" onClick={() => navigateTo("/")}>
            {" "}
            <img
              style={{ width: "35px", height: "35px" }}
              alt=""
              src="https://myportfoliocontent.s3.eu-north-1.amazonaws.com/ControllerImg/myshare.png31468.422511441375"
            />{" "}
            <p>MyShare</p>
          </div>

          <span>
            <IconButton
              onClick={() => {
                setmenu(true);
                disableScroll();
              }}
            >
              <List />
            </IconButton>{" "}
            <IconButton
              onClick={() => {
                setdisplay(true);
              }}
            >
              <Search />
            </IconButton>
          </span>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
