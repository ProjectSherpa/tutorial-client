import React, { PropTypes } from 'react'

import LearnThis from './LearnThis';
import WhyScale from './WhyScale';
import TeachingApproach from './TeachingApproach';
import Pricing from './Pricing';
import SherpaTeam from './SherpaTeam';
import FAQ from './FAQ';
import Reviews from './Reviews';


export default function SplashContent (props) {
  return (
    <div className="splash-container">
      <LearnThis />
      <SherpaTeam />
      <FAQ />
      <Reviews />
    </div>
    
  )
}