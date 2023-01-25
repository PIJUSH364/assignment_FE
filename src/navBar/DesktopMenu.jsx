import React from 'react'

export const DesktopMenu = () => {
    return (
        <>
            <div className='sm:flex flex-row gap-7 hidden text-medium '>
                <div>
                    <div className='desktop-menu-item  peer trans-700-eio group'>
                        Product
                        <span className='pl-2'>
                            <i className='fa-solid fa-angle-down group-hover:rotate-180  trans-700-eio' />
                        </span>
                    </div>
                    {/* sub menu card */}
                    {/* some bugs on this section */}
                    {/* <div className='desktop-sub-menu-card trans-400-eio  peer-hover:translate-y-0 peer-hover:opacity-100 '>
                        <p className='hover:sub-menu-item trans-700-eio'>kala Outereach</p>
                        <p className='hover:sub-menu-item trans-700-eio'>kala circle</p>
                    </div> */}
                </div>
                <div className=' trans-700-eio desktop-menu-item'>Our Story </div>
                <div>
                    <div className='desktop-menu-item  peer trans-700-eio group'>
                        Resources
                        <span className='pl-2'>
                            <i className='fa-solid fa-angle-down group-hover:rotate-180  trans-700-eio' />
                        </span>
                    </div>
                    {/* sub menu card */}
                    {/* some bugs on this section */}
                    {/* <div className='desktop-sub-menu-card trans-400-eio  peer-hover:translate-y-0  peer-hover:opacity-100 '>
                        <p className='hover:sub-menu-item trans-700-eio '>Blog</p>
                        <p className='hover:sub-menu-item trans-700-eio  ' >Guides</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}
