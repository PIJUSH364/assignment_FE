import React from 'react'
import video3 from '../utils/videos/v3.mp4'
import video1 from '../utils/videos/v1.webm'

const Video = () => {
    return (
        <div className='bg-gray-200 border-4 border-red-400'>
            <video className='w-1/2 h-96 border-4 border-green-400' autoPlay loop muted="true" preload="metadata" poster="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307228139b4fd29c85e516c_34.svg">
                <source src={video3} />
                <source src={video1} />
            </video>
        </div>
    )
}

export default Video