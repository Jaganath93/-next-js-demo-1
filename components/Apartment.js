"use client";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Cards } from "../components/Cards";
import axios from "axios";
import { API } from "../config/api";
import { getApartmentsFetch, setApartment } from "@/redux/saga/actionsCreators";


export const Apartment = ()=>{

    const dispatch = useDispatch();

    const [all, setAll] = useState(true);
    const [twoBhk, setTwoBhk] = useState(false);
    const [threeBhk, setThreeBhk] = useState(false);

    const location = useSelector((state)=> state.location);
    const apartmentData = useSelector((state)=> state.apartment);
    const apartment = useSelector((state)=> state.getApartMentReducer);



    useEffect(()=>{
        const fetchApartment = ()=> dispatch(getApartmentsFetch());
        fetchApartment();

        const fetchData = async()=>{
        try {
        const filteredData = apartmentData?.filter((dt)=>dt.location === location);
        const mysApartments = filteredData[0].apartments;
        // console.log(mysApartments);
        dispatch(setApartment(mysApartments));
        } catch (error) {
            console.error("Error Occured", error);
        }
        };

        fetchData();
        
    },[location,all,twoBhk,threeBhk]);

    const handleFilterTwo = ()=> {
        setThreeBhk(false);
        setAll(false);
        setTwoBhk(true);
        // const filteredData = apartmentData?.filter((dt)=>dt.location === location);
        // const apartmentArray = filteredData[0].apartments;
        const apartmentTwoBhk = apartment?.filter((apt)=> apt.bhk === 2);
        if(apartmentTwoBhk.length>0) dispatch(setApartment(apartmentTwoBhk)) 
    }

    const handleFilterThree = ()=> {
        setTwoBhk(false);
        setAll(false);
        setThreeBhk(true);
        // const filteredData = apartmentData?.filter((dt)=>dt.location === location);
        // const apartmentArray = filteredData[0].apartments;
        const apartmentThreeBhk = apartment?.filter((apt)=> apt.bhk ===3);
        if(apartmentThreeBhk.length>0) dispatch(setApartment(apartmentThreeBhk)) 
    };

    const handleFilterAll = ()=>{
        setTwoBhk(false);
        setThreeBhk(false);
        setAll(true);
        // const filteredData = apartmentData?.filter((dt)=>dt.location === location);
        // const apartmentArray = filteredData[0].apartments;
        dispatch(setApartment(apartment))
    }

     //Carousel Part

     const responsive = {
        0: { items: 1 },
        568: { items: 1.5 },
        713: {items:2},
        1024: { items: 2.5 },
        1200: {items:3.5}
    };

    const carouselData = apartment.map((apt,i)=> <Cards data={apt} key={i} bhk={true}/>)
    
    const items = [...(carouselData)];

    return(
        <div className="container-fluid">
            <div className="row mt-md-5 pt-5">
                <div className="col-12 col-sm-8 col-md-6 col-lg-5">
                <h3 className="fw-normal">Popular Apartment in {location}</h3>
                </div>
                <div className="d-none d-sm-block col-4 col-md-6">
                    <button className={`border-0 rounded-2 ${all ? 'bhk-col' : ""}`} onClick={handleFilterAll}>All</button>
                    <button className={`ms-1 ms-md-3 border-0 rounded-2 ${twoBhk ? 'bhk-col' : ""}`} onClick={handleFilterTwo}>2 BHK</button>
                    <button className={`ms-1 ms-md-3 border-0 rounded-2 ${threeBhk ? 'bhk-col' : ""}`} onClick={handleFilterThree}>3 BHK</button>
                </div>
            </div>

            {/* Carousel */}
            <div className="row mt-5">      
                <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls={true}
    />
            </div>

        </div>
    );
};