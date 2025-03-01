import React from 'react'

const Certified = () => {


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
        <section>

            <div className="grid grid-cols-2 sm:grid-cols-4 items-center mx-auto py-2">

                {
                    Marko.map((e, key) => {

                        return <div className="text-center mx-auto col-span-1 " key={key}>

                            <div className="py-2">
                                <img src={e.img} alt="sdf" loading="lazy" className="w-full" />
                            </div>

                            <div>
                                <h2 className="poppinsFont text-sm">{e.title}</h2>
                            </div>

                        </div>



                    })
                }

            </div>
        </section>
    )
}

export default Certified