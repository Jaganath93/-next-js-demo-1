import {call, put, take, takeEvery} from "redux-saga/effects"
import { GET_APARTMENTS_FAILURE, GET_APARTMENTS_FETCH, GET_APARTMENTS_SUCCESS } from "./actions";
import axios from "axios";
import { API } from "@/config/api";

async function apartmentFetch(){
    return axios.get(`${API}`).then((res)=> res.data).catch((err)=> {throw err})

    // try {
    //     const data = axios.get(`${API}`);
    //      const filteredData = data.filter((dt)=>dt.location === "Mysuru");
    //     const mysApartments = filteredData[0].apartments;
    //     return mysApartments
    // } catch (error) {
    //     throw error
    // }
}


function* getApartMents(){
    try {
        const apartments =yield call(apartmentFetch);
        yield put({type: GET_APARTMENTS_SUCCESS, apartments}) 
    } catch (error) {
        yield put({type: GET_APARTMENTS_FAILURE, error}) 
    }
}

export function* rootSaga(){
    yield take(GET_APARTMENTS_FETCH);
    yield call(getApartMents)
}