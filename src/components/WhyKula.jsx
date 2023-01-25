import React from 'react'

const WhyKula = () => {
    return (
        <div className='text-center common-container  py-32 '>
            <h1 className='tittle-one'>Your talent pipeline isn’t a</h1>
            <h1 className='tittle-one'>pipe dream anymore</h1>
            <div className='responsive-flex-box justify-center gap-14 gap-y-24 pt-20'>
                {/* multiple src image add remain */}
                <div className=' md:w-1/2'>
                    <div className='flex justify-center'>
                        <img className='pb-12 w-96' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307b6cb23f817485e754ba1_Frame%2023-p-800.png" alt="img-right" loading='lazy' />
                    </div>

                    <h1 className='tittle-two'>Without Kula</h1>
                    <p className='lite-sub-tittle '> <span className='text-black font-semibold'>Before Kula:</span> Candidates are scattered all over. Managing operations is the most hated part of recruitment.</p>
                </div>
                <div className=' md:w-1/2'>
                    <div className='flex justify-center'>
                        <img className='pb-12 w-96' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307b2fbfa9f10082210e8dd_im-p-800.png" alt="img-left" loading='lazy' />
                    </div>
                    <h1 className='tittle-two'>With Kula</h1>
                    <p className='lite-sub-tittle '> <span className='text-black font-semibold'>  After Kula:</span> All candidates are in one place. Your communication is automated. You have reports ready for every opening. You feel confident..</p>
                </div>
            </div>
        </div>
    )
}

export default WhyKula