import React from 'react'
import Rimg1 from '../assets/Rimg1.png'
import Rimg2 from '../assets/Rimg2.png'
import Rimg3 from '../assets/Rimg3.png'

const ResourcesSection = () => {
  return (
    <>
      <div className='resource-section'>
        <div id='resource-1'>
            <h1>
              Resources & Tools
            </h1>
            <p>
              Everything you need to support your mindfulness practice
            </p>
            <button className='resource-btns' id='btn-1'>Meditations</button>
            <button className='resource-btns' id='btn-2'>Courses</button>
            <button className='resource-btns' id='btn-3'>Tools</button>
        </div>

        <div id='resource-2'>
          <div className='resource-cards' id='resource-card-1'>
            <img src={Rimg1} alt="Resource-image-1" className='Rimg'/>
            <h3>Morning Meditation</h3>
            <p>
              Start your day with clarity and intention
              <br />
              through our 15-minute morning
              <br />
              practice.
            </p>
          </div>
          <div className='resource-cards' id='resource-card-2'>
            <img src={Rimg2} alt="Resource-image-2" className='Rimg'/>
            <h3>Stress Relief Session</h3>
            <p>
              Quick 10-minute guided meditation for
              <br />
              immediate stress and anxiety relief.
            </p>
          </div>
          <div className='resource-cards' id='resource-card-3'>
            <img src={Rimg3} alt="Resource-image-3" className='Rimg'/>
            <h3>Sleep Meditation</h3>
            <p>
              Peaceful bedtime meditation to help
              <br />
              you unwind and prepare for restful
              <br />
              sleep.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default ResourcesSection