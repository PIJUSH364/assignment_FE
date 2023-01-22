import React from 'react'

const NavBar = () => {
    return (
        <div className='bg-gray-800 text-white flex flex-row justify-between p-4 '>
            <div className=' flex flex-row gap-3'>
                {/* logo */}
                <p>logos</p>
                {/* menuItem */}
                <div className='sm:flex flex-row gap-3 hidden'>
                    <p>one</p>
                    <p>two</p>
                    <p>Three</p>
                </div></div>

            <div >
                {/* button */}
                <p className='hidden sm:block'>button</p>
                {/* responsiveMenuIcon */}
                <p className='block sm:hidden'>icon</p>
            </div>

        </div>
    )
}

export default NavBar