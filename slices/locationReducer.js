import { LOCATION } from "@/redux/saga/actions";




export const locationReducer = (state="Mysuru",action)=>{
    if(action.type === LOCATION) return action.payload;
    else return state;
};