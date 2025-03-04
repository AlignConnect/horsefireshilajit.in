import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reviews from '@/app/reviews-2.json'
import { FaStar } from 'react-icons/fa6';


const Reviews = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                },
            },
        ],
    };
    return (
        <div className="bg-[#dbdbd6] sm:pb-0 pb-2">
            <div className="sm:max-w-xl w-[85%] fontPoppins mx-auto items-center pt-5">


                <div className="fontAnton uppercase md:text-[2vw] text-[8vw] leading-tight py-2 text-center">
                    What Our  <span className='text-red-600'> Customer's </span>Say
                </div>

                <Slider {...settings}>
                    {reviews.map(({ id, name, image, review }) => (
                        <div key={id} className='p-2 my-3'>
                            <div className="bg-white rounded-lg p-4 sm:p-10 review_sdw ">

                                <div className="flex items-center ">
                                    <img className="w-12 h-12 rounded-full object-cover" src={image} alt={name} />
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-lg">{name}</h3>
                                        <div className="flex ">
                                            {Array(5).fill().map((_, i) => (
                                                <FaStar color='#daaf01' key={i} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">

                                    <div className="text-gray-600 text-sm fontPoppins">&ldquo;{review}&rdquo;</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Reviews