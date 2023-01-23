import React from 'react'

const WhyKula = () => {
    return (
        <div className='text-center md:p-24 p-5 '>
            <h1 className='font-extrabold text-5xl pb-3'>Your talent pipeline isn’t a</h1>
            <h1 className='font-extrabold text-5xl pb-3'>pipe dream anymore</h1>
            <div className='flex md:flex-row flex-col justify-center gap-14 pt-20'>
                {/* multiple src image add remain */}
                <div>
                    <div className='flex justify-center'>
                        <img className='pb-12 w-96' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307b6cb23f817485e754ba1_Frame%2023-p-800.png" alt="img-right" loading='lazy' />
                    </div>

                    <h1 className='font-extrabold text-3xl pb-5'>Without Kula</h1>
                    <p className='text-one-zero-nine  text-lg leading-6'> <span className='text-black font-semibold'>Before Kula:</span> Candidates are scattered all over. Managing operations is the most hated part of recruitment.</p>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='pb-12 w-96' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307b2fbfa9f10082210e8dd_im-p-800.png" alt="img-left" loading='lazy' />
                    </div>
                    <h1 className='font-extrabold text-3xl pb-5'>With Kula</h1>
                    <p className='text-one-zero-nine  text-lg leading-6'> <span className='text-black font-semibold'>  After Kula:</span> All candidates are in one place. Your communication is automated. You have reports ready for every opening. You feel confident..</p>
                </div>
            </div>
        </div>
    )
}

export default WhyKula