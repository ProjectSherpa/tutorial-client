import React, { PropTypes } from 'react'

import LearnThis from './LearnThis';
import Pricing from './Pricing';
import SherpaTeam from './SherpaTeam';
import FAQ from './FAQ';
import Reviews from './Reviews';
import VideoPanel from './VideoPanel';
import EnterNow from './EnterNow';
import AvalanchePanel from './AvalanchePanel';


export default function SplashContent (props) {
  return (
    <div className="splash-container">
      <VideoPanel />
      <LearnThis />
      <EnterNow />
      <AvalanchePanel />
      <SherpaTeam />
      <FAQ />
      <EnterNow />
      <Pricing />
      <Reviews />
    </div>
    
  )
}