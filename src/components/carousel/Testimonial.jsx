import React, { Suspense, useEffect, useState } from 'react'
import { sliderData } from './sliderData'
const Slide = React.lazy(() => import('../common/Slide'));


const Testimonial = () => {
    const [current, setCurrent] = useState(0);
    const length = sliderData.length;


    // edge case
    if (!Array.isArray(sliderData) || length <= 0) {
        return null;
    }

    useEffect(() => {

    }, [current])

    return (
        <div className='md:p-24 p-5 pb-32 bg-gradient-to-tl from-green-100 via-white to-white  '>


            <div className="slider flex md:flex-col flex-col-reverse gap-y-20 md:gap-y-2">
                <div>
                    {
                        sliderData && sliderData.map((slide, index) =>
                            <div key={index}  >
                                {
                                    index === current &&
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <Slide img={slide.image} logo={slide.logo} name={slide.name} description={slide.description} subtitle={slide.subtitle} />
                                    </Suspense>
                                }

                            </div>)
                    }
                </div>

                {/* desktop only */}
                <div className=' flex flex-row gap-5 justify-end cursor-pointer p-2 pb-0 pt-5'>
                    {/* left button */}
                    <button
                        className=' disabled:opacity-5'
                        type='button'
                        disabled={current == 0 ? true : false}
                    >
                        <i
                            className={`fa-solid fa-arrow-left hover:scale-105 ease-in-out duration-500 text-xl p-2 px-5 bg-white box-shadow-icon left-arrow rounded-full `}
                            onClick={(e) => {
                                e.preventDefault();
                                console.log(current, "left");
                                setCurrent((prevValue) => prevValue === 0 ? length - 1 : prevValue - 1)
                            }}
                        />
                    </button>
                    {/*rightt button */}
                    <button
                        className=' disabled:opacity-5'
                        type='button'
                        disabled={current == length - 1 ? true : false}
                    >
                        <i
                            className={`fa-solid fa-arrow-right hover:scale-105  ease-in-out duration-500 text-xl p-2 px-5 box-shadow-icon bg-white  left-arrow rounded-full  `}
                            onClick={(e) => {
                                console.log(current, "right");
                                e.preventDefault();
                                setCurrent((prevValue) => prevValue === length - 1 ? 0 : prevValue + 1)
                            }}

                        />
                    </button>
                </div>
            </div >
        </div>
    )
}

export default Testimonial


