//import React from 'react'
import { useState } from "react"
import Modelcomponent from "./Modelcomponent";

const Actionbox = () => {
    const [showMyModal, setShowMyModal] = useState(false)
    const handleOnClose = () => setShowMyModal(false)
    return (
        <>
            <section className='lg:p-10 p-5 actionbox  object-cover w-full'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center lg:p-20  p-10">
                                <p className="text-white font-light lg:text-[1.5rem] md:text-[1.3rem] text-[10px] pb-5">DON’T HESTITATE TO CONTACT US</p>
                                <h1 className="text-white font-bold opacity-3 lg:text-[3rem] md:[2rem] text-[1rem]">MAKE AN APPOINTMENT NOW <span className="block font-light lg:text-[3rem] md:text-[2rem] text-[1rem] pt-5">8595076589</span></h1>
                                <div className="w-full pt-5">
                                    <button onClick={() => setShowMyModal(true)} className="text-white lg:text-[1.2rem] md:text-[1rem] text-[10px]  bg-[#0c3493] lg:px-4 lg:py-2 px-2 py-1  lg:rounded-lg rounded-md
                     ">CONTACT US</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modelcomponent onClose={handleOnClose} visible={showMyModal} />
        </>
    )
}

export default Actionbox