import React from 'react'

const MultiplwVdoWithText = () => {
    return (
        <div className='bg-gray-5000 flex flex-row p-24 gap-10 height-ch'>

            {/* side-left */}
            <div className='w-1/3 text-left overflow-y-scroll no-scrollbar overflow-auto'>
                {/* sub-section-one */}
                <div className='pb-40 '>
                    <p className='font-bold text-3xl pb-3 text-purple-600'>Kula Circles</p>
                    <p className='font-extrabold text-5xl pb-3'>All your </p>
                    <p className='font-extrabold text-5xl pb-3'>employees’</p>
                    <p className='font-extrabold text-5xl pb-6'>networks in one</p>
                    <p className='font-extrabold text-5xl pb-6'>place</p>
                    <p className='text-one-zero-nine tracking-wide text-lg pb-8'>Bring all your employee networks spread across LinkedIn, Gmail, and spreadsheets, together on one single platform. Apply advanced filters and mine for best-fit candidates.</p>
                </div>
                {/* sub-section-two */}
                <div className='pb-40 '>
                    <p className='font-bold text-3xl pb-3 text-purple-600'>Kula Circles</p>
                    <p className='font-extrabold text-5xl pb-3'>Get referral </p>
                    <p className='font-extrabold text-5xl pb-3'>introductions in</p>
                    <p className='font-extrabold text-5xl pb-6'>one-click</p>
                    <p className='text-one-zero-nine tracking-wide text-lg pb-8'>Request referrals and get introductions in one smooth flow. Fewer follow-ups, more referrals, faster hires.</p>
                </div>
                {/* sub-section-three */}
                <div className='pb-40 '>
                    <p className='font-bold text-3xl pb-3 text-purple-600'>Kula Circles</p>
                    <p className='font-extrabold text-5xl pb-3'>Transparency for</p>
                    <p className='font-extrabold text-5xl pb-3'>the referrers</p>

                    <p className='text-one-zero-nine tracking-wide text-lg pb-8'>The referrers know how their referrals are faring at each stage of the hiring process. Adding more accountability, and reducing reverse follow-ups for a better overall experience.</p>
                </div>
            </div>
            {/* side-right */}
            <div className='w-2/3 pl-10'>
                <img className='rounded-3xl ' loading='lazy' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307228139b4fd29c85e516c_34.svg" alt="RecruitmentStack" />
            </div>
        </div >
    )
}

export default MultiplwVdoWithText