//import React from 'react'
import requirement1 from '../assets/requirement1.png'
import requirement2 from '../assets/requirement2.png'
import requirement3 from '../assets/requirement3.png'
import requirement4 from '../assets/requirement4.png'

const Requirement = () => {
  return (
    <>
      <section className="p-5 lg:pb-20 pb-10 bg-white">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <div className="w-full text-center pt-5 pb-10">
                <h1 className='text-[2rem] text-black font-bold border-b-2 border-[#0c3493] inline-block subtitle relative  py-3'>Why Use Kismat Property</h1>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
            <div className="col-span-1">
              <div className="w-full text-center">
                <img src={requirement1} alt="image" className='mx-auto'></img>
                <p className='text-black text-[1.2rem] font-light py-4'>Avoide Brokers</p>
                <p className='text-black font-bold'>We directly connect you to verified
                  owners to save brokerage</p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full text-center">
                <img src={requirement2} alt="image" className='mx-auto'></img>
                <p className='text-black text-[1.2rem] font-light py-4'>Avoide Brokers</p>
                <p className='text-black font-bold'>We directly connect you to verified
                  owners to save brokerage</p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full text-center">
                <img src={requirement3} alt="image" className='mx-auto'></img>
                <p className='text-black text-[1.2rem] font-light py-4'>Avoide Brokers</p>
                <p className='text-black font-bold'>We directly connect you to verified
                  owners to save brokerage</p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full text-center">
                <img src={requirement4} alt="image" className='mx-auto'></img>
                <p className='text-black text-[1.2rem] font-light py-4'>Avoide Brokers</p>
                <p className='text-black font-bold'>We directly connect you to verified
                  owners to save brokerage</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Requirement
