//import React from 'react'
import { PhoneOutlined } from "@ant-design/icons"
import logo from "../assets/logo.png"
import mainlogo from "../assets/mainlogo.png"
import { Link } from "react-router-dom"
const ThemeNavbar = () => {
    return (
        <>
            <section className="sm:px-5 sm:mt-4 my-2" >
                <div className="sm:container mx-auto">
                    <div className="grid grid-cols-1 justify-between">
                        <div className="col-span-1">
                            <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center">
                                <div className="flex gap-2 items-center justify-between w-full lg:w-auto">
                                    <img src={mainlogo} className="h-[70px] mx-auto lg:mx-0" alt="Main Logo" />
                                    <img src={logo} alt="Logo" className="h-[35px] sm:h-[50px] mt-2 mx-auto lg:mx-0" />
                                </div>
                                <div className="mt-4 lg:mt-0 lg:block hidden text-center lg:text-right">
                                    <Link to={'/'} className="text-[#100d84f2] text-2xl pr-2">
                                        <PhoneOutlined />
                                    </Link>
                                    <span className="text-black font-normal text-lg">+91-8595076589</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ThemeNavbar