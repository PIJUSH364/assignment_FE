import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white p-10'>
            {/* top-section */}
            <div className='flex flex-row pb-5'>
                {/* left */}
                <div className='w-1/3'>
                    <h1 className='text-4xl font-semibold pb-4'>Kula</h1>
                    <p className='text-base font-normal pb-4'>Join our newsletter to stay up to date on features and releases</p>
                    <div className='flex flex-row gap-3 pb-1'>
                        <input type="text" placeholder='Enter your work email' className=' text-black p-2 rounded-md outline-none' />
                        <button className='bg-slate-300 rounded-md p-2 hover:borer-2'>Book a demo</button>
                    </div>
                    <p className='font-normal text-xs'>By subscribing you agree to our Privacy Policy and provide consent to receive updates from our company.</p>
                </div>
                {/* right */}
                <div className='flex flex-row  gap-7 w-2/3 justify-around flex-wrap '>
                    <div>
                        <p className='text-lg font-semibold pb-4'>Product</p>
                        <p className='text-base pb-4  text-stone-400 hover:underline '>Kula Outreach</p>
                        <p className='text-base  text-stone-400 hover:underline '>Kula Circles</p>
                    </div>
                    <div>
                        <p className='text-lg font-semibold pb-4'>Company</p>
                        <p className='text-base pb-4  text-stone-400 hover:underline '>Our Story</p>
                        <p className='text-base pb-4  text-stone-400 hover:underline '>Careers</p>
                        <p className='text-base  text-stone-400 hover:underline '>Book a demo</p>

                    </div>
                    <div>
                        <p className='text-lg font-semibold pb-4'>Resources</p>
                        <p className='text-base pb-4  text-stone-400 hover:underline '>Guides</p>
                        <p className='text-base  text-stone-400 hover:underline '>Blog</p>
                    </div>
                    <div>
                        <p className='text-lg font-semibold pb-4'>Follow us</p>
                        <p className='text-base pb-4  text-stone-400 hover:underline '>Instagram</p>
                        <p className='text-base pb-4  text-stone-400 hover:underline '>Twitter</p>
                        <p className='text-base  text-stone-400 hover:underline '>LinkedIn</p>
                    </div>
                </div>
            </div>
            {/* buttom section */}
            <div className='flex flex-row justify-between border-t-2 border-slate-600 pt-5'>
                {/* left */}
                <p className='text-sm font-normal  text-stone-400'>© 2022 Kula.ai. All right reserved.</p>
                {/* right */}
                <div className='flex flex-row gap-8 text-sm font-normal  text-stone-400 '>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Footer