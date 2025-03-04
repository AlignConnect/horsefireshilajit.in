import React from 'react';
import { FaAngleDoubleRight } from "react-icons/fa"; // Import the icon
import dynamic from 'next/dynamic';
const Buynow = dynamic(() => import("./buynow"));
const Howtouse = () => {
    const usageInstructions = {


        title: "निर्दिष्ट उपयोग विधि!",

        second_title: "विशेष सुझाव!",


        steps: [
            {
                id: 1,
                text: "Horse Fire Shilajit Resin पैक में दिए गए चम्मच से आधा चम्मच लें"
            },
            {
                id: 2,
                text: "इसे दिन में एक बार गुनगुने दूध/पानी के साथ पियें"
            },
            {
                id: 3,
                text: "इसे 2 से 4 मिनट तक अच्छे से मिलाएं"
            }
        ],

        productImage: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f5baaaad-0a87-4f93-8744-cc14c3d41e00/public",

        infoImg1: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cb673564-45af-4ba1-75df-9ba23dea7600/public",
        infoImg2: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2adbe553-9ce6-45af-513a-a3f698cdc200/public"

    };



    const Marko = [
        {
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3b048999-03ad-4e14-1c65-369352c6a100/public",
            title: "ISO certified"
        },
        {
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e75b70c1-150c-4082-1ae2-5f01de9a7900/public",
            title: "FDA approved"
        },
        {
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4c73db5b-7fbd-4ff8-5a13-44fea3b84300/public",
            title: "Pure Ayurvedic"
        },
        {
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c6140817-6b80-4ebf-694a-3ec90d1bba00/public",
            title: "GMP certified"
        },
    ]

    return (
        <section className="">
            

            <div className="grid grid-cols-4 sm:grid-cols-4 items-center mx-auto py-2">

                {
                    Marko.map((e, key) => {

                        return <div className="text-center mx-auto col-span-1 " key={key}>

                            <div className="py-2">
                                <img src={e.img} alt="sdf" loading="lazy" className="sm:w-3/4 w-1/2 mx-auto" />
                            </div>

                            <div>
                                <h2 className="poppinsFont text-xs">{e.title}</h2>
                            </div>

                        </div>



                    })
                }

            </div>

            <h2 className="fontNoto font-bold sm:text-[1.8vw] text-[7vw] px-3 pt-5">{usageInstructions.title}</h2>

            <div className="fontNoto sm:ml-5 ml-3">
                {usageInstructions.steps.map((step) => (
                    <div key={step.id} className="flex items-center mx-2">

                        <FaAngleDoubleRight className="text-black text-xl" />
                        <p className="ml-3 text-gray-800 text-md">{step.text}</p>
                    </div>
                ))}
            </div>

            <h2 className="fontNoto font-bold sm:text-[1.8vw] text-[7vw] px-3 pt-5">{usageInstructions.second_title}</h2>


            <div className="grid  grid-cols-2 items-center justify-center py-2 px-1">

                <div className="">
                    <img
                        src={usageInstructions.infoImg1}
                        alt="Product"
                        className="sm:w-3/4 mx-auto"
                    />
                    <img
                        src={usageInstructions.infoImg2}
                        alt="Product"
                        className="sm:w-3/4 mx-auto"
                    />
                </div>

                <img
                    src={usageInstructions.productImage}
                    alt="Product"
                    className="w-full pr-7"
                />

            </div>

            <div className="mb-4">
                <Buynow />
            </div>
        </section>
    );
};

export default Howtouse;
