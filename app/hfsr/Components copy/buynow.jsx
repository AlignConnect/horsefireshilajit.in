import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const buynow = () => {
    return (
        <div className='fontPoppins '>

            <a href="#form">
                <button className="buy-now-btn-animation flex items-center justify-center gap-4 bg-[#f03a3a] hover:bg-[#d64b4b] md:text-[1.4vw] text-lg text-white font-bold md:py-3 py-2 px-6 my-3 rounded-3xl uppercase 
                sm:w-56 w-1/2 mx-auto">
                    Buy Now <FaArrowRight />
                </button>
            </a>
        </div>
    )
}

export default buynow