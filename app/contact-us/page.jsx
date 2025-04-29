import Link from 'next/link';
import React from 'react'
import { IoCall } from "react-icons/io5";

const page = () => {
    return (
        <section className='w-full md:max-w-2xl mx-auto bg-gray-100 text-black'>






            <hr className='mb-3' />

            <div className="">
                <div className='text-center fontPoppins text-2xl font-extrabold'>
                    Contact-Us
                </div>
            </div>

            <hr className='my-3' />

            <div className="p-4">
                <div className="fontPoppins  text-xl py-2 font-semibold">
                    Call-Us:-
                </div>

                <p className='flex items-center gap-3'>
                    <IoCall /> <strong>+91 9099857272</strong>
                </p>

            </div>
            <hr className='my-3' />


            <div className="p-4">
                <div className="fontPoppins  text-xl py-2 font-semibold">
                    Information:-
                </div>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a19635c1-20a5-4acd-6251-28756da2a300/public" alt="" className="w-36" />

                <strong>AR Ayurveda Private Limited</strong>

                <p>FF 14, Ujala Avenue, Sarkhej Road,Vishala, Ahmedabad Gujarat ( INDIA ) – 380055</p>


            </div>

            <hr className='my-3' />


            <div className="fontPoppins text-sm flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-7 py-2 text-center">

                <Link href='/terms-conditions' className='underline text-blue-600'>
                    Terms & Conditions
                </Link>

                <Link href='/privacy-policy' className='underline text-blue-600'>
                    Privacy Policy
                </Link>

                <Link href='/health-disclaimer' className='underline text-blue-600'>
                    Health Disclaimer
                </Link>

            </div>


            <hr className='my-3' />


            <p className='text-center pb-4 px-3'>Copyright ©2025 AR Ayurveda Private Limited All Rights Reserved</p>


        </section>
    )
}

export default page