import React from 'react'
import ButtonCommon from '../components/common/ButtonCommon'

const NavBar = () => {
    return (
        <div className='bg-black text-white flex flex-row justify-between p-4 items-center top-0 sticky'>
            <div className=' flex flex-row gap-3 items-center'>
                {/* logo */}
                <img className='w-12' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png" alt="logo-img" />
                {/* menuItem */}
                <div className='sm:flex flex-row gap-3 hidden'>
                    <p>one</p>
                    <p>two</p>
                    <p>Three</p>
                </div>
            </div>

            <div >
                {/* button */}
                <ButtonCommon>Book a demo</ButtonCommon>
                {/* responsiveMenuIcon */}
                <p className='block sm:hidden'>icon</p>
            </div>

        </div>
    )
}

export default NavBar