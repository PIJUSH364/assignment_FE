import React from 'react'
import ButtonCommon from '../components/common/ButtonCommon'

const Footer = () => {
    return (
        <div className='bg-black text-white common-container py-16'>
            {/* top-section */}
            <div className='  pb-14 responsive-flex-box gap-y-12 gap-x-12 '>
                {/* left */}
                <div className='md:w-2/5'>
                    <img className='w-16 pb-8' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62f8596d5d479b7fa12e8b74_kula.svg" alt="kula-logo" />
                    <p className='text-base font-normal pb-6 text-[#6d6d6d]  '>Join our newsletter to stay up to date on features and releases</p>
                    <div className='responsive-flex-box  gap-3 pb-1 w-full '>
                        <input type="text" placeholder='Enter your work email' className='placeholder:text-zinc-600 flex-1 bg-neutral-900 text-white p-2 rounded-md outline-none' />
                        <ButtonCommon>Subscribe</ButtonCommon>
                    </div>
                    <p className='font-normal text-xs text-[#6d6d6d]   pt-3'>By subscribing you agree to our Privacy Policy and provide consent to receive updates from our company.</p>
                </div>
                {/* right */}
                <div className='flex flex-row  gap-14 md:w-3/5  md:justify-around flex-wrap '>
                    <div>
                        <p className='text-lg font-semibold pb-4'>Product</p>
                        <p className='pb-4 lite-text  '>Kula Outreach</p>
                        <p className='lite-text  '>Kula Circles</p>
                    </div>
                    <div>
                        <p className='text-lg font-semibold pb-4'>Company</p>
                        <p className='text-base pb-4  text-[#6d6d6d]   hover:underline '>Our Story</p>
                        <p className='pb-4 text-base   text-[#6d6d6d]   hover:underline '>Careers</p>
                        <p className='lite-text  '>Book a demo</p>

                    </div>
                    <div>
                        <p className='text-lg font-semibold pb-4'>Resources</p>
                        <p className='pb-4 lite-text  '>Guides</p>
                        <p className='lite-text  '>Blog</p>
                    </div>
                    <div>
                        <p className='text-lg font-semibold pb-4'>Follow us</p>
                        <p className='pb-4  lite-text  '>
                            <i className="fa-brands fa-instagram pr-4 text-lg"></i>Instagram</p>
                        <p className=' pb-4  lite-text '>
                            <i className="fa-brands fa-twitter pr-4 text-lg" />Twitter</p>
                        <p className='lite-text  '>
                            <i className="fa-brands fa-linkedin pr-4 text-lg"></i>LinkedIn</p>
                    </div>
                </div>
            </div>
            <div className='h-px bg-one-zero-nine'></div>
            {/* buttom section */}
            <div className='responsive-flex-box justify-between text-[#6d6d6d]    pt-6 gap-y-5'>
                {/* left */}
                <p className='text-sm font-normal '>© 2022 Kula.ai. All right reserved.</p>
                {/* right */}
                <div className='responsive-flex-box gap-x-8 gap-y-4 text-sm font-normal  '>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Footer