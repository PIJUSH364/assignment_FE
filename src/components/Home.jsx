import React from 'react'

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-slate-500 to-slate-300 text-white p-8 text-center'>
            <h1 className='text-6xl font-semibold pb-4'>Your recruitment stack </h1>
            <h1 className='text-6xl font-semibold pb-4'>needs a raise</h1>
            <p className='text-2xl font-semibold pb-4'>Kula is a recruitment automation platform that lets you proactively reach out and engage with the top talent everywhere. With Kula, you have complete control, visibility, and predictability on your entire talent pipeline.</p>
            <div className='flex flex-row gap-3 justify-center'>
                <input type="text" placeholder='Enter your work email' className='w-1/4 text-black p-2 rounded-md outline-none' />
                <button className='bg-slate-300 rounded-md p-2 hover:borer-2'>Book a demo</button>
            </div>
        </div>
    )
}

export default Home