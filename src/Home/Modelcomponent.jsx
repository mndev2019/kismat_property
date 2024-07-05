//import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import logo from '../../src/assets/logo.png'

const Modelcomponent = ({visible , onClose}) => {
    if(!visible) return null;
    return (
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
                                <button onClick={onClose} className='bg-white   absolute top-[5px] right-[5px] rounded-full size-10 leading-1'><CloseOutlined className='text-md font-bold' /></button>
                            </div>
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-2xl leading-6 font-medium text-gray-900 mt-8">Enter your Phone number</h3>
                                    <div className="mt-3">
                                        <p className="text-md text-[#0d6efd] font-semibold">We will send you a verification code on the same number.</p>
                                    </div>
                                    <div className="mt-3">
                                        <input type="text" placeholder="" className="rounded-full bg-white text-black w-full py-2 px-2 outline-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#d7decd] px-4 py-3 pb-6 sm:px-6 sm:flex">
                            <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-8 py-2 bg-[#0d6efd] text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2  sm:ml-3 sm:w-auto sm:text-sm">
                                NEXT
                            </button>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Modelcomponent