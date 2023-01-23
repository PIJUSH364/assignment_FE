import React from 'react'
import ButtonCommon from '../components/common/ButtonCommon'

const NavBar = () => {
    return (
        <div className='bg-black text-white flex flex-row justify-between p-4 items-center top-0 sticky'>
            <div className=' flex flex-row gap-8 items-center'>
                {/* logo */}
                <img className='w-12' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png" alt="logo-img" />
                {/* menuItem */}
                <div className='sm:flex flex-row gap-5 hidden text-medium '>
                    <p className='menu-item'>
                        Product
                        <span className='pl-2'>
                            <i className='fa-solid fa-angle-down  hover:rotate-180 ' />
                        </span>
                    </p>
                    <p className='menu-item'>
                        our Story
                        <span className='pl-2'>
                            <i className='fa-solid fa-angle-down hover:rotate-180' />
                        </span>
                    </p>
                    <p className='menu-item'>
                        Resources
                        <span className='pl-2'>
                            <i className='fa-solid fa-angle-down hover:rotate-180' />
                        </span>
                    </p>
                </div>
            </div>

            <div >
                {/* button */}
                <div className='hidden sm:block'>
                    <ButtonCommon>Book a demo</ButtonCommon>
                </div>

                {/* responsiveMenuIcon */}
                <i className="fa-solid fa-bars block sm:hidden text-2xl" />
            </div>

        </div>
    )
}

export default NavBar