import React from 'react'

const RecruitmentStack = () => {
    return (
        <div className='flex flex-row border-2 p-24 items-center gap-9'>
            <div className='text-left  w-1/2'>
                <h1 className='font-extrabold text-5xl pb-3'>Plays well with your </h1>
                <h1 className='font-extrabold text-5xl pb-3'>recruitment stack</h1>

                <p className='text-slate-700 '>Kula integrates with your prospecting tools, ATS, and everything else in your hiring stack. Thus, saving you hours of time and boat-loads of frustration from copying data and updating status on multiple excel sheets and dashboards for every new candidate.</p>
            </div>
            <div className='w-1/2'>
                <img className='rounded-3xl ' loading='lazy' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307228139b4fd29c85e516c_34.svg" alt="RecruitmentStack" />
            </div>
        </div>
    )
}

export default RecruitmentStack