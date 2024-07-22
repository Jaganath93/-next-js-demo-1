
export const setApartment = (value)=>({
    type:"apartment",
    payload:[...value]
})


export const apartmentReducer = (state=[],action)=>{
    if(action.type==="apartment") return [...(action.payload)]
    else return state;
}