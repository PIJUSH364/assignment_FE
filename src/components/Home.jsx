import React from 'react'
import ButtonCommon from './common/ButtonCommon'

const Home = () => {
    return (
        <div className='background-home text-white  text-center p-24 pt-32'>
            <h1 className='text-6xl font-semibold pb-2'>Your recruitment stack </h1>
            <h1 className='text-6xl font-semibold pb-8'>needs a raise</h1>
            <p className='text-lg font-normal pb-8'>Kula is a recruitment automation platform that lets you proactively reach out and engage with the top talent everywhere. With Kula, you have complete control, visibility, and predictability on your entire talent pipeline.</p>
            <div className='flex justify-center'>
                <div className='flex flex-row gap-3 pb-1 w-2/4 '>
                    <input type="text" placeholder='Enter your work email' className=' flex-1 text-black p-2 rounded-md outline-none' />
                    <ButtonCommon>Book a demo</ButtonCommon>
                </div>
            </div>

        </div>
    )
}

export default Home