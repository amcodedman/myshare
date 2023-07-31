import {COURSEBYID} from "../type";



export default function Cours(state=null,action){
    switch(action.type){
        case COURSEBYID:
            return {...state,data:action.payload};
        default:
            return state;
    }
}
