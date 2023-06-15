import {GeoActive} from "./../type"



export default function Ulocation(state=null,action){
    switch(action.type){
        case GeoActive:
            return {...state,Location:action.payload}
        default:
            return {}
    }
}