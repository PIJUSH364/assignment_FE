import React from 'react'

const ButtonCommon = ({ children }) => {
    return (
        <>
            <button className='button-background p-3 px-6 rounded-lg'>{children}</button>
        </>
    )
}

export default ButtonCommon