//import React from 'react'
import category from '../assets/categories1.svg'
import category2 from '../../src/assets/category2.svg'
import category3 from '../assets/category3.svg'

const Categories = () => {
  return (
    <section className='p-5 lg:pb-20 pb-10 '>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <div className="w-full text-center py-10">
              <h1 className='text-[2rem] text-black font-bold border-b-2 border-[#0c3493] inline-block subtitle relative py-3'>What we are providing</h1>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className="col-span-1 ">
           
              <div className="w-full h-full border border-blue-100 shadow-md shadow-[#7270a0f2] rounded-xl p-10 bg-white">
                <img src={category} alt='image'></img>
                <h1 className='text-black text-[1.5rem] font-bold pt-5'>Property Management</h1>
                <p className='text-black text-lg pt-3 '>We provide a range of services to property owners and landlords to help them effectively manage their real estate investments.</p>
              </div>
           
          </div>
          <div className="col-span-1">
            
              <div className="w-full h-full border border-blue-100 shadow-md shadow-[#7270a0f2] rounded-xl p-10 bg-white">
                <img src={category2} alt='image'></img>
                <h1 className='text-black text-[1.5rem] font-bold pt-5'>Home Buying</h1>
                <p className='text-black text-lg pt-3 '>Planning to buy home? We offer a range of assistance to make the home buying process smoother and more convenient for the buyer.</p>
              </div>
            
          </div>
          <div className="col-span-1">
            
              <div className="w-full h-full border border-blue-100 shadow-md shadow-[#7270a0f2] rounded-xl p-10 bg-white">
                <img src={category3} alt='image'></img>
                <h1 className='text-black text-[1.5rem] font-bold pt-5'>Renting Home</h1>
                <p className='text-black text-lg pt-3 '>Planning to buy home? We offer a range of assistance to make the home buying process smoother and more convenient for the buyer. the buyer.</p>
              </div>
            
          </div>
          <div className="col-span-1">
            
              <div className="w-full h-full border border-blue-100 shadow-md shadow-[#7270a0f2] rounded-xl p-10 bg-white">
                <img src={category} alt='image'></img>
                <h1 className='text-black text-[1.5rem] font-bold pt-5'>Consulting Service</h1>
                <p className='text-black text-lg pt-3 '>A team of professionals to advice and expertise to individuals, businesses, or organizations involved in various aspects of the real estate industry.</p>
              </div>
           
          </div>
          <div className="col-span-1">
            
              <div className="w-full h-full border border-blue-100 shadow-md shadow-[#7270a0f2] rounded-xl p-10 bg-white">
                <img src={category2} alt='image'></img>
                <h1 className='text-black text-[1.5rem] font-bold pt-5'>Home Selling </h1>
                <p className='text-black text-lg pt-3 '>Whether you are an individual homeowner, real estate investor, we assist in marketing, selling, and closing the sale of your property.

                </p>
              </div>
            
          </div>
          <div className="col-span-1">
            
              <div className="w-full h-full border border-blue-100 shadow-md shadow-[#7270a0f2] rounded-xl p-10 bg-white">
                <img src={category3} alt='image'></img>
                <h1 className='text-black text-[1.5rem] font-bold pt-5'>Escrow Service</h1>
                <p className='text-black text-lg pt-3 '>We are serving as a neutral third party that facilitates the closing process and ensures that the terms and conditions of the sale are met.</p>
              </div>
           
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1">
          
        </div>
      </div>
    </section>
  )
}

export default Categories
