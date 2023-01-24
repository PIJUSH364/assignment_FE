import React from 'react'

const AnalyticsKula = () => {
    return (
        <div className='text-center md:p-24 p-10 pb-36 '>
            <div className='flex  lg:flex-row flex-col justify-center gap-14 pt-20 '>
                {/* multiple img src add on this file */}
                <div >
                    <img className='pb-12 ' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630784570e9cb4b078b04708_analytics-p-800.png" alt="img-left" loading='lazy' />
                    <h1 className='font-extrabold text-3xl pb-5'>Analytics</h1>
                    <p className='text-one-zero-nine  text-lg leading-6'> Measure the talent pipeline, manage recruiting performance, and forecast predictably by having complete visibility over the metrics that matter for your recruitment process.</p>
                </div>
                <div>
                    <img className='pb-12' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630784259c00aa8223a76393_extens-p-800.png" alt="img-right" loading='lazy' />
                    <h1 className='font-extrabold text-3xl pb-5'>Kula Everywhere</h1>
                    <p className='text-one-zero-nine  text-lg leading-6'>  Meet our chrome extension. It lets you add contacts to Kula just as easily as you would want it. One-click and your fresh prospect is ready for a personalized reach out.</p>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsKula