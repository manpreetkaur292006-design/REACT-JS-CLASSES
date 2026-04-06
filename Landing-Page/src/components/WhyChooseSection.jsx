import React from 'react'
import { TiTick } from "react-icons/ti";

const WhyChooseSection = () => {
  return (
    <>
      <div className='why-choose-section'>
        <h2 className='why-title'>Why Choose Inner Peace?</h2>
        <div className='why-grid'>
          <div className='why-item'>
            <div className='why-icon'>
              <TiTick />
            </div>
            <p>
              Science-backed techniques proven by neuroscience
            </p>
          </div>
          <div className='why-item'>
            <div className='why-icon'>
              <TiTick />
            </div>
            <p>
              Personalized journey adapted to your needs
            </p>
          </div>
          <div className='why-item'>
            <div className='why-icon'>
              <TiTick />
            </div>
            <p>
              Expert guidance from certified instructors
            </p>
          </div>
          <div className='why-item'>
            <div className='why-icon'>
              <TiTick />
            </div>
            <p>
              Track your progress with real metrics
            </p>
          </div>
          <div className='why-item'>
            <div className='why-icon'>
              <TiTick />
            </div>
            <p>
              Brought to you by Tooplate website
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseSection