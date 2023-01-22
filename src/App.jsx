import React from 'react'
import Aicpa from './components/Aicpa'
import AnalyticsKula from './components/AnalyticsKula'
import { CompanySlider } from './components/CompanySlider'
import Home from './components/Home'
import Notification from './components/Notification'
import Outereach from './components/Outereach'
import RecruitmentStack from './components/RecruitmentStack'
import ViewCircles from './components/ViewCircles'
import WhyKula from './components/WhyKula'
import Footer from './footer/Footer'
import NavBar from './navBar/NavBar'

const App = () => {
  return (
    <div>
      <Notification />
      <NavBar />
      <Home />
      <CompanySlider />
      <WhyKula />
      <Outereach />
      {/* complex component */}
      <ViewCircles />
      {/* complex component */}
      <AnalyticsKula />
      <Aicpa />
      <RecruitmentStack />
      {/* textemonial */}
      <Footer />
    </div>
  )
}

export default App