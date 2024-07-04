//import React from 'react'
import enquiry from '../assets/enquiry.png'
const Enquiry = () => {
    return (
        <>
            <section className='lg:p-20 p-10 bg-white'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center pb-10">
                                <h1 className='text-[2rem] text-black font-bold border-b-2 border-[#0c3493] inline-block subtitle relative'>KismatProperty Business Assist Plan For Builders</h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 items center">
                        <div className="col-span-1">
                            <div className="w-full">
                                <img src={enquiry} alt='image' className='mx-auto'></img>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full lg:p-10 p-10 lg:text-left text-center ">
                                <p className='text-lg'>Get in touch with us to Sell or Rent Your Projects</p>
                                <div className='pb-5 text-lg'>For Builder Enquiries: +91 91080 50400</div>
                                <button className="text-white  text-[12px]  bg-[#0c3493]  px-2 py-2  lg:rounded-lg rounded-md
                                ">CONTACT US</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Enquiry