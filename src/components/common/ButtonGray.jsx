import React from 'react'

const ButtonGray = ({ children }) => {
    return (
        <>
            <button className='p-3 px-6 text-base font-medium bg-slate-200 rounded-lg hover:outline-none  hover:ring-slate-700  hover:ring-2'>{children}</button>
        </>
    )
}

export default ButtonGray