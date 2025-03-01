import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const buynow = () => {
    return (
        <div className='fontPoppins '>

            <a href="#form">
                <button className="buy-now-btn-animation flex items-center justify-between bg-[#e9db1b] hover:bg-[#ffef0a] md:text-[1.4vw] text-xl text-black font-bold md:py-3 py-2 px-6 my-3 rounded-3xl uppercase 
                sm:w-56 w-1/2">
                    Buy Now <FaArrowRight />
                </button>
            </a>
        </div>
    )
}

export default buynow