
export const setLocation = (value)=>({
    type:'location',
    payload: value
})


export const locationReducer = (state="Mysuru",action)=>{
    if(action.type === "location") return action.payload;
    else return state;
};