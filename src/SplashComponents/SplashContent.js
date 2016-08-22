import React, { PropTypes } from 'react'

import LearnThis from './LearnThis';
import Pricing from './Pricing';
import SherpaTeam from './SherpaTeam';
import FAQ from './FAQ';
import Reviews from './Reviews';
import VideoPanel from './VideoPanel';
import EnterNow from './EnterNow';


export default function SplashContent (props) {
  return (
    <div className="splash-container">
      <VideoPanel />
      <LearnThis />
      <EnterNow />
      <SherpaTeam />
      <FAQ />
      <EnterNow />
      <Pricing />
      <Reviews />
    </div>
    
  )
}