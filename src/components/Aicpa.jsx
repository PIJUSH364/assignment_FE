import React from 'react'

const Aicpa = () => {
    return (
        <div className='p-24 flex flex-col items-center'>

            <img className='w-60 pb-10' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630752a7b57278d2875efd5c_soc2.svg" alt="logo" />

            <div className='text-center '>
                <h1 className='font-extrabold text-5xl pb-3'>Security isn't an </h1>
                <h1 className='font-extrabold text-5xl pb-8'>afterthought for us</h1>
                <div className='text-center md:block hidden'>
                    <p className='text-one-zero-nine  text-lg  '>Our secure development practices have enterprise-grade security baked in, by design. The </p>
                    <p className='text-one-zero-nine  text-lg  '>SOC 2 Type II certification, user permissions, and role controls mitigate cybersecurity risks and</p>
                    <p className='text-one-zero-nine  text-lg  '>ensure greater peace of mind.</p>
                </div>
                <p className='text-one-zero-nine  text-lg md:hidden '>Our secure development practices have enterprise-grade security baked in, by design. The SOC 2 Type II certification, user permissions, and role controls mitigate cybersecurity risks and ensure greater peace of mind.</p>
            </div>
        </div>

    )
}

export default Aicpa