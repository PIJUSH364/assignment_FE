import React, { useEffect, useState } from 'react'
import { VideoContainer } from '../components/common/VideoContainer';

export const Assignment = () => {
    const [cardItems, setCardItems] = useState(document.querySelectorAll(".card"));
    const [indexValue, setIndexValue] = useState(0);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // when intersecting then only video src change
                setIndexValue(parseInt(entry.target.classList[1]));
            }

        })

    }, {
        threshold: 0.6
    });

    cardItems.forEach((card) => observer.observe(card));

    useEffect(() => {
        setCardItems(document.querySelectorAll(".card"));
    }, []);

    return (
        <div className=' flex flex-col lg:flex-row lg:p-24 p-10 pb-32 gap-10 height-ch  '>
            {/* side-left */}
            <div className='lg:w-3/6  text-left overflow-y-scroll no-scrollbar overflow-auto '>

                {/* sub-section-one */}
                <div

                    className='card 0 lg:pb-40 pb-10 '>
                    <p className='title-special text-liner-gradient'>Kula Outreach</p>
                    <div className='hidden lg:block'>
                        <p className='tittle-one'>Automated </p>
                        <p className='tittle-one'>Candidate </p>
                        <p className='tittle-one pb-6'>Follow-ups</p>
                    </div>
                    <div className='lg:hidden block'>
                        <p className='title-three'>Automated Candidate  Follow-ups</p>
                    </div>

                    <p className='lite-sub-tittle  pb-8'>For prospective candidates, send automated, periodic follow-ups and value-adds to nurture long-term relationships</p>

                    {/* mobile device only */}
                    <div className='w-full h-full lg:hidden block py-8'>
                        <VideoContainer value={0} />
                    </div>
                </div>
                {/* sub-section-two */}
                <div

                    className='card 1 lg:pb-40 pb-10 '>
                    <p className='title-special text-liner-gradient'>Kula Outreach</p>
                    <div className='hidden lg:block'>
                        <p className='tittle-one'>Personalized </p>
                        <p className='tittle-one pb-3'>Candidate Reach</p>
                        <p className='tittle-one pb-6'>Outs</p>
                    </div>
                    <div className='lg:hidden block'>
                        <p className='title-three'>Personalized Candidate Reach Outs</p>
                    </div>
                    <p className='lite-sub-tittle  pb-8'>No more spray and pray. Ensure 1:1 communication to all of your connections through dynamic personalization capabilities</p>
                    {/* mobile device only */}
                    <div className='w-full h-full lg:hidden block py-8'>
                        <VideoContainer value={1} />
                    </div>
                </div>
                {/* sub-section-three */}
                <div
                    className='card 2 lg:pb-40 pb-10 '>
                    <p className='title-special text-liner-gradient'>Kula Outreach</p>
                    <div className='hidden lg:block'>
                        <p className='tittle-one'>Reach out on</p>
                        <p className='tittle-one'>channels</p>
                        <p className='tittle-one pb-6'>candidates prefer</p>
                    </div>
                    <div className='lg:hidden block'>
                        <p className='title-three'>Reach out on channels candidates prefer</p>
                    </div>
                    <p className='lite-sub-tittle  pb-8'>Devise multichannel engagement flows with email, LinkedIn requests, and InMails.</p>
                    {/* mobile device only */}
                    <div className='w-full h-full lg:hidden block py-8 '>
                        <VideoContainer value={2} />
                    </div>

                </div>
            </div>
            {/* side-right */}
            <div className='w-full h-full  p-2 pl-14 hidden lg:block'>
                <VideoContainer value={indexValue} />
            </div>

        </div >
    )
}
