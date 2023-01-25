import React from 'react'

export const MobileMenu = () => {
    return (
        <>
            <div className="group/product trans-700-eio cursor-pointer">
                <div className='menu-base'>
                    <p >Product</p>
                    <div className='pl-2'>
                        <i className='fa-solid fa-angle-down group-hover/product:rotate-180  trans-700-eio' />
                    </div>
                </div>
                {/* sub menu card */}
                <div className='sub-menu-card group-hover/product:flex'>
                    <p className='hover:sub-menu-item trans-700-eio'>kala Outereach</p>
                    <p className='hover:sub-menu-item trans-700-eio'>kala circle</p>
                </div>
            </div>
            <div className="group trans-700-eio cursor-pointer">
                <div className='menu-base pl-3 hover:sub-menu-item '>
                    <p>Our Story</p>
                </div>
            </div>
            <div className="group/resource trans-700-eio cursor-pointer">
                <div className='menu-base '>
                    <p>Resource</p>
                    <div className='pl-2'>
                        <i className='fa-solid fa-angle-down group-hover/resource:rotate-180  trans-700-eio' />
                    </div>
                </div>
                {/* sub menu card */}
                <div className='sub-menu-card group-hover/resource:flex'>
                    <p className='hover:sub-menu-item trans-700-eio'>Blog</p>
                    <p className='hover:sub-menu-item trans-700-eio'>Guides</p>
                </div>
            </div>
        </>
    )
}
