import React, { useState } from 'react'

export const DesktopMenu = () => {
    const [itemOne, setItemOne] = useState(false);
    const [itemTwo, setItemTwo] = useState(false);
    return (
        <>
            <div className='sm:flex flex-row gap-7 hidden text-medium'>
                <div>
                    <div
                        onClick={() => {
                            setItemTwo(false)
                            setItemOne(!itemOne)
                        }}
                        className='desktop-menu-item  peer trans-700-eio group'>
                        Product
                        <span className='pl-2'>
                            <i className={`fa-solid fa-angle-down ${itemOne ? "rotate-180" : ""}  trans-700-eio`} />
                        </span>
                    </div>
                    {/* sub menu card */}
                    
                    <div
                        onMouseLeave={() => setItemOne(false)}
                        className={`desktop-sub-menu-card trans-400-eio  ${itemOne ? "translate-y-0 opacity-100" : ""}`}>
                        <p className='hover:sub-menu-item trans-700-eio'>kala Outereach</p>
                        <p className='hover:sub-menu-item trans-700-eio'>kala circle</p>
                    </div>
                </div>
                <div className=' trans-700-eio desktop-menu-item'>Our Story </div>
                <div>

                    <div
                        onClick={() => {
                            setItemOne(false)
                            setItemTwo(!itemTwo)

                        }}
                        className='desktop-menu-item  peer trans-700-eio group  focus:underline'>
                        Resources
                        <span className='pl-2'>
                            <i className={`fa-solid fa-angle-down ${itemTwo ? "rotate-180" : ""}  trans-700-eio`} />
                        </span>
                    </div>
                    {/* sub menu card */}
                
                    <div
                        onMouseLeave={() => setItemTwo(false)}
                        className={`desktop-sub-menu-card trans-400-eio ${itemTwo ? "translate-y-0 opacity-100" : ""}`}>
                        <p className='hover:sub-menu-item trans-700-eio '>Blog</p>
                        <p className='hover:sub-menu-item trans-700-eio  ' >Guides</p>
                    </div>
                </div>
            </div>
        </>
    )
}



// {
//     navItem && navItem.map((item) =>
//         <div onMouseLeave={() => setItemOne(false)}>
//             <div
//                 onMouseEnter={() => setItemOne(true)}
//                 className='desktop-menu-item  peer trans-700-eio group'>
//                 {item.menuItem}
//                 <span className='pl-2'>
//                     <i className={`fa-solid fa-angle-down ${itemOne ? "rotate-180" : ""}  trans-700-eio`} />
//                 </span>
//             </div>
//             {/* sub menu card */}
//             {/* some bugs on this section */}
//             <div className={`desktop-sub-menu-card trans-400-eio  ${itemOne ? "translate-y-0 opacity-100" : ""}`}>
//                 {
//                     item.subMenuItem.map((subItem) =>
//                         <p className='hover:sub-menu-item trans-700-eio'>{subItem}</p>)
//                 }
//             </div>
//         </div>
//     )
// }