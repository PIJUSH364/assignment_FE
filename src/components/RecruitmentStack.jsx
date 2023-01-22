import React from 'react'

const RecruitmentStack = () => {
    return (
        <div className='flex   p-24 items-center gap-9 flex-col  md:flex-row'>
            <div className='text-left  md:w-1/2 '>
                <h1 className='font-extrabold text-5xl pb-3'>Plays well with your </h1>
                <h1 className='font-extrabold text-5xl pb-8'>recruitment stack</h1>

                <p className='text-one-zero-nine tracking-wide text-lg pb-8'>Kula integrates with your prospecting tools, ATS, and everything else in your hiring stack. Thus, saving you hours of time and boat-loads of frustration from copying data and updating status on multiple excel sheets and dashboards for every new candidate.</p>
                <div className='flex flex-row gap-8 items-center ' >
                    <img className='w-32' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63072412c88002beb289f2a4_greenhouse.svg" alt="greenhouse-logo" />
                    <img className='w-32' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63072406210398a19be79c65_lever.svg" alt="lever=logo" />
                </div>
            </div>
            <div className='md:w-1/2'>
                <img className='rounded-3xl ' loading='lazy' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307228139b4fd29c85e516c_34.svg" alt="RecruitmentStack" />
            </div>
        </div>
    )
}

export default RecruitmentStack