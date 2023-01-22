import React from 'react'

const ButtonCommon = ({ children }) => {
    return (
        <>
            <button className='button-background p-3 px-6 rounded-lg hover:outline-none  hover:ring-slate-800  hover:ring-4'>{children}</button>
        </>
    )
}

export default ButtonCommon