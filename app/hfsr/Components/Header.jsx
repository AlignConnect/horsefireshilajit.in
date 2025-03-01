import React from 'react'

const Header = () => {
    return (
        <section className=''>



            <div className="sm:p-3 py-2" >
                <div className="bg-white h_shad py-1 flex justify-between items-center rounded-full px-3" >

                    <div className="flex items-center justify-center  gap-1 py-2">
                        <div className="">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ceb064f4-e61b-4efb-01a7-0290dee4c600/public" alt="" className='w-12 md:w-20 mx-auto' />
                        </div>
                        <div className="">
                            <div className="flex items-center gap-1">
                                <div className="fontPoppins uppercase text-red-500 md:text-xl text-sm font-extrabold">
                                    Horse Fire Shilajit Resin
                                </div>
                                <img src="/main/home_images/verify.svg" alt="" className='w-4' />
                            </div>
                            <div className="fontPoppins text-black text-[0.6rem]">
                                THE GOOD MEN SECRET
                            </div>
                        </div>
                    </div>
                    <div className="fontNoto text-center  text-sm md:text-xl pt-2 text-black">
                        विज्ञापन-संबंधी
                    </div>
                </div>
            </div>
            <div className="h_t fontNoto text-center text-2xl sm:text-3xl pt-4 sm:pt-6 pb-2 font-extrabold px-2 my-2">
                पार्टनर के साथ लम्बी पारी खेलना चाहते है तो ये जान लें!
            </div>





            <hr className='my-3' />

        </section>
    )
}

export default Header