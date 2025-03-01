import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reviews from '@/app/reviews.json'
import { FaStar } from 'react-icons/fa6';


const Reviews = () => {
    const settings = {
        dots: true,
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
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };
    return (
        <div className="bg-[#dbdbd6] sm:pb-0 pb-2">
            <div className="max-w-2xl fontPoppins mx-auto items-center py-10">


                <div className="fontAnton uppercase md:text-[3vw] text-[8vw] leading-tight py-2 text-center">
                    What Our  <span className='text-red-600'> Customer's </span>Say
                </div>

                <Slider {...settings}>
                    {reviews.map(({ id, name, image, review }) => (
                        <div key={id} className='p-2 my-3'>
                            <div className="bg-[#fff9ef] rounded-lg p-6 sm:p-10 review_sdw ">

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

                                    <p className="text-gray-600 text-sm fontPoppins">&ldquo;{review}&rdquo;</p>
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