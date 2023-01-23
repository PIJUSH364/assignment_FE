import React from 'react'

const Test = () => {
    return (
        <div className='flex flex-col md:flex-row gap-14 p-24 items-center'>
            <img className='md:w-1/2' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62f4d24d04e067049ad7f8ab_Girish-p-800.png" alt="greenhouse-logo" />
            <div>
                <p className='pb-14  tracking-wide text-xl '>" The talent market is at its competitive best right now. Hiring great talent is not just how you grow, but exist. The founding team of Kula has just the ingredients to solve the recruitment puzzle for companies at all stages of growth."</p>
                <div className='flex flex-row  gap-10 justify-between items-stretch'>
                    <div >
                        <p className='text-xl font-semibold pb-2'>Girish Mathrubootham</p>
                        <p className='text-one-zero-nine-t '>CEO & Founder, Freshworks (NASDAQ: FRSH)</p>
                    </div>
                    <div className='w-px bg-black'></div>
                    <img className='w-60' src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62f4d5ac915f95473a8c064b_freshworks.svg" alt="greenhouse-logo" />
                </div>
            </div>
        </div>
    )
}

export default Test