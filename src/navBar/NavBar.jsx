import React, { useState } from 'react'
import ButtonCommon from '../components/common/ButtonCommon'
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

const NavBar = () => {
    const [status, setStatus] = useState(false);
    return (
        <div >
            <div className='bg-black text-white flex flex-row justify-between p-4 items-center top-0 sticky z-50'>
                <div className=' flex flex-row gap-8 items-center'>
                    {/* logo */}
                    <img className='w-12' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png" alt="logo-img" />
                    {/* desktop menuItem */}
                    <DesktopMenu />
                </div>
                <div >
                    {/* button */}
                    <div className='hidden sm:block'>
                        <ButtonCommon>Book a demo</ButtonCommon>
                    </div>

                    {/* responsiveMenuIcon */}
                    <i
                        className={` fa-solid  ${status ? "fa-close text-3xl" : "fa-bars text-2xl"} trans-1000-eio block sm:hidden `}
                        onClick={() => setStatus(!status)}
                    />

                </div>
                {/* fa-minus fa-bars*/}
            </div>
            {/* mobile only */}
            <div className={`mobile-menu-card group z-20 absolute w-full trans-700-eio  ${status ? "translate-x-0" : "-translate-y-full"}`}>
                <MobileMenu />
            </div>
        </div>

    )
}

export default NavBar