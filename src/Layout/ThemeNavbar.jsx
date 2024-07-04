//import React from 'react'
import { PhoneOutlined } from "@ant-design/icons"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
const ThemeNavbar = () => {
    return (
        <>
            <section className="px-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 px-10 justify-between">
                        <div className="col-span-1">
                            <div className="w-full lg:flex lg:justify-between  items-center">
                                <div>
                                    <img src={logo} alt="image" className="h-[70px] w-[200px] mx-auto"></img>
                                    
                                </div>
                                <div className="lg:block hidden">
                                    <Link to={'/'}  className="text-[#100d84f2] text-2xl pr-2">
                                        <PhoneOutlined />
                                    </Link>
                                    <span className="text-black font-normal text-lg">+91-9100523011</span>
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