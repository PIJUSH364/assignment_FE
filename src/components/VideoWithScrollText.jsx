import React from 'react'

const VideoWithScrollText = () => {
    return (
        <div className='bg-gray-5000 flex flex-row p-24 gap-10 height-ch '>

            {/* side-left */}
            <div className='w-1/3 text-left overflow-y-scroll no-scrollbar overflow-auto'>
                {/* sub-section-one */}
                <div className='pb-40 '>
                    <p className='font-bold text-3xl pb-3 text-purple-600'>Kula Outreach</p>
                    <p className='font-extrabold text-5xl pb-3'>Automated </p>
                    <p className='font-extrabold text-5xl pb-3'>Candidate </p>
                    <p className='font-extrabold text-5xl pb-6'>Follow-ups</p>
                    <p className='text-one-zero-nine tracking-wide text-lg pb-8'>For prospective candidates, send automated, periodic follow-ups and value-adds to nurture long-term relationships</p>
                </div>
                {/* sub-section-two */}
                <div className='pb-40 '>
                    <p className='font-bold text-3xl pb-3 text-purple-600'>Kula Outreach</p>
                    <p className='font-extrabold text-5xl pb-3'>Personalized </p>
                    <p className='font-extrabold text-5xl pb-3'>Candidate Reach</p>
                    <p className='font-extrabold text-5xl pb-6'>Outs</p>
                    <p className='text-one-zero-nine tracking-wide text-lg pb-8'>No more spray and pray. Ensure 1:1 communication to all of your connections through dynamic personalization capabilities</p>
                </div>
                {/* sub-section-three */}
                <div className='pb-40 '>
                    <p className='font-bold text-3xl pb-3 text-purple-600'>Kula Outreach</p>
                    <p className='font-extrabold text-5xl pb-3'>Reach out on</p>
                    <p className='font-extrabold text-5xl pb-3'>channels</p>
                    <p className='font-extrabold text-5xl pb-6'>candidates prefer</p>
                    <p className='text-one-zero-nine tracking-wide text-lg pb-8'>Devise multichannel engagement flows with email, LinkedIn requests, and InMails.</p>
                </div>
            </div>
            {/* side-right */}
            <div className='w-2/3 pl-10'>
                <img className='rounded-3xl w-9/12' loading='lazy' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307228139b4fd29c85e516c_34.svg" alt="RecruitmentStack" />
            </div>
        </div >
    )
}

export default VideoWithScrollText