export const setSlider = (value)=>({
    type:'slider',
    payload:value
})


export const sliderReducer = (state=[],action)=>{
    if(action.type==="slider") return action.payload;
    else return state;
}