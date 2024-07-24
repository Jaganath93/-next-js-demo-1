import { APARTMENT, GET_APARTMENTS_FETCH, LOCATION } from "./actions";

export const setLocation = (value)=>({
    type:LOCATION,
    payload: value
})

export const getApartmentsFetch = ()=>{
    return {type: GET_APARTMENTS_FETCH}
};


export const setApartment = (value)=>({
    type:APARTMENT,
    payload:value
})