import React, { useEffect, useState } from 'react'
import { VideoContainer } from './common/VideoContainer'


const MultiplwVdoWithText = () => {



    return (
        <div className='bg-gray-5000 flex flex-col lg:flex-row lg:p-24 p-12 pb-36 gap-10 height-ch  '>

            {/* side-left */}
            <div className='lg:w-3/6  text-left overflow-y-scroll no-scrollbar overflow-auto '>
                {/* sub-section-one */}
                <div className='lg:pb-40 pb-10 '>
                    <p className='title-special text-liner-gradient'>Kula Circles</p>
                    <div className='hidden lg:block'>
                        <p className='tittle-one'>Get referral </p>
                        <p className='tittle-one'>introductions in</p>
                        <p className='tittle-one pb-6'>one-click</p>
                    </div>
                    <div className='lg:hidden block'>
                        <p className='title-three'>Get referral introductions in one-click</p>
                    </div>
                    <p className='lite-sub-tittle pb-8'>Bring all your employee networks spread across LinkedIn, Gmail, and spreadsheets, together on one single platform. Apply advanced filters and mine for best-fit candidates.</p>

                    {/* mobile device only */}
                    <div className='w-full h-full lg:hidden block py-8'>
                        <VideoContainer value={3} />
                    </div>
                </div>
                {/* sub-section-two */}
                <div className=' lg:pb-40 pb-10 '>
                    <p className='title-special text-liner-gradient'>Kula Circles</p>
                    <div className='hidden lg:block'>
                        <p className='tittle-one'>Get referral </p>
                        <p className='tittle-one'>introductions in</p>
                        <p className='tittle-one pb-6'>one-click</p>
                    </div>
                    <div className='lg:hidden block'>
                        <p className='title-three'>Transparency for the referrers</p>
                    </div>
                    <p className='lite-sub-tittle pb-8'>TRequest referrals and get introductions in one smooth flow. Fewer follow-ups, more referrals, faster hires.</p>
                    {/* mobile device only */}
                    <div className='w-full h-full lg:hidden block py-8'>
                        <VideoContainer value={3} />
                    </div>
                </div>
                {/* sub-section-three */}
                <div className=' lg:pb-40 pb-10 '>
                    <p className='title-special text-liner-gradient'>Kula Circles</p>
                    <div className='hidden lg:block'>
                        <p className='tittle-one'>Transparency for</p>
                        <p className='tittle-one'>the referrers</p>
                    </div>
                    <div className='lg:hidden block'>
                        <p className='title-three'>Transparency for the referrers</p>
                    </div>
                    <p className='lite-sub-tittle  pb-8'>The referrers know how their referrals are faring at each stage of the hiring process. Adding more accountability, and reducing reverse follow-ups for a better overall experience.</p>

                    {/* mobile device only */}
                    <div className='w-full h-full lg:hidden block py-8'>
                        <VideoContainer value={3} />
                    </div>
                </div>
            </div>
            {/* side-right */}
            <div className='w-full h-full  p-2 pl-14 hidden lg:block'>
                <VideoContainer value={3} />
            </div>
        </div >
    )
}

export default MultiplwVdoWithText