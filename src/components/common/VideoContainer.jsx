import React from 'react'
import { videoLinks } from './videoLinks'

export const VideoContainer = ({ value }) => {
    return (
        <>
            <video
                src={videoLinks[value]}
                className='mobile-video'
                preload="metadata"
                loop
                autoPlay
                playsInline
                muted={true}
            >
            </video>
        </>
    )
}
