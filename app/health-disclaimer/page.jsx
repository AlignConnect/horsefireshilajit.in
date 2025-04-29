import React from 'react'

const page = () => {
    return (
        <section className='w-full md:max-w-2xl mx-auto bg-gray-100 text-black'>

            <div className='text-center fontPoppins text-2xl pt-6 font-extrabold'>
                Health Disclaimer <span className='fontNoto'>(हेल्थ डिस्क्लेमर)</span>
            </div>

            <hr className='my-3' />

            <p className='px-2 py-2 text-[1rem] sm:text-[1.1rem] text-justify'>
                The information provided on the Website is for informational purposes only and is not professional medical advice, diagnosis, treatment or care, nor is it intended to be a substitute thereof. All content, including text, graphics, images and information, contained on or available through this web site is for general information purposes only. Always seek the advice of a physician or other qualified health care provider properly licensed to practice medicine or general health care in your jurisdiction concerning any questions you may have regarding any information obtained from this Website. All products displayed on this website does not intent/claim to treat, diagnose, cure, mitigate or prevent any disease or disorder or condition.
            </p>


            <p className='px-2 py-2 text-[1rem] sm:text-[1.1rem] text-justify'>
                इस वेबसाइट पर प्रदान की गई जानकारी केवल सामान्य सूचना के उद्देश्य से है और यह पेशेवर चिकित्सा सलाह, निदान, उपचार या देखभाल का विकल्प नहीं है। इस वेबसाइट पर उपलब्ध सभी सामग्री, जिसमें टेक्स्ट, ग्राफिक्स, चित्र और अन्य जानकारी शामिल हैं, केवल सामान्य जानकारी के लिए हैं। इस वेबसाइट से प्राप्त किसी भी जानकारी के संबंध में कोई भी प्रश्न होने पर, हमेशा अपने क्षेत्र में चिकित्सा या सामान्य स्वास्थ्य देखभाल के लिए उचित रूप से लाइसेंस प्राप्त चिकित्सक या अन्य योग्य स्वास्थ्य सेवा प्रदाता की सलाह लें। इस वेबसाइट पर प्रदर्शित सभी उत्पाद किसी भी बीमारी, विकार या स्थिति का इलाज, निदान, उपचार, शमन या रोकथाम करने का दावा/इरादा नहीं रखते।
            </p>

            <hr className='my-3' />

            <ul className='fontNoto ml-5  list-disc px-2 py-2 text-[1rem] sm:text-[1.1rem] text-justify'>
                <li>
                    <strong>उपयोगकर्ता जिम्मेदारी अस्वीकरण:-</strong>
                    इस वेबसाइट का उपयोग करके, आप स्वीकार करते हैं कि आप अपने जोखिम पर ऐसा कर रहे हैं। हम यह गारंटी नहीं देते कि इस वेबसाइट पर दी गई जानकारी पूर्ण, सटीक या नवीनतम है। किसी भी स्वास्थ्य-संबंधी निर्णय लेने से पहले, कृपया किसी योग्य चिकित्सक से परामर्श करें।
                </li>
                <li>
                    <strong> उत्पाद उपयोग अस्वीकरण:-</strong>
                    इस वेबसाइट पर प्रदर्शित उत्पाद केवल सूचनात्मक उद्देश्यों के लिए हैं। इनका उपयोग किसी चिकित्सा स्थिति के इलाज या रोकथाम के लिए नहीं किया जाना चाहिए, जब तक कि किसी योग्य स्वास्थ्य पेशेवर द्वारा अनुशंसित न हो। उत्पादों का उपयोग करने से पहले, इसके दिशा-निर्देशों और चेतावनियों को ध्यान से पढ़ें।
                </li>
                <li>
                    <strong>सामग्री अद्यतन अस्वीकरण:-</strong>
                    इस वेबसाइट पर दी गई जानकारी समय-समय पर अद्यतन की जा सकती है, लेकिन हम इसकी निरंतर सटीकता या पूर्णता की गारंटी नहीं देते। स्वास्थ्य संबंधी जानकारी तेजी से बदल सकती है, इसलिए नवीनतम जानकारी के लिए हमेशा विश्वसनीय स्रोतों पर भरोसा करें।
                </li>
                <li>
                    <strong>बाहरी लिंक अस्वीकरण:-</strong>
                    इस वेबसाइट पर मौजूद बाहरी लिंक केवल सुविधा के लिए प्रदान किए गए हैं। हम इन लिंक के माध्यम से उपलब्ध सामग्री की सटीकता, वैधता या गुणवत्ता के लिए जिम्मेदार नहीं हैं। बाहरी वेबसाइटों का उपयोग करने से पहले उनकी गोपनीयता नीति और शर्तों को पढ़ें।
                </li>
            </ul>


        </section>
    )
}

export default page