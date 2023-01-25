import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import ButtonCommon from '../components/common/ButtonCommon'

const Home = () => {
    const [element, setElement] = useState(null);
    const elementRef = useRef();

    useEffect(() => {
        setElement(elementRef.current);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scale-150");
                    entry.target.classList.add("opacity-80");

                    setTimeout(() => {
                        entry.target.classList.remove("opacity-80");
                        entry.target.classList.remove("scale-150");
                        // only one time observe element
                        observer.unobserve(entry.target);
                    }, 700);

                }
            });

        }, {
            threshold: 0.8
        });

        // element if valid then observer working otherwise none
        element ? observer.observe(element) : null;

    }, [element]);


    return (
        <div className='background-home common-container text-white  text-center  pt-32  overflow-x-hidden'>
            <div
                ref={elementRef}
                className='duration-700 textInOut ' >
                <h1 className='text-6xl font-semibold pb-2 '>Your recruitment stack </h1>
                <h1 className='text-6xl font-semibold pb-8 '>needs a raise</h1>
            </div>

            <p className='text-lg font-normal pb-8'>Kula is a recruitment automation platform that lets you proactively reach out and engage with the top talent everywhere. With Kula, you have complete control, visibility, and predictability on your entire talent pipeline.</p>
            <div className='md:flex justify-center'>
                <div className='responsive-flex-box gap-3 pb-1 md:w-2/4 '>
                    <input type="text"
                        placeholder='Enter your work email'
                        className=' flex-1 text-black p-2 rounded-md outline-none' />
                    <ButtonCommon>Book a demo</ButtonCommon>
                </div>
            </div>


            <div className=' md:min-h-screen flex-jc-ic'>
                <video
                    // src={"https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a2d7f2bcd7b198691ad_New-file-[copy]-[copy]%20(2)-transcode.mp4"}
                    poster={"https://i.vimeocdn.com/video/1523939837-409fd28fc27eada34b75912d18481f4bb5c9a04a477de2c4d419bae2a07ba076-d?mw=1100&mh=619"}
                    className='md:min-h-screen video-card'
                    preload="metadata"
                    controls
                    loop
                    autoPlay
                    playsInline
                    muted={true}
                >
                </video>
            </div>

        </div>
    )
}

export default Home