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
import Requirement from "./Requirement";
import Dreamhome from "./Dreamhome";
import Enquiry from "./Enquiry";
import { useState } from "react";

import { useRef } from "react";
import axios from "axios";
//import { Input } from "@material-tailwind/react";
// import Modelcomponent from "./Modelcomponent";

const Home = () => {
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState('');
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
    const [showMyModal, setShowMyModal] = useState(false)
    //const handleOnClose = () => setShowMyModal(false)
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
            <Requirement />
            <Actionbox />
            <Enquiry />
            <Dreamhome />
            {
                showMyModal && (
                    <>
                        <div className="fixed z-10 inset-0 overflow-y-auto">

                            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                </div>

                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative z-0">
                                    <div className="bg-[#d7decd] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                                        <div className="w-full pb-5 border-b border-gray-200">
                                            <img src={logo} alt='image' className='mx-auto h-[45px]' />
                                            <button onClick={() => setShowMyModal(false)} className='bg-white   absolute top-[5px] right-[5px] rounded-full size-10 leading-1'><CloseOutlined className='text-md font-bold' /></button>
                                        </div>
                                        <div className="w-full">
                                            {
                                                step == 1 && (
                                                    <>
                                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                            <h3 className="text-2xl leading-6 font-medium text-gray-900 mt-8">Enter your Phone number</h3>
                                                            <div className="mt-3">
                                                                <p className="text-md text-[#0d6efd] font-semibold">We wll send you a verification code on the same number.</p>
                                                            </div>
                                                            <div className="mt-3">
                                                                <input type="text" placeholder="" value={mobile} onChange={(e) => setMobile(e.target.value)} className="rounded-full bg-white text-black w-full py-2 px-2 outline-none" />
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                            {
                                                step == 2 && (
                                                    <>
                                                     <div className="form-group w-full block">
                                                            <label htmlFor="">Enter OTP</label>
                                                            <input type="text" className="w-full p-2" value={otp} onChange={(e) => setOtp(e.target.value)} />
                                                        </div>
                                                    </>
                                                )
                                            }
                                            {
                                                step == 3 && (
                                                    <>
                                                        <div className="form-group w-full block">
                                                            <label htmlFor="">Enter Name</label>
                                                            <input type="text" className="w-full p-2" value={fdata?.name} onChange={handlefdata} />
                                                        </div>
                                                        <div className="form-group w-full block">
                                                            <label htmlFor="">Email</label>
                                                            <input type="text" className="w-full p-2" value={fdata?.email} onChange={handlefdata} />
                                                        </div>
                                                        <div className="form-group w-full block">
                                                            <label htmlFor="">Area</label>
                                                            <input type="text" className="w-full p-2" value={fdata?.area} onChange={handlefdata} />
                                                        </div>
                                                    </>
                                                )
                                            }


                                        </div>
                                    </div>
                                    <div className="bg-[#d7decd] px-4 py-3 pb-6 sm:px-6 sm:flex">
                                        <button onClick={handlerequest} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-8 py-2 bg-[#0d6efd] text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2  sm:ml-3 sm:w-auto sm:text-sm">
                                            NEXT
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}

export default Home