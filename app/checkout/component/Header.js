import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div>

            <div className='flex justify-center py-3 border border-bottom-xl'>
                <Image src={"/checkout_images/arayurveda.png"} height={100} width={180} alt='no' />
            </div>

            <div className='text-center py-3 font-black'>
                <h3 className='text-[#ff0000] text-2xl'>Horse Fire Shilajit Resin</h3>
                <small className='italic'>Horse Fire Shilajit Resin | Himalayan Origin Pure 20g</small>
            </div>

        </div>
    )
}

export default Header