import React, { useEffect } from 'react'
import { useRef } from 'react';

const Observer = () => {
    const cardRef = useRef();
    const cards = document.querySelectorAll(".card");
    useEffect(() => {
        setTimeout(() => {
            obs();
        }, 2000);
    }, [])

    function obs() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // if intersecting after that we are not notice that
                    observer.unobserve(entry.target);
                    console.log("yaa");
                }
                console.log(entry.target.classList.toggle("show", entry.isIntersecting), entry.target.classList[1]);
            });
        },
            {
                // threshold: 0.5 //when 50% on screen
                rootMargin: "-100px" //screen size small 100px ,if +100px then bigger screen
            }
        )
        cards.forEach(card => observer.observe(card));
    }


    // console.log(entry.target.classList[1] === "one")
    return (
        <div className='card-container' ref={cardRef}>
            <div className="card 1 min-h-screen">this is frist one</div>
            <div className="card 2 min-h-screen">this is a frist two</div>
            <div className="card 3 min-h-screen">this is a frist three</div>
            <div className="card min-h-screen">this is a frist four</div>
            <div className="card">this is a frist </div>
            <div className="card">this is a frist </div>
            <div className="card">this is a frist </div>
            <div className="card">this is a frist </div>
            <div className="card">this is a frist </div>
            <div className="card">this is a frist </div>
        </div>
    )
}

export default Observer