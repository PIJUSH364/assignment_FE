import React from 'react'
import Aicpa from './components/Aicpa'
import AnalyticsKula from './components/AnalyticsKula'
import { CompanySlider } from './components/CompanySlider'
import Home from './components/Home'
import MultiplwVdoWithText from './components/MultiplwVdoWithText'
import Notification from './components/Notification'
import Outereach from './components/Outereach'
import RecruitmentStack from './components/RecruitmentStack'
import Testimonial from './components/Testimonial'
import Video from './components/Video'
import VideoWithScrollText from './components/VideoWithScrollText'
import ViewCircles from './components/ViewCircles'
import WhyKula from './components/WhyKula'
import Footer from './footer/Footer'
import NavBar from './navBar/NavBar'
import PlayInLineVideo from './components/PlayInLineVideo'
import { videoLinks } from './components/common/videoLinks'
import Observer from './components/Observer'

const App = () => {
  return (
    <div className='box-border'>
      {/* <Observer /> */}
      {/* <PlayInLineVideo videos={videoLinks} /> */}
      {/* <Video /> */}
      <Notification />
      <NavBar />
      <Home />
      <CompanySlider />
      <WhyKula />
      <Outereach />
      <VideoWithScrollText />
      <ViewCircles />
      <MultiplwVdoWithText />
      <AnalyticsKula />
      <Aicpa />
      <RecruitmentStack />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App