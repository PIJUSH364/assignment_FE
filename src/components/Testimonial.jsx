import React from 'react'
import { sliderData } from './carousel/sliderData'
import Test from './carousel/Test'


const Slide = React.lazy(() => import('./common/Slide'));

const Testimonial = () => {
    return (
        <div >
            {
                sliderData && sliderData.map((slide, key) =>
                    <Suspense key={key} fallback={<div>Loading...</div>}>
                        < Slide img={slide.image} logo={slide.logo} name={slide.name} description={slide.description} subtitle={slide.subtitle} />
                    </Suspense>
                )
            }
            {/* <Test /> */}
        </div>
    )
}

export default Testimonial