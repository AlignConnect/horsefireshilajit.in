import React from 'react'
import { IoMenu } from "react-icons/io5";
import VideoPlayer from '@/app/commonUse/Youtubefile/YoutubeFrame';
import dynamic from 'next/dynamic';
const Buynow = dynamic(() => import("./buynow"));


const Header = () => {
    return (
        <section className='px-1'>

            <div className="bg-[#fdf5de] sm:p-4 p-2 head_shadow">


                <div className="flex justify-between  items-center">

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4e88b501-b39f-466b-b9ab-dda09f686200/public" alt="" className='sm:w-20 w-16' />

                    <IoMenu size={30} />

                </div>




            </div>


            <div className="my-6">

                <VideoPlayer vid="Gtt-C8K4KtI?si" />

            </div>


            <div className="fontNoto font-bold px-4 sm:text-[2vw] text-[5.5vw] py-1">
                <span className='fontPoppins'>Horse Fire Shilajit Resin</span><br /> सबसे अलग क्यों है?
            </div>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8a280e85-e05a-46da-4c50-57fd39aec300/public" alt="" className=' w-full rounded-md py-1' />

            <Buynow />

        </section>
    )
}

export default Header