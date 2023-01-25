import React, { useEffect, useState } from 'react'

const Notification = () => {
    const [status, setStatus] = useState(true);
    const display = status ? "flex" : "none";
    useEffect(() => {
        setTimeout(() => {
            setStatus(false);
        }, 10000);

    }, [status])

    return (
        <div className='box-border z-50 flex flex-col gap-y-5 md:flex-row bg-slate-700 text-white  md:justify-between md:items-center md:p-3 p-6' style={{
            display
        }}>
            <p>🚀 Your support took us to the Top and made us Product of the Day. Thanks! 🎉</p>
            <div className='flex flex-row gap-5 md:justify-center items-center justify-between '>
                <img className='w-44' src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=363064&theme=light&period=daily" alt="ico-img" />

                <i className="fa-solid fa-xmark text-2xl" onClick={() => setStatus(false)} />
            </div>
        </div>
    )
}

export default Notification