import {combineReducers} from "redux";
import contacts from "./contact";
import notification from "./notification";
import personal from "./personal";
import geodetails from "./geo";
import Ulocation from "./userLocation";

const appReducers=combineReducers({
    personal,
   
    contacts,
  
    notification,
    
    geodetails,
    Ulocation




})

export default appReducers