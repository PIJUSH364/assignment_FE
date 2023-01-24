import React, { Suspense, useEffect, useState } from 'react'
import { sliderData } from './sliderData'
const Slide = React.lazy(() => import('../common/Slide'));


const Testimonial = () => {
    const [current, setCurrent] = useState(0);
    const [isHoverLeft, setIsHoverLeft] = useState(false);
    const [isHoverRight, setIsHoverRight] = useState(false);

    const length = sliderData.length;
    const leftIcon = {
        transition: 'all 1s ease-in-out',
        transform: isHoverLeft ? 'scale(1.07)' : '',
    };
    const rightIcon = {
        transition: 'all 1s ease-in-out',
        transform: isHoverRight ? 'scale(1.07)' : '',
    };

    // eadge case
    if (!Array.isArray(sliderData) || length <= 0) {
        return null;
    }

    useEffect(() => {

    }, [current])

    return (
        <div className='md:p-24 p-5 pb-32'>
            {/* mobile only */}
            <div className='md:hidden flex gap-5 justify-end cursor-pointer p-2 pb-10 '>
                <i className="fa-solid fa-arrow-left text-xl p-2 px-5 bg-slate-200 box-shadow-icon left-arrow rounded-full " style={leftIcon}
                    onMouseEnter={(e) => {
                        e.preventDefault();
                        setIsHoverLeft(true)
                    }}
                    onMouseLeave={(e) => {
                        e.preventDefault();
                        setIsHoverLeft(false)
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        setCurrent(current === 0 ? length - 1 : current - 1)
                    }}
                />

                <i className="fa-solid fa-arrow-right text-xl p-2 px-5 box-shadow-icon bg-slate-200  left-arrow rounded-full" style={rightIcon}
                    onMouseEnter={(e) => {
                        e.preventDefault();
                        setIsHoverRight(true)
                    }}
                    onMouseLeave={(e) => {
                        e.preventDefault();
                        setIsHoverRight(false)
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        setCurrent(current === length - 1 ? 0 : current + 1)
                    }}

                />
            </div>
            <div className="slider">
                {
                    sliderData && sliderData.map((slide, index) =>
                        <div key={index}  >
                            {
                                index === current && <Suspense fallback={<div>Loading...</div>}>
                                    <Slide img={slide.image} logo={slide.logo} name={slide.name} description={slide.description} subtitle={slide.subtitle} />
                                </Suspense>
                            }

                        </div>)
                }
                {/* desktop only */}
                <div className='md:flex hidden gap-5 justify-end cursor-pointer p-2 pb-0 pt-5'>
                    <i className="fa-solid fa-arrow-left text-xl p-2 px-5 bg-slate-200 box-shadow-icon left-arrow rounded-full " style={leftIcon}
                        onMouseEnter={() => setIsHoverLeft(true)}
                        onMouseLeave={() => setIsHoverLeft(false)}
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrent(current === 0 ? length - 1 : current - 1)
                        }}
                    />

                    <i className="fa-solid fa-arrow-right text-xl p-2 px-5 box-shadow-icon bg-slate-200  left-arrow rounded-full" style={rightIcon}
                        onMouseEnter={() => setIsHoverRight(true)}
                        onMouseLeave={() => setIsHoverRight(false)}
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrent(current === length - 1 ? 0 : current + 1)
                        }}

                    />
                </div>
            </div >
        </div>
    )
}

export default Testimonial


