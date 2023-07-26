import { COURSES } from "../type";



export default function coursesl(state=null,action){

    switch(action.type){
        case COURSES:
            return {...state, Allcourse:action.payload}
        default:
            return state
    }



}