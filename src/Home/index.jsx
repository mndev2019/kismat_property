//import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/young-man-working-office-with-colleague.jpg'
import banner3 from '../../src/assets/young-business-typing-netbook-keyboard-listening-music.jpg'
import banner4 from '../assets/young-fashion-smiling-hipster-man-city-cafe-lunch-time-with-notebook-suit.jpg'
import logo from '../../src/assets/logo.png'
import Slider from "react-slick";
import { CloseOutlined, LeftOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import Categories from "./Categories";
import { Link } from "react-router-dom";
// import Requirement from "./Requirement";
import Actionbox from "./Actionbox";
import whatsapp from "../assets/whatsapp.jpg"
import { WhatsAppOutlined } from "@ant-design/icons";
import Requirement from "./Requirement";
import Dreamhome from "./Dreamhome";
import Enquiry from "./Enquiry";
import { useState } from "react";

import { useRef } from "react";
import axios from "axios";
import Modelcomponent from "./Modelcomponent";
//import { Input } from "@material-tailwind/react";
// import Modelcomponent from "./Modelcomponent";

const Home = () => {
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState('');
    const [showMyModal, setShowMyModal] = useState(false)
    const handleOnClose = () => setShowMyModal(false)
    const [otp, setOtp] = useState('');
    const [fdata, setFdata] = useState({ name: "", email: "", mobile: mobile, area: "" });
    const handlerequest = async () => {
        // return  setStep(step + 1);
        const data = {
            ...fdata
        }
        await axios.post("http://192.168.1.14:2130/send_email", data)
            .then(res => {
                setStep(step + 1);
                console.log(res)
            })
    }
    const handlefdata = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setFdata(prev => ({ prev, [name]: val }));
    }
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

    //const handleOnClose = () => setShowMyModal(false)
    return (
        <>
            <section className="banner overflow-hidden">
                <div className="w-full">
                    <div className="flex items-center flex-wrap">
                        <div className="lg:w-1/2 w-full lg:order-1 order-2">
                            <div className="w-full textwrapper lg:p-10 p-5 z-[9]">
                                <h1 className=" lg:text-[2.5rem] md:text-[2rem] lg:mb-10 mb-4  text-[1.4rem] font-bold text-[#100d84f2]  lg:text-left text-center ">Property tho kismat se milti aur bikti hai  <span className="block"></span>  <Link to={'/'} className="text-black border-b border-black  lg:mb-10 mb-2  p-2 lg:text-[2rem] md:text-[2rem]  lg:text-left text-center inline-block mx-auto">kismatproperty.com</Link></h1>
                                <div className="w-full  pt-5">
                                    <div className="flex gap-2 pb-5 justify-center md:justify-start">
                                        {
                                            ['Sell', 'Buy', 'Rent', 'Post Property'].map((itm) => (
                                                <>
                                                    <label htmlFor={itm} onClick={() => { handletype(itm); setShowMyModal(true) }} className={`inline-flex lg:px-3 px-2 shadow-md shadow-blue-500 cursor-pointer  items-center gap-1 py-1  rounded-full ${type == itm ? 'bg-blue-600 text-white' : 'bg-blue-100'} `}>
                                                        {/* <input type="radio" name="ok" className="size-4 border  border-blue-300" checked={type == itm} id={itm} /> */}
                                                        <span class="px-2 md:px-4 lg:text-lg text-xs">{itm}</span>
                                                    </label>
                                                </>
                                            ))
                                        }
                                    </div>
                                    <div onClick={() => setShowMyModal(true)} className="px-2 flex shadow-md shadow-blue-300 rounded-full border border-blue-800 items-center bg-[white]">
                                        <input type="text" placeholder="Search Location" className="w-full px-4 py-2 rounded-full   text-lg outline-none" />
                                        <button className="bg-[#2f2e4bf2] px-4 py-2 lg:text-md text-sm text-nowrap rounded-full text-white"> <SearchOutlined className="pr-[5px]" />SEARCH</button>
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
                                        <LeftOutlined />
                                    </button>
                                    <button className="button absolute top-[270px] right-0  border border-blue-800 rounded-full size-10 leading-5 bg-white sliderbutton" onClick={next}>
                                        <RightOutlined />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Categories />
            {/* <Requirement /> */}
            <Actionbox />
            <Enquiry />
            <Dreamhome />
            {
                showMyModal && (
                    <>
                        <Modelcomponent onClose={handleOnClose} visible={showMyModal} />
                    </>
                )
            }

            <a
                href="https://wa.me/+918595076589"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4  text-white p-3 rounded-full   transition-colors"
                aria-label="Contact us on WhatsApp"
            >
                {/* <WhatsAppOutlined /> */}
                <img src={whatsapp} alt="" className="" style={{ height: "70px" }} />
            </a>

        </>
    )
}

export default Home