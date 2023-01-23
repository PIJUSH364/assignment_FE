import React, { useEffect, useRef, useState } from "react";

const VxT = ({ links }) => {
    const [index, setIndex] = useState(0);
    const [src, setSrc] = useState(links[0]);
    const videoElement = useRef();

    useEffect(() => {

        videoElement.current.addEventListener("ended", e => {
            if (index < links.length - 1) {
                setIndex((preInd) => preInd + 1);
            }
        });

    }, [src, index]);

    useEffect(() => {
        setSrc(links[index])

        videoElement.current.play();

    }, [src, index]);

    return (
        <video
            className='w-1/2 h-96 border-4 border-green-400'
            poster="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307228139b4fd29c85e516c_34.svg"
            ref={videoElement}
            src={src}
            autoPlay
            muted="true"
            preload="metadata"
            playsInline
            crossOrigin="false"
        />
    )
}

export default VxT