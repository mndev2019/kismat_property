//import React from 'react'
import { useState } from 'react'
import building from '../assets/buidingimage.png'
import Modelcomponent from './Modelcomponent'
const Dreamhome = () => {
    const [showMyModal, setShowMyModal] = useState(false)
    const handleOnClose = () => setShowMyModal(false)
    return (
        <>
            <section className=" bg-[#f0f8ffc4]">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1">
                        <div className="col-span-1 p-0">
                            <div className="w-full">
                                <img src={building} alt="image" className='mx-auto'></img>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full lg:p-20 md:p-15 p-10">
                                <h1 className='text-black  font-bold opacity-3 lg:text-[2rem] md:[1rem] text-[1.5rem]'>Are you looking for a dream home?</h1>
                                <p className='text-gray-500 py-5 lg:text-[1.2rem] text-[16px]'>We can help you relize your dream of a new home</p>
                                <p className='text-gray-500 pb-5 lg:text-[1.2rem]  text-[16px]'>Absolutely! Imagine a sanctuary where every detail reflects your desires. Our team specializes in crafting dream homes, tailored to your vision. Let s turn your aspirations into a stunning reality. Dream big with us!</p>
                                <button onClick={() => setShowMyModal(true)} className="text-white lg:text-[1rem] md:text-[1rem] text-[10px]  bg-[#0c3493] lg:px-4 lg:py-2 px-2 py-1  lg:rounded-lg rounded-md
                     ">CONTACT US</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modelcomponent onClose={handleOnClose} visible={showMyModal} />
        </>
    )
}

export default Dreamhome