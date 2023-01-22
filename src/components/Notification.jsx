import React, { useState } from 'react'

const Notification = () => {
    const [status, setStatus] = useState(true);
    const display = status ? "flex" : "none";
    return (
        <div className='flex flex-row bg-slate-700 text-white justify-between items-center p-3 px-8' style={{
            display
        }}>
            <p>🚀 Your support took us to the Top and made us Product of the Day. Thanks! 🎉</p>
            <div className='flex flex-row gap-5 justify-center items-center'>
                <img className='w-44' src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=363064&theme=light&period=daily" alt="ico-img" />
                {/* <i class="fa-solid fa-angle-up"></i> */}
                <i className="fa-solid fa-xmark text-2xl" onClick={() => setStatus(false)} />
            </div>
        </div>
    )
}

export default Notification