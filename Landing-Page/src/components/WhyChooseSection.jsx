import React from 'react'
import { TiTick } from "react-icons/ti";

const WhyChooseSection = () => {
  return (
    <>
      <div className='why-choose-section'>
        <h1>Why Choose Inner Peace?</h1>
        <div id='features-cards'>

          <div className='feature' id='feature-1'>
            <p>
              <TiTick /> Science-backed techniques
              <br />
              proven by neuroscience
            </p>
          </div>

          <div className='feature' id='feature-2'>
            <p>
              <TiTick /> Personalized journey 
              <br />
              adapted to your needs
            </p>
          </div>

          <div className='feature' id='feature-3'>
            <p>
              <TiTick /> Expert guidance from 
              <br />
              certified instructions
            </p>
          </div>

          <div className='feature' id='feature-4'>
            <p>
              <TiTick /> Track your progress with
              <br />
              real metrics
            </p>
          </div>

          <div className='feature' id='feature-5'>
            <p>
              <TiTick /> Brought to you by Tooplate 
              <br />
              website
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default WhyChooseSection