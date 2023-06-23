import {combineReducers} from "redux";

import notification from "./notification";
import personal from "./personal";
import geodetails from "./geo";
import Ulocation from "./userLocation";
import authuser from "./authuser";

const appReducers=combineReducers({
    personal,
    authuser,
    notification,
    geodetails,
    Ulocation
})

export default appReducers