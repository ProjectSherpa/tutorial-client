import React from 'react'

import LearnThis from './LearnThis'
import Pricing from './Pricing'
import SherpaTeam from './SherpaTeam'
import FAQ from './FAQ'
import Reviews from './Reviews'
import VideoPanel from './VideoPanel'
import EnterNow from './EnterNow'
import AvalanchePanel from './AvalanchePanel'
import ForkMe from './ForkmeRibbon'

// Main website, components are imported
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
      <ForkMe />
    </div>

  )
}
