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
        if (current < 0) {
            setCurrent(length - 1);
        }
        if (current > length - 1) {
            setCurrent(0);
        }
    }, [current, sliderData]);

    // auto_slider
    useEffect(() => {
        let slider = setInterval(() => {
            setCurrent(current + 1);
        }, 6000);
        return () => clearInterval(slider);
    }, [current]);

    return (
        <div id="ov-hidden" className='common-container pb-32 bg-gradient-to-tl from-green-100 via-white to-white  '>
            <div className="slider flex md:flex-col flex-col-reverse gap-y-20 md:gap-y-2">
                <div>
                    {
                        sliderData && sliderData.map((slide, index) => {
                            let position = "nextSlide";//default class
                            if (index === current) {
                                position = "activeSlide";//original position
                            }
                            if (
                                index === current - 1 ||
                                (current === 0 && index === length - 1)
                            ) {
                                position = "lastSlide";
                            }
                            return <div key={index} id="article" className={`trans-700-eio duration-[1700ms] ${position}`}>
                                {
                                    index === current &&
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <Slide
                                            img={slide.image} logo={slide.logo} name={slide.name} description={slide.description} subtitle={slide.subtitle} />
                                    </Suspense>
                                }

                            </div>
                        })
                    }
                </div>

                {/* desktop only */}
                <div className=' flex flex-row gap-5 justify-between cursor-pointer p-2 pb-0 pt-5'>
                    {/* left side */}
                    <div className='flex gap-3 items-center'>
                        {
                            sliderData && sliderData.map((slide, index) => <p key={index} className={`h-3 w-3 rounded-lg trans-700-eio ${slide.id == current ? "bg-[#000]" : "bg-[#00000049]"}`} />)
                        }
                    </div>
                    {/* right side */}
                    <div className='flex gap-4'>
                        {/* left button */}
                        <button
                            className=' disabled:hidden'
                            type='button'
                            disabled={current == 0 ? true : false}
                        >
                            <i
                                className={`fa-solid fa-arrow-left hover:scale-105 ease-in-out duration-500 text-xl p-2 px-5 text-black box-shadow-icon left-arrow rounded-full `}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrent((prevValue) => prevValue === 0 ? length - 1 : prevValue - 1)
                                }}
                            />
                        </button>
                        {/*rightt button */}
                        <button
                            className=' disabled:hidden'
                            type='button'
                            disabled={current == length - 1 ? true : false}
                        >
                            <i
                                className={`fa-solid fa-arrow-right hover:scale-105  ease-in-out duration-500 text-xl p-2 px-5 box-shadow-icon  left-arrow rounded-full text-black `}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrent((prevValue) => prevValue === length - 1 ? 0 : prevValue + 1)
                                }}

                            />
                        </button>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Testimonial


