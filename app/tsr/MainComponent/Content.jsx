import dynamic from 'next/dynamic';
import React from 'react'
const Buynow = dynamic(() => import("./buynow"));

const Content = () => {


    const checklistItems = [
        {
            id: 1,
            text: "ऊर्जा और स्टेमिना बढ़ाने के लिए:",
            subText: "सुबह खाली पेट"
        },
        {
            id: 2,
            text: "बेहतर नींद और रिकवरी के लिए:",
            subText: "रात में सोने से पहले"
        },
        {
            id: 3,
            text: "वर्कआउट और फिटनेस के लिए:",
            subText: "व्यायाम से 30 मिनट पहले"
        }
    ];


    const benefitsData = [
        {
            id: 1,
            title: "हाई एनर्जी/स्टेमिना",
            description: "वर्कआउट या अन्य शारीरिक परिश्रम में कम थकान। खूबसूरत पलों के दौरान स्टेमिना बनाए रखें",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1514b327-6c2d-43d2-9588-ae87d8b4a300/public",
        },
        {
            id: 2,
            title: "स्ट्रॉंग मसल/पंप",
            description: "मांसपेशियों में दर्द में कमी और तीव्र मसल ग्रोथ। वर्कआउट के दौरान/बाद में ज्यादा मसल पंप",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3186f5d7-b10e-4226-c22a-f160664ce000/public",
        },
        {
            id: 3,
            title: "ज्यादा जोश",
            description: "पूरे दिन जोश, ऊर्जा और स्फूर्ति बनाए रखें",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6b449eed-f3c6-473e-7575-07dc4440ee00/public",
        },
        {
            id: 4,
            title: "हाई टेस्टोस्टेरोन",
            description: "टेस्टोस्टेरोन लेवल में सुधार, कम तनाव",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6341046c-f264-4229-5578-d2b32e45e900/public",
        }
    ];



    return (
        <section className='fontNoto'>
            <div className="px-2">

                <p className="">
                    क्योंकि <strong>Horse Fire Shilajit Resin</strong> के साथ आप High Quility की गारंटी और Purity का भरोसा! हम ग्राहक संतुष्टि और विश्वास को प्राथमिकता देते है ! <strong>Horse Fire Shilajit Resin</strong> में उपयोग किये जाने वाले शिलाजीत को हिमालय की 18000 फ़ीट से ज्यादा की ऊंचाई से प्राप्त किया जाता है, क्योंकि हेल्थ एक्सपर्ट्स का मानना है की इस ऊंचाई पर मिलने वाला शिलाजीत सबसे शुद्ध और असरदार होता है।
                </p>

                <p>
                    फिर शिलाजीत के पत्थरों को Crush करके त्रिफला के साथ शोधित किया जाता है। त्रिफला के गुणों के साथ <strong>Horse Fire Shilajit Resin</strong> और भी असरदार हो जाता है। शोधित करने पर शिलाजीत ऊपरी सतह पर जम जाता है, जिसे स्टोर कर लिया जाता है। इन सारी जटिल प्रक्रियाओं से गुजरने के बाद हम 100% Purity और Quility के साथ आप तक पहुंचते है, ताकि आप रहें Healthy, Energetic और Powerful सालों साल।
                </p>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bb850744-fe04-4718-f3fa-8a64e434e900/public" alt="" className='w-full  py-3' />

                <Buynow />

            </div>


            <div className="py-2">
                <div className="title_bg text-center sm:text-[2vw] text-[7.3vw]  font-extrabold sm:pt-5 pt-3">
                    इस्तेमाल कब करें!
                </div>
                <div className=" grid grid-cols-2 items-center justify-center">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d83b9ed1-6f39-40ea-f23e-374b14291800/public" alt="" className='w-full sm:w-3/4' />
                    <div className="">

                        <div>
                            {checklistItems.map((item) => (
                                <div key={item.id} className="bg-[#fbe5a7] sm:p-4 p-2 mb-2 flex items-start rounded-md mr-4">
                                    <span className="text-green-600 text-xl mr-2">✅</span>
                                    <div className=''>
                                        <div className="font-semibold sm:text-[1vw] text-[4.2vw]">{item.text}</div>
                                        <div className="text-gray-700 sm:text-lg">{item.subText}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="fontNoto sm:text-xl text-lg my-2 pt-2 px-3 bg-gray-200 ">
                <strong className='font-bold text-red-700'>नोट:</strong> खाली पेट सुबह या रात में सोने से पहले लेना अधिक लाभकारी होता है।
            </div>

            <Buynow />

            <div className="fontNoto font-extrabold text-center px-4 sm:text-[2vw] text-[5.6vw] py-1 mt-5">
                मात्र 2 महीने के अंदर ये परिवर्तन महसूस करें
            </div>

            <div className="">
                {benefitsData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex items-center mb-6 bg-[#FDF8EE] sm:p-4 p-2  shadow-md ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                            }`}
                    >
                        <div className="sm:w-1/2 w-[60%] sm:p-4 p-1">
                            <h2 className="text-white sm:text-xl text-lg font-bold px-2 pt-2 inline-block bg-[#bc8912]">
                                {item.title}
                            </h2>
                            <div className="mt-2 text-gray-800 sm:text-lg text-base">{item.description}</div>
                        </div>

                        <div className="sm:w-1/2 w-[40%] flex justify-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full max-w-[300px] h-auto object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <Buynow />


        </section>
    )
}

export default Content