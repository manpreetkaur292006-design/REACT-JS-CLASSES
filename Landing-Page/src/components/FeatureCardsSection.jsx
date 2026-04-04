import React from 'react'

const FeatureCardsSection = () => {
  return (
    <>
      <div className='feature-cards-section'>
        <h1>Discover Mindfulness</h1>
        <p>Transform your mind, transform your life</p>
        <div id='feature-cards'>

          <div className='cards' id='card-1'>
            <div id='symbol-1' className='symbols'>🧠</div>
            <h1>Rewire Your Brain</h1>
            <p>
              Neuroplasticity in action - just 10
              <br />
              minutes daily physically reshapes 
              <br />
              your brain for better focus and
              <br />
              emotional control.
            </p>
          </div>

          <div className='cards' id='card-2'>
            <div id='symbol-2' className='symbols'>⚡</div>
            <h1>Instant Calm</h1>
            <p>
              Access immediate stress relief
              <br />
              through proven breathing
              <br />
              techniques that activate your
              <br />
              parasympathetic nervous system.
            </p>
          </div>

          <div className='cards' id='card-3'>
            <div id='symbol-3' className='symbols'>🎯</div>
            <h1>Peak Performance</h1>
            <p>
              Achieve flow states more easily and 
              <br />
              unlock your full potential in work,
              <br />
              creativity, and personal growth.
            </p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default FeatureCardsSection