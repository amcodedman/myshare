import {combineReducers} from "redux";

import notification from "./notification";
import personal from "./personal";
import geodetails from "./geo";
import Ulocation from "./userLocation";
import authuser from "./authuser";

import newContents from "./Contents";
import coursesl from "./allcourses";
import newCourse from "./newcourse";
import newSection from "./newsection";
import ControlVersion from "./control";
import tokens from "./coupons";
import Cours from "./courseD";
import coursesp from "./coursesp";

const appReducers=combineReducers({
    personal,
    authuser,
    notification,
    geodetails,
    Ulocation,
    newCourse,
    newContents,newSection,coursesl,
    ControlVersion
    ,
    tokens,
    Cours,
    coursesp

})

export default appReducers