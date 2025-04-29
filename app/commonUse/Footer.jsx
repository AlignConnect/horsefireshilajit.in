import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="bg-gray-200 fontPoppins">
            <div className="max-w-3xl text-center text-black mx-auto px-2 pt-1 pb-5 md:text-xl text-md">

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a19635c1-20a5-4acd-6251-28756da2a300/public" alt="" className="w-32 mx-auto" />

                <h1 className="md:text-xl text-md font-bold ">
                    Horse Fire Shilajit Resin Copyright ©2025.
                </h1>
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

                    <Link href='/contact-us' className='underline text-blue-600'>
                        Contact Us
                    </Link>
                </div>

                <div className="text-[0.7rem]">
                    The results may vary depending on your individual features.
                </div>
            </div>
        </div>
    );
};

export default Footer;
