import {CONTENTS} from "./../type";



export default function newContents(state=null,action){
    switch(action.type){
        case CONTENTS:
            return {...state,Contents:action.payload};
        default:
            return state;
    }
}


