import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowUpCircle, Book, CaretUp, CaretUpFill, Lightning, List, XCircle } from "react-bootstrap-icons";

import FOreignAds from "../reuseables";
import CatTemplete from "./categTemplete";
import { CheckProfile, Checkhover } from "./../utils/responsehover";

import { GeoGet } from "../../store/actions/geod";
import { useDispatch, useSelector } from "react-redux";

import LoaderView from "../utils/loaderView";

import ProfileNav from "../utils/ProfileBar";
import TopNav from "../utils/pagenav";

import FreezePage from "./Pagefreeze";
import { getCourse } from "../../store/actions/datacollection";
import { RawToHtml } from "../utils/rawtohtml";
import MobileNav from "../utils/mobileNav";
import { Icon, IconButton } from "@mui/material";

const CourseStudy = () => {











  const Componentbtn=()=>{


    const btn=document.getElementById("actionbtnup");
    const top=document.documentElement.scrollTop


    if(top>window.innerHeight){
      if(
        btn &&  !btn.classList.contains("showbtnaction")
      ){
        btn.classList.add("showbtnaction")

      }
    }else{
      if(
        btn &&   btn.classList.contains("showbtnaction")
        ){
          btn.classList.remove("showbtnaction")
  
        }

    }
  }


  useEffect(()=>{

    window.addEventListener("scroll",Componentbtn)
  },[])
  const dispatch = useDispatch();
const [menus,setmenu]=useState(false);
  const handleScroll = () => {
    const divElement = document.getElementById("contentslayout");
    const mynav=document.getElementById("topnavs")
    if (divElement) {

      const rect = divElement.getBoundingClientRect();
      const navtop = document.documentElement.scrollTop
    
       
           
            if (rect.top <= 1) {
              
                if (!(divElement.classList.contains("contentfixed"))){
           
                    divElement.classList.remove("contentslayout");
                    divElement.classList.add("contentfixed");
                  
                }

              

              } 

              if(navtop <50

              ){

                
                if ((divElement.classList.contains("contentfixed"))){
           
                    divElement.classList.add("contentslayout");
                    divElement.classList.remove("contentfixed");
                  
                }

              }
         


      


    

    }
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only on mount and unmount

  const { courseid } = useParams();
  const cours = useSelector((value) => value.Cours);
  const [mycourse, setcourse] = useState(null);
  const [showcontents, setcontents] = useState("overview");

  const displaycontent = (data) => {
    if (showcontents === "overview") {
      return (
        <>
          <div className="courdescr">
            <h1> {data.title}</h1>
            <h2>
              {" "}
              <span
                style={{
                  fontSize: "18px",
                  color: " rgb(8, 113, 113)",
                }}
              >
                Category
              </span>{" "}
              {data.maincategory}
            </h2>
            <h2>
              {" "}
              <span
                style={{
                  fontSize: "18px",
                  color: " rgb(8, 113, 113)",
                }}
              >
                <span>
                  <Lightning color="aqua" />
                </span>{" "}
                7 hours
              </span>{" "}
              read{" "}
              <span>
                {" "}
                <Book />
              </span>
            </h2>

            <span
              style={{
                fontSize: "18px",
                color: " rgb(8, 113, 113)",
                marginTop: "20px",
              }}
            >
              Course Outcome:{" "}
            </span>
            <p> {data.expections}</p>

            <span
              style={{
                fontSize: "18px",
                color: " rgb(8, 113, 113)",
                marginTop: "20px",
              }}
            >
              Description
            </span>
            <p> {data.detail}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
        
          {data.contents
            .filter((values) => values._id === showcontents)
            .map((item, index) => {
              return (
                <div key={index}>
                  <div className="courdescr">
                    <h1> {item.title}</h1>
                    <h2>
                      {" "}
                      <span
                        style={{
                          fontSize: "18px",
                          color: " rgb(8, 113, 113)",
                        }}
                      >
                        Description
                      </span>{" "}
                      {item.abstract}
                    </h2>

                    <div>
                      {item.sections ? (
                        item.sections.map((section, secindex) => {
                          return (
                            <div className="courdescr" id={section._id}>
                              <span
                                style={{
                                  fontSize: "18px",
                                  color: " rgb(8, 113, 113)",
                                  marginTop: "30px",
                                }}
                              >
                                {section.title}
                              </span>

                              <div className="roomcontent">
                                {RawToHtml(section.detail)}
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <span>No content Yet</span>
                      )}

                      {}
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      );
    }
  };
  useEffect(() => {
    dispatch(getCourse(courseid));
  }, [dispatch, courseid]);

  useEffect(() => {
    if (cours && cours.data) {
      setcourse(cours.data.course);
    }
  });

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
        if (cours && cours.data) {
          if (cours.data.course) {
            setload(false);
          }
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
         <div className="actionbtnup" id="actionbtnup" style={{top:`${window.innerHeight-80}px`}}><IconButton
           
           
           
           onClick={()=>{
          document.documentElement.scrollTo(0,0)
            
           }}> <CaretUpFill color=" rgb(163, 172, 171)" size={25}/></IconButton></div>
 
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
         <div className="desktopNav" id="topnavs">
            <TopNav
              setprofile={setprofile}
              topads={topads}
              fn={fn}
              ln={ln}
              email={email}
            />

            </div>
            <div className="mobiletopNav">    
  <MobileNav     setprofile={setprofile}
              topads={topads}
              fn={fn}
              ln={ln}
              email={email}/></div>
           
            {cat ? <CatTemplete catsub={catsub} /> : null}

            <div
              className="layoutstudy"
              style={{
                minHeight: `${window.innerHeight}px`,
              }}
            >
      
            <div className=" contentslayoutfix desktopNav">
                <div
                  id="contentslayout"
                  className="contentslayout"
                  tyle={{
                    minHeight: `${window.innerHeight}px`,
                  }}
                >
                  <div
                    className="coursehead"
                    onClick={() => {
                      setcontents("overview");
                    }}
                    style={{
                      backgroundColor: `${
                        showcontents === "overview"
                          ? "rgb(193, 199, 197)"
                          : "rgb(193, 199, 197,0)"
                      }`,
                    }}
                  >
                    Course Overview
                  </div>

                  {mycourse && mycourse.contents
                    ? mycourse.contents.map((data, index) => {
                        return (
                          <>
                            <div
                              key={index}
                              className="course_c"
                              style={{
                                backgroundColor: `${
                                  showcontents === data._id
                                    ? "rgb(122, 124, 124)"
                                    : ""
                                }`,
                              }}
                              onClick={() => {
                                setcontents(data._id);
                              }}
                            >
                              {data.title}
                            </div>

                            {showcontents === data._id
                              ? data.sections.map((items, indes) => {
                                  return (
                                    <div
                                      className="coursesub"
                                      onClick={() =>
                                        document
                                          .getElementById(`${items._id}`)
                                          .scrollIntoView({
                                            behavior: "smooth",
                                          })
                                      }
                                    >
                                      <div>
                                        <p style={{ fontSize: "14px" }}>
                                          {" "}
                                          {items.title}
                                        </p>
                                      </div>
                                      <div className="breaklinei"></div>
                                    </div>
                                  );
                                })
                              : null}

                            <div className="breakline"></div>
                          </>
                        );
                      })
                    : null}
                </div>
              </div>
              <div className="mobiletopNav"><IconButton
               onClick={()=>setmenu(!menus)}>{
                menus ?
                <XCircle  color="black" size={30}/>
                :
                <List color="black" size={30}/>
               }

             
              </IconButton></div>
{
  menus ?
  
  <div className=" contentslayoutfixm mobiletopNav">
                <div
                  id="contentslayout"
                  className="contentslayout"
                  tyle={{
                    minHeight: `${window.innerHeight}px`,
                  }}
                >
                  <div
                    className="coursehead"
                    onClick={() => {
                      setcontents("overview");
                    }}
                    style={{
                      backgroundColor: `${
                        showcontents === "overview"
                          ? "rgb(193, 199, 197)"
                          : "rgb(193, 199, 197,0)"
                      }`,
                    }}
                  >
                    Course Overview
                  </div>

                  {mycourse && mycourse.contents
                    ? mycourse.contents.map((data, index) => {
                        return (
                          <>
                            <div
                              key={index}
                              className="course_c"
                              style={{
                                backgroundColor: `${
                                  showcontents === data._id
                                    ? "rgb(122, 124, 124)"
                                    : ""
                                }`,
                              }}
                              onClick={() => {
                                setcontents(data._id);
                              }}
                            >
                              {data.title}
                            </div>

                            {showcontents === data._id
                              ? data.sections.map((items, indes) => {
                                  return (
                                    <div
                                      className="coursesub"
                                      onClick={() =>
                                        document
                                          .getElementById(`${items._id}`)
                                          .scrollIntoView({
                                            behavior: "smooth",
                                          })
                                      }
                                    >
                                      <div>
                                        <p style={{ fontSize: "14px" }}>
                                          {" "}
                                          {items.title}
                                        </p>
                                      </div>
                                      <div className="breaklinei"></div>
                                    </div>
                                  );
                                })
                              : null}

                            <div className="breakline"></div>
                          </>
                        );
                      })
                    : null}
                </div>
              </div>
              :null

}

            

              <div
                className="maincourselayout"
                tyle={{
                  minHeight: `${window.innerHeight}px`,
                }}
              >
                {displaycontent(mycourse)}
              </div>
            </div>

            {alertProfile ? <ProfileNav fn={fn} ln={ln} email={email} /> : null}
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

export default CourseStudy;
