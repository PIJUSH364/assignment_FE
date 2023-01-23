import React, { useEffect, useState } from 'react'
import { videoLinks } from './common/videoLinks'

const MultiplwVdoWithText = () => {

    const vid4 = "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a2d7f2bcd7b198691ad_New-file-[copy]-[copy]%20(2)-transcode.mp4";

    return (
        <div className='bg-gray-5000 flex flex-col lg:flex-row lg:p-24 p-12 pb-36 gap-10 height-ch  '>

            {/* side-left */}
            <div className='lg:w-3/6  text-left overflow-y-scroll no-scrollbar overflow-auto '>
                {/* sub-section-one */}
                <div className='lg:pb-40 pb-10 '>
                    <p className='font-bold text-3xl pb-3 text-liner-gradient'>Kula Circles</p>
                    <div className='hidden lg:block'>
                        <p className='font-extrabold text-5xl pb-3'>Get referral </p>
                        <p className='font-extrabold text-5xl pb-3'>introductions in</p>
                        <p className='font-extrabold text-5xl pb-6'>one-click</p>
                    </div>
                    <div className='lg:hidden block'>
                        <p className='font-extrabold text-4xl pb-6 tracking-wide leading-snug'>Get referral introductions in one-click</p>
                    </div>
                    <p className='text-one-zero-nine tracking-wide text-lg pb-8'>Bring all your employee networks spread across LinkedIn, Gmail, and spreadsheets, together on one single platform. Apply advanced filters and mine for best-fit candidates.</p>

                    {/* mobile device only */}
                    <div className='w-full h-full lg:hidden block py-8'>
                        <video
                            src={vid4}
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
                <div className=' lg:pb-40 pb-10 '>
                    <p className='font-bold text-3xl pb-3 text-liner-gradient'>Kula Circles</p>
                    <div className='hidden lg:block'>
                        <p className='font-extrabold text-5xl pb-3'>Get referral </p>
                        <p className='font-extrabold text-5xl pb-3'>introductions in</p>
                        <p className='font-extrabold text-5xl pb-6'>one-click</p>
                    </div>
                    <div className='lg:hidden block'>
                        <p className='font-extrabold text-4xl pb-6 tracking-wide leading-snug'>Transparency for the referrers</p>
                    </div>
                    <p className='text-one-zero-nine tracking-wide text-lg pb-8'>TRequest referrals and get introductions in one smooth flow. Fewer follow-ups, more referrals, faster hires.</p>
                    {/* mobile device only */}
                    <div className='w-full h-full lg:hidden block py-8'>
                        <video
                            src={vid4}
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
                <div className=' lg:pb-40 pb-10 '>
                    <p className='font-bold text-3xl pb-3 text-liner-gradient'>Kula Circles</p>
                    <div className='hidden lg:block'>
                        <p className='font-extrabold text-5xl pb-3'>Transparency for</p>
                        <p className='font-extrabold text-5xl pb-3'>the referrers</p>
                    </div>
                    <div className='lg:hidden block'>
                        <p className='font-extrabold text-4xl pb-6 tracking-wide leading-snug'>Transparency for the referrers</p>
                    </div>
                    <p className='text-one-zero-nine tracking-wide text-lg pb-8'>The referrers know how their referrals are faring at each stage of the hiring process. Adding more accountability, and reducing reverse follow-ups for a better overall experience.</p>

                    {/* mobile device only */}
                    <div className='w-full h-full lg:hidden block py-8'>
                        <video
                            src={vid4}
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
                    src={vid4}
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

export default MultiplwVdoWithText