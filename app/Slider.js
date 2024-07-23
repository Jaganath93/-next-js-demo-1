// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
"use client";
import Image from 'react-bootstrap/Image';

import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { setSlider } from './slices/sliderReducer';
import { useEffect } from 'react';

export function Slider() {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const sliderData = ()=>{
            dispatch(setSlider(["https://zameensquare.com/_next/static/media/homeHeaderImage.25bb3789.gif","https://zameensquare.com/_next/static/media/Get-Our-Mobile-App-Now-web(new).d119e432.gif","https://zameensquare.com/_next/static/media/Post-Property-Banner.f6ea47b2.jpg"]));
        }

        sliderData()
    },[])

    const slideImgs = useSelector((state)=> state.slider)
  return (
    <Carousel className='mt-5'>
    {slideImgs?.map((slide,i)=>(
        <Carousel.Item key={i}>
        <Image src={slide} fluid />
        </Carousel.Item>
    ))}
  </Carousel>
  );
}

