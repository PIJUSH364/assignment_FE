import React, { useEffect, useState } from 'react'
import { videoLinks } from './common/videoLinks'


const VideoWithScrollText = () => {
    const [indexValue, setIndexValue] = useState(0);
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // when intersecting then only video src change
                setIndexValue(parseInt(entry.target.classList[1]));
            }

        })

    }, {
        threshold: 0.6
    });

    useEffect(() => {
        cards.forEach((card) => observer.observe(card));
    }, [indexValue])

    return (
        <div className='bg-gray-5000 flex flex-col lg:flex-row lg:p-24 p-16 pb-36 gap-10 height-ch  '>
            {/* side-left */}
            <div className='lg:w-3/6  text-left overflow-y-scroll no-scrollbar overflow-auto '>

                {/* sub-section-one */}
                <div className='card 0 lg:pb-40 pb-10 '>
                    <p className='font-bold text-3xl pb-3 text-purple-600'>Kula Outreach</p>
                    <div className='hidden lg:block'>
                        <p className='font-extrabold text-5xl pb-3'>Automated </p>
                        <p className='font-extrabold text-5xl pb-3'>Candidate </p>
                        <p className='font-extrabold text-5xl pb-6'>Follow-ups</p>
                    </div>
                    <div className='lg:hidden block'>
                        <p className='font-extrabold text-4xl pb-6 tracking-wide leading-snug'>Automated Candidate  Follow-ups</p>
                    </div>

                    <p className='text-one-zero-nine tracking-wide text-lg pb-8'>For prospective candidates, send automated, periodic follow-ups and value-adds to nurture long-term relationships</p>

                    {/* mobile device only */}
                    <div className='w-full h-full lg:hidden block py-8'>
                        <video
                            src={videoLinks[1]}
                            className=' min-w-full min-h-full object-cover rounder-video'
                            preload="metadata"
                            loop
                            autoPlay
                            playsInline
                            muted={true}
                        >
                        </video>
                    </div>
                </div>
                {/* sub-section-two */}
                <div className='card 1 lg:pb-40 pb-10 '>
                    <p className='font-bold text-3xl pb-3 text-purple-600'>Kula Outreach</p>
                    <div className='hidden lg:block'>
                        <p className='font-extrabold text-5xl pb-3'>Personalized </p>
                        <p className='font-extrabold text-5xl pb-3'>Candidate Reach</p>
                        <p className='font-extrabold text-5xl pb-6'>Outs</p>
                    </div>
                    <div className='lg:hidden block'>
                        <p className='text-one-zero-nine tracking-wide text-lg pb-8'>Personalized Candidate Reach Outs</p>
                    </div>
                    <p className='text-one-zero-nine tracking-wide text-lg pb-8'>No more spray and pray. Ensure 1:1 communication to all of your connections through dynamic personalization capabilities</p>
                    {/* mobile device only */}
                    <div className='w-full h-full lg:hidden block py-8'>
                        <video
                            src={videoLinks[2]}
                            className=' min-w-full min-h-full object-cover rounder-video'
                            preload="metadata"
                            loop
                            autoPlay
                            playsInline
                            muted={true}
                        >
                        </video>
                    </div>
                </div>
                {/* sub-section-three */}
                <div className='card 2 lg:pb-40 pb-10 '>
                    <p className='font-bold text-3xl pb-3 text-purple-600'>Kula Outreach</p>
                    <div className='hidden lg:block'>
                        <p className='font-extrabold text-5xl pb-3'>Reach out on</p>
                        <p className='font-extrabold text-5xl pb-3'>channels</p>
                        <p className='font-extrabold text-5xl pb-6'>candidates prefer</p>
                    </div>
                    <div className='lg:hidden block'>
                        <p className='text-one-zero-nine tracking-wide text-lg pb-8'>Reach out on channels candidates prefer</p>
                    </div>
                    <p className='text-one-zero-nine tracking-wide text-lg pb-8'>Devise multichannel engagement flows with email, LinkedIn requests, and InMails.</p>
                    {/* mobile device only */}
                    <div className='w-full h-full lg:hidden block py-8'>
                        <video
                            src={videoLinks[3]}
                            className=' min-w-full min-h-full object-cover rounder-video'
                            preload="metadata"
                            loop
                            autoPlay
                            playsInline
                            muted={true}
                        >
                        </video>
                    </div>

                </div>
            </div>
            {/* side-right */}
            <div className='w-full h-full  p-2 pl-14 hidden lg:block'>
                <video
                    src={videoLinks[indexValue]}
                    className=' min-w-full min-h-full object-cover rounder-video'
                    preload="metadata"
                    loop
                    autoPlay
                    playsInline
                    muted={true}
                >
                </video>
            </div>

        </div >
    )
}

export default VideoWithScrollText