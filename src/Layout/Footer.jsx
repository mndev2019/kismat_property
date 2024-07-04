//import React from 'react'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
import logo from '../assets/footer.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section className="lg:p-20 p-10 bg-gray-900 footer">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            <div className="col-span-1">
              <div className="w-full footer-box">
                <img src={logo} alt='image' className='bg-[white] rounded-lg h-[70px]'></img>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full">
                <h1 className='text-white text-xl font-bold'>Contact Us</h1>
                <ul className='p-0'>
                  <li className='text-gray-400 pt-3 text-lg'>8595076589</li>
                  <li className='text-gray-400 pt-3 text-lg'>Kismatpropertycustomer@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full">
                <h1 className='text-white text-xl  font-bold'>Social media</h1>
                <div className="w-full pt-3">
                  <div className="flex gap-2 *:block *:size-10 *:border *:rounded-full *:text-gray-400 *:leading-[2] *:text-[1.2rem] *:border-gray-400 *:text-center items-center">
                    <TwitterOutlined />
                    <FacebookOutlined />
                    <InstagramOutlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full pt-5">
              <h1 className='text-white text-xl font-bold'>Disclaimer</h1>
              <p className='text-gray-400 pt-5'>The information provided on this website is for general informational purposes only. Kismat Property makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-black'>
        <div className="w-full">
          <div className="w-full text-white text-center text-sm p-3">
           <p className='text-white'>Copyright 2024, All Rights Reserved <Link to={'/'} className='text-gray-400'>Kismat Property</Link> </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer