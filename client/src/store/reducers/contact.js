import {USER_DETAIL} from "./../type";
export default function contacts(state=null,action){
    switch(action.type){
        case USER_DETAIL:
            return {...state,CONTACTS:action.payload};
        default:
            return state;
    }
}
