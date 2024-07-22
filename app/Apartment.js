"use client";
import { useSelector } from "react-redux";
import { setApartment } from "./slices/apartmentReducer";
import { useState, useEffect } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { data } from "./data";


export const Apartment = ()=>{

    // const [apartment, setApartMents] = useState([]);
    const [all, setAll] = useState(true);
    const [twoBhk, setTwoBhk] = useState(false);
    const [threeBhk, setThreeBhk] = useState(false);

    const location = useSelector((state)=> state.location);
    const apartment = useSelector((state)=> state.apartment);
    console.log(apartment)

    useEffect(()=>{
        const filteredData = data.filter((dt)=>dt.location === location);
        const mysApartments = filteredData[0].apartments;
        setApartment(mysApartments);
    },[location]);

    const handleFilterTwo = ()=> {
        setThreeBhk(false);
        setAll(false);
        setTwoBhk(true);
        const filteredData = data.filter((dt)=>dt.location === location);
        const apartmentArray = filteredData[0].apartments;
        const apartmentTwoBhk = apartmentArray?.filter((apt)=> apt.bhk === 2);
        if(apartmentTwoBhk.length>0) setApartment(apartmentTwoBhk) 
    }

    const handleFilterThree = ()=> {
        setTwoBhk(false);
        setAll(false);
        setThreeBhk(true);
        const filteredData = data.filter((dt)=>dt.location === location);
        const apartmentArray = filteredData[0].apartments;
        const apartmentThreeBhk = apartmentArray?.filter((apt)=> apt.bhk ===3);
        if(apartmentThreeBhk.length>0) setApartment(apartmentThreeBhk) 
    };

    const handleFilterAll = ()=>{
        setTwoBhk(false);
        setThreeBhk(false);
        setAll(true);
        const filteredData = data.filter((dt)=>dt.location === location);
        const apartmentArray = filteredData[0].apartments;
        setApartment(apartmentArray)
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