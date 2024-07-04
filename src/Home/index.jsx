//import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/young-man-working-office-with-colleague.jpg'
import banner3 from '../../src/assets/young-business-typing-netbook-keyboard-listening-music.jpg'
import banner4 from '../assets/young-fashion-smiling-hipster-man-city-cafe-lunch-time-with-notebook-suit.jpg'

import Slider from "react-slick";
import { LeftOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import Categories from "./Categories";
import { Link } from "react-router-dom";
// import Requirement from "./Requirement";
import Actionbox from "./Actionbox";
import Requirement from "./Requirement";
import Dreamhome from "./Dreamhome";
import Enquiry from "./Enquiry";
import { useState } from "react";

import { useRef } from "react";
import Modelcomponent from "./Modelcomponent";

const Home = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const [type, setType] = useState('Sell');
    const handletype = (url) => {
        setType(url);
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        navs: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //nextArrow : <NextArrow/>,
        //prevArrow: <PrevArrow/>
    };
    return (
        <>
            <section className="banner overflow-hidden">
                <div className="w-full">
                    <div className="flex items-center flex-wrap">
                        <div className="lg:w-1/2 w-full lg:order-1 order-2">
                            <div className="w-full textwrapper lg:p-10 p-5 z-[9]">
                                <h1 className=" lg:text-[2.5rem] md:text-[2rem] lg:mb-10 mb-4  text-[1.4rem] font-bold text-[#100d84f2]  lg:text-left text-center ">Property to kismat se milti aur bikti hai Search Karne se <span className="block"></span>  <Link to={'/'} className="text-black border-b border-black  lg:mb-10 mb-2  p-2 lg:text-[2rem] md:text-[2rem]  lg:text-left text-center inline-block mx-auto">kismatproperty.com</Link></h1>
                                <div className="w-full  pt-5">
                                    <div className="flex gap-2 pb-5">
                                        {
                                            ['Sell', 'Buy', 'Rent'].map((itm) => (
                                                <>
                                                    <label htmlFor={itm} className={`inline-flex lg:px-3 px-2 shadow-md shadow-blue-500 cursor-pointer  items-center gap-1 py-1  rounded-full ${type == itm ? 'bg-blue-600 text-white' : 'bg-blue-100'} `}>
                                                        <input onClick={() => handletype(itm)} type="radio" name="ok" className="size-4 border  border-blue-300" checked={type == itm} id={itm} />
                                                        <span className="lg:ms-5 ms-1 lg:text-lg text-xs">{itm}</span>
                                                    </label>
                                                </>
                                            ))
                                        }


                                    </div>
                                    <div className="px-2 flex shadow-md shadow-blue-300 rounded-full border border-blue-800 items-center bg-[white]">

                                        <input type="text" placeholder="Search Location" className="w-full px-4 py-2 rounded-full   text-lg outline-none" />
                                       <Link to={'/'}>
                                       <button className="bg-[#2f2e4bf2] px-4 py-2 lg:text-md text-sm text-nowrap rounded-full text-white"> <SearchOutlined className="pr-[5px]" />SEARCH</button>
                                       </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full lg:order-2 order-1">
                            <div className="w-full relative">
                                <Slider
                                    ref={slider => {
                                        sliderRef = slider;
                                    }}
                                    {...settings}>
                                    <div>
                                        <img src={banner1} alt="image" className="w-full lg:h-[600px] h-[300px] object-cover bannerimage" />
                                    </div>
                                    <div>
                                        <img src={banner4} alt="image" className="w-full lg:h-[600px] h-[300px] object-cover bannerimage" />
                                    </div>
                                    <div>
                                        <img src={banner3} alt="image" className="w-full lg:h-[600px] h-[300px] object-cover bannerimage" />
                                    </div>
                                </Slider>
                                <div style={{ textAlign: "center" }}>
                                    <button className="button absolute top-[270px] left-0 border border-blue-800 rounded-full size-10 leading-5 bg-white sliderbutton" onClick={previous}>
                                        <LeftOutlined/>
                                    </button>
                                    <button className="button absolute top-[270px] right-0  border border-blue-800 rounded-full size-10 leading-5 bg-white sliderbutton" onClick={next}>
                                        <RightOutlined/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Categories />
            <Requirement />
            <Actionbox />
            <Enquiry />
            <Dreamhome />
            <Modelcomponent/>

        </>
    )
}

export default Home