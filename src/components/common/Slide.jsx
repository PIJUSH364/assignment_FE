import React from 'react'

const Slide = ({ img, logo, description, name, subtitle }) => {
    console.log(name);
    return (
        <>
            <div className='flex flex-col md:flex-row gap-14 p-24 items-center'>
                {/* left */}
                <img className='md:w-1/2' src={img} alt="greenhouse-logo" />
                {/* right */}
                <div>
                    <p className='pb-14  tracking-wide text-xl '>"{description}"</p>
                    <div className='flex flex-row  gap-10 justify-between items-stretch'>
                        <div >
                            <p className='text-xl font-semibold pb-2'>{name}</p>
                            <p className='text-one-zero-nine-t '>{subtitle}</p>
                        </div>
                        <div className='w-px bg-black'></div>
                        <img className='w-60' src={logo} alt="greenhouse-logo" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Slide