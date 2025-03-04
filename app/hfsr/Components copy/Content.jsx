import dynamic from 'next/dynamic';
import React from 'react'


const Buynow = dynamic(() => import("./Buynow"), {
    loading: () => <p>Header Loading</p>,
});

const Content = () => {
    return (
        <section>

            <div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d34c0156-b089-42c9-4fd6-0b58e4308200/public" alt="" className='w-full mt-5' />

                <p className='px-2 py-2 text-center text-[0.8rem] md:text-xl text-gray-500 italic'>
                    एक्सपर्ट्स से जानें पिच पर टिककर लम्बी पारी खेलने का बेस्ट तरीका!
                </p>

                <hr className='my-3' />


                <p className='px-2 py-2 text-justify indent-10'>
                    दोस्तों अगर आपका भी बल्ला कमजोर है, विकेट जल्दी गिर जाता है और कुछ ही शॉट खेलकर आउट हो जाते है तो ये खास आपके ही लिए है। दोस्तों, हर व्यक्ति की चाहत होती है की वो देर तक क्रीज पर टिक कर लम्बी पारी खेले और नॉनस्टॉप शॉट्स लगाएं। उससे भी ज्यादा ये चाहत महिलाओं में होती है की उनके पार्टनर लम्बी पारी खेले जल्दी आउट न हो ताकि उन्हें भी इस खेल का सुख मिले।
                </p>

                <div className="h_t flex items-center    py-2 px-2 sm:mx-5">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7edf8772-9959-457a-3e57-1dd37bad4300/public" alt="" className='w-10 sm:w-14  mx-auto' />
                    <div className="fontNoto text-center text-[1.4rem] sm:text-[2.4rem] pt-3 font-extrabold">
                        इस खेल से आउट होने की मुख्य वजहें
                    </div>
                </div>




                <ol className=' text-[1.1rem] md:text-xl  fontNoto pt-5 list-disc ml-7 sm:ml-12 px-2 '>
                    <li className='py-2'>
                        एल्कोहल या अन्य नशीली पदार्थों का अत्यधिक सेवन
                    </li>
                    <li className='py-2'>
                        देर से सोना, उचित नींद न लेना
                    </li>
                    <li className='py-2'>
                        पान मसाला, सिगरेट व अन्य तम्बाकू युक्त प्रोडक्ट का सेवन
                    </li>
                    <li className='py-2'>
                        शरीर में टेस्टोस्टेरोन का धीमा निर्माण या कमी
                    </li>
                    <li className='py-2'>
                        संतुलित आहार न लेना, फ़ास्ट फ़ूड - जंक फ़ूड का सेवन
                    </li>
                    <li className='py-2'>
                        डायबिटीज, थायराइड, प्रोस्टेट से परेशान और दवाओं का सेव
                    </li>
                </ol>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/686e95c0-79c8-4068-8da2-22da4b06d000/public" alt="" className='w-full sm:w-5/6 mx-auto py-3 px-2' />

                <div className="h_t fontNoto text-center rounded-t-3xl text-2xl sm:text-4xl pt-4 sm:pt-5 font-extrabold px-2 mx-3">
                    ऐसे लगाएं नॉनस्टॉप शॉट, बढ़ाये प्यार
                </div>


                <p className='px-2 py-4 text-justify h_t my-3'>
                    देर तक क्रीज पर समय बिताने के लिए आपको चाहिए एक स्थायी उपाय जो जिससे समस्या जड़ से ठीक हो सके, टाइमिंग में सुधार हो और आप रहे नॉटआउट ! हर बार क्रीज पर उतरने से पहले केमिकल वाली गोलियां खाने और लाइफ को खतरे में डालने से बेहतर है की सुरक्षित और सर्टिफाइड समाधान आजमाकर इसे जड़ से ख़त्म किया जाए, और ये सर्टिफाइड समाधान है AR Ayurveda का <span className='text-red-700'>Horse Fire Shilajit Resin.</span> जी हाँ हॉर्सफायर  शिलाजीत रेसिन बहुत ही असरदार और पूर्ण रूप से सुरक्षित भी है। वही, केमिकल वाली गोलियां कोई असर नहीं करती बल्कि कार्डियक अरेस्ट, लिवर डैमेज, हार्ट स्ट्रोक, और प्रोस्टेट रिलेटेड समस्या उत्पन्न कर सकती है।
                </p>


                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ceb064f4-e61b-4efb-01a7-0290dee4c600/public" alt="" className='sm:w-3/6 w-full  mx-auto py-2' />

                <Buynow />

                <p className='px-2 py-2 text-justify'>
                    <span className='text-red-700'>Horse Fire Shilajit Resin</span> अपनी नाम के भांति ही प्लेयर को खेल से पहले शरीर मे घोड़े जैसी शक्ति देता है रग-रग को उत्तेजित कर देता है जो घंटो तक बना रहता है। यह शक्ति-स्फूर्ति, टाइमिंग या औजार की मजबूती को उच्चतम स्तर पर ले जाने में मदद करता है। इस प्रकार प्लेयर क्रीज पर देर तक बना रहता है और नॉनस्टॉप शॉट्स लगा कर ऐसा शानदार प्रदर्शन दिखा सकते है जैसा पार्टनर उनसे चाहती है।
                </p>


                <div className="h_t title_clip fontNoto text-center text-xl sm:text-[1.7rem] pt-4 sm:pt-4 font-extrabold sm:px-0 px-10 mx-2">
                    हॉर्सफायर शिलाजीत रेसिन के प्रभाव से विकेट का पतन न हो जल्दी!
                </div>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/06175d2d-53e6-4b64-ce61-6ffbb77e1f00/public" alt="" className='w-full py-4' />

                <Buynow />



                <p className='px-2 py-2 text-justify'>
                    दोस्तों, <span className='text-red-700'>Horse Fire Shilajit Resin.</span> एक शुद्ध आयुर्वेदिक फार्मूला है।<span className='text-red-700'>Horse Fire Shilajit Resin.</span> ने खुद को साबित किया है कि लम्बी पारी खेलने के लिए ये ही बेस्ट है। इसका सहारा श्रेय इस फार्मूलेशन को तैयार करने वाले आयुर्वेदाचार्यों को को जाता है। जिन्होंने कई सालों तक जड़ीबूटियों का रिसर्च करने के बाद इसे तैयार किया है।
                </p>


                <p className='px-2 py-2 text-justify'>
                    दोस्तों, <span className='text-red-700'>Horse Fire Shilajit Resin.</span> के इस्तेमाल से खेल से पहले स्फूर्ति, आत्मविश्वास और टाइमिंग में सुधार होता है जिससे वो अपने पार्टनर को संतुष्ट कर सके। इसकी वजह से पूरे भारत में इसका इस्तेमाल तेजी से बढ़ा है। इसके इस्तेमाल से विस्फोटक पारी खेल रहे है और एक रोमांचक जीवन व्यतीत कर रहे है।
                </p>


                <div className="fontNoto text-center text-3xl sm:text-4xl pt-4 sm:pt-4 font-extrabold px-2  mx-4 mt-10" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    हॉर्सफायर शिलाजीत रेसिन मदद करता है
                </div>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ceb064f4-e61b-4efb-01a7-0290dee4c600/public" alt="" className='md:w-3/4 w-full px-4 mx-auto pt-10 ' />

                <Buynow />

                <div className="border border-solid border-red-500 mx-7 mb-5">

                    <ol className=' text-[1.2rem] md:text-xl  fontNoto pt-5 list-disc ml-7 sm:ml-12 '>
                        <li className='py-2'>
                            शक्ति और स्फूर्ति में सुधार करने में
                        </li>
                        <li className='py-2'>
                            बल्ले को मजबूत करने में
                        </li>
                        <li className='py-2'>
                            टाइमिंग सुधारने में
                        </li>
                        <li className='py-2'>
                            लम्बी पारी खेलने में
                        </li>
                        <li className='py-2'>
                            प्रदर्शन में सुधार करने में
                        </li>
                        <li className='py-2'>
                            लम्बी इनिंग, पार्टनर को संतुष्ट करने में
                        </li>
                    </ol>
                </div>
            </div>

        </section>
    )
}

export default Content