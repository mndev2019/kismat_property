//import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import logo from '../../src/assets/logo.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import animation from '../assets/building_loader.gif'
import OTPInput from "react-otp-input";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import check from "../assets/check.png"


const Modelcomponent = ({ visible, onClose }) => {
    if (!visible) return null;
    const [otpnumber, setotpnumber] = useState("")
    const [loading, setloading] = useState(false)
    const [otpmatch, setotpmatch] = useState("")
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [area, setarea] = useState("")
    const [thanks, setthanks] = useState(false)


    useEffect(() => {
        if ('OTPCredential' in window) {
            const ac = new AbortController();
            navigator.credentials.get({
                otp: { transport: ['sms'] },
                signal: ac.signal
            }).then(otp => {
                if (otp) {
                    setotpmatch(otp.code);
                }
            }).catch(err => {
                console.log(err);
            });

            return () => {
                ac.abort();
            };
        }
    }, []);


    const [showOtherArea, setShowOtherArea] = useState(false);
    const [otherArea, setOtherArea] = useState('');

    const handleAreaChange = (e) => {
        const selectedArea = e.target.value;
        setarea(selectedArea);
        if (selectedArea === 'other') {
            setShowOtherArea(true);
        } else {
            setShowOtherArea(false);
        }
    };



    const [userform, setuserform] = useState(false)
    const [showotp, setshowotp] = useState(true)

    const handleOtp = (e) => {
        e.preventDefault();
        setloading(true);
        let requestdata = {
            phone: otpnumber
        };
        axios.post(`https://projectbeatrecords.in:2130/send_otp`, requestdata).then((res) => {
            console.log(res);
            if (res.data.success == '1') {
                toast.success(res.data.message);
                setshowotp(false);
            }
        }).finally(() => {
            setloading(false);
        });
    };

    const handleVerify = (e) => {
        e.preventDefault();
        setloading(true);
        let requestdata = {
            phone: otpnumber,
            otp: otpmatch
        };
        axios.post(`https://projectbeatrecords.in:2130/verify_otp`, requestdata).then((res) => {
            console.log(res);
            if (res.data.success == '1') {
                toast.success(res.data.message);
                setuserform(true)
            } else {
                toast.error(res.data.message)
            }
        }).finally(() => {
            setloading(false);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setloading(true);
        let requestdata = {
            phone: otpnumber,
            name: name,
            email: email,
            area: area == "other" ? otherArea : area
        };
        axios.post(`https://projectbeatrecords.in:2130/send_email`, requestdata).then((res) => {
            console.log(res);
            if (res.data.success == '1') {
                toast.success(res.data.message);


                setTimeout(() => {
                    setuserform(false)
                    setthanks(true)
                }, 300);
                setTimeout(() => {
                    onClose()
                    setthanks(false)
                    setotpnumber("")
                }, 1300);
            }
        }).finally(() => {
            setloading(false);
        });
    };





    return (
        <>
            <ToastContainer />
            {loading && <div className='overlay'>
                <img className='img-fluid' src={animation} />
            </div>}
            <div className="fixed z-10 inset-0 overflow-y-auto">

                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative z-0">
                        {!thanks ? <div className="bg-[#6b728029]  px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                            <div className="w-full pb-5 border-b border-gray-200">
                                <img src={logo} alt='image' className='mx-auto h-[45px]' />
                                <button onClick={onClose} className='bg-white   absolute top-[5px] right-[5px] rounded-full size-10 leading-1'><CloseOutlined className='text-md font-bold' /></button>
                            </div>
                            <div className="sm:flex sm:items-start">

                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    {
                                        !userform ? (showotp ? <>
                                            <h3 className="text-2xl leading-6 font-medium text-gray-900 mt-8">Enter your Phone number</h3>
                                            <div className="mt-3">
                                                <p className="text-md text-[#0d6efd] font-semibold">We will send you a verification code on the same number.</p>
                                            </div>
                                            <form onSubmit={handleOtp}>
                                                <div className="mt-3">
                                                    <input type="text" value={otpnumber} onChange={(e) => setotpnumber(e.target.value)} placeholder="" inputMode="numeric" className="rounded-full bg-white text-black w-full py-2 px-2 outline-none" required min={10} minLength={10} maxLength={10} max={10} autoFocus />
                                                </div>
                                                <div className="  py-3 pb-6  sm:flex">
                                                    <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-8 py-2 bg-[#0d6efd] text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2  sm:ml-3 sm:w-auto sm:text-sm">
                                                        NEXT
                                                    </button>

                                                </div>
                                            </form>
                                        </> : <>
                                            <form className='otpbox w-100' >
                                                <h2 className="mb-0 text-2xl font-semibold mt-4">OTP</h2>
                                                <p className="text-gray-500  mb-0" style={{ fontSize: "14px", fontWeight: "500" }}>We sent a 6-digit code to</p>
                                                <p className="text-gray-500  mb-3" style={{ fontSize: "14px", fontWeight: "500" }}>{otpnumber}</p>
                                                <p></p>
                                                <OTPInput
                                                    value={otpmatch}
                                                    onChange={setotpmatch}
                                                    id="otp"
                                                    numInputs={6}
                                                    className="form-control"
                                                    style={{ width: "50px" }}
                                                    renderSeparator={<span className="me-2"> </span>}
                                                    renderInput={(props) => (
                                                        <input
                                                            {...props}
                                                            inputMode="numeric" // Set inputMode to 'numeric'
                                                            pattern="[0-9]*" // Optional: specify pattern to restrict input to numbers
                                                        />
                                                    )}
                                                />

                                                <p className="text-dark font-bold mt-3 text-underline" onClick={(e) => handleOtp(e)} style={{ fontSize: "14px", cursor: "pointer" }}>Resend Code</p>
                                                <div className="  py-3 pb-6  sm:flex">
                                                    <button onClick={handleVerify} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-8 py-2 bg-[#0d6efd] text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2  sm:ml-3 sm:w-auto sm:text-sm">
                                                        NEXT
                                                    </button>

                                                </div>
                                            </form>
                                        </>) : <>
                                            <form onSubmit={handleSubmit}>
                                                <div className="mt-3 text-start">
                                                    <label htmlFor="" className='font-bold text-start'>Name</label>
                                                    <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Name" required className="rounded-md mb-3 bg-white text-black w-full py-2 px-2 outline-none" />
                                                    <label htmlFor="" className='font-bold text-start'>Email</label>
                                                    <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" className="rounded-md mb-3 bg-white text-black w-full py-2 px-2 outline-none" />

                                                    <label htmlFor="" className='font-bold text-start'>Phone</label>
                                                    <input type="text" value={otpnumber} onChange={(e) => setotpnumber(e.target.value)} placeholder="Phone" required className="rounded-md mb-3 bg-white text-black w-full py-2 px-2 outline-none" min={10} minLength={10} maxLength={10} max={10} />
                                                    <label htmlFor="" className="font-bold text-left">Interested Area</label>

                                                    <div className="relative">
                                                        <select
                                                            value={area}
                                                            onChange={handleAreaChange}
                                                            className="rounded-md bg-white text-black w-full py-2 px-3 outline-none appearance-none pr-8"
                                                        >
                                                            <option value="">Select Area</option>
                                                            <option value="ncr">NCR</option>
                                                            <option value="gurgaon">Gurgaon</option>
                                                            <option value="noida">Noida</option>
                                                            <option value="delhi">Delhi</option>
                                                            <option value="uttarpradesh">Uttar Pradesh</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                            <i class="fa-solid fa-angle-down"></i>
                                                        </div>

                                                        {showOtherArea && (
                                                            <textarea
                                                                value={otherArea}
                                                                onChange={(e) => setOtherArea(e.target.value)}
                                                                placeholder="Enter Other Area"
                                                                className="rounded-md bg-white text-black w-full py-2 px-3 outline-none mt-2"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="  py-3 pb-6  sm:flex">
                                                    <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-8 py-2 bg-[#0d6efd] text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2  sm:ml-3 sm:w-auto sm:text-sm">
                                                        Submit
                                                    </button>

                                                </div>
                                            </form>
                                        </>
                                    }


                                </div>



                            </div>
                        </div> : <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <div className="">
                                <div className="flex justify-center">
                                    <img src={check} alt="" style={{ height: "100px" }} />
                                </div>
                                <h2 className="text-2xl font-bold mb-4 text-center">Thank You!</h2>
                                <p className="text-center mb-6">Your submission has been received. We will get back to you shortly.</p>

                            </div>

                        </div>}



                    </div>
                </div>
            </div>




        </>
    )
}

export default Modelcomponent