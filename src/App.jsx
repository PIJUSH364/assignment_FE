import React from 'react'
import Aicpa from './components/Aicpa'
import AnalyticsKula from './components/AnalyticsKula'
import { CompanySlider } from './components/CompanySlider'
import Home from './layout/Home'
import MultiplwVdoWithText from './components/MultiplwVdoWithText'
import Notification from './components/Notification'
import Outereach from './components/Outereach'
import RecruitmentStack from './components/RecruitmentStack'
import Testimonial from './components/carousel/Testimonial'
import ViewCircles from './components/ViewCircles'
import WhyKula from './components/WhyKula'
import Footer from './footer/Footer'
import NavBar from './navBar/NavBar'
import Observer from './components/Observer'
import { Assignment } from './assignment/Assignment'


const App = () => {
  return (
    <div className='box-border'>
      {/* <Observer /> */}
      <Notification />
      <NavBar />
      <Home />
      <CompanySlider />
      <WhyKula />
      <Outereach />

      {/* assignment Section */}
      <Assignment />
      {/* assignment Section */}


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