import React from "react";

const PracticesSection = () => {
  return (
    <>
      <div id="practices-section">
        <h1>Mindful Practices</h1>
        <p>Master these core practices to build your mindfulness toolkit</p>
        <div className="practices-timeline">
          <div className="timeline-label">Foundation</div>
          <div className="timeline-line"></div>
          <div className="timeline-label">Breathing</div>
          <div className="timeline-line"></div>
          <div className="timeline-label">Awareness</div>
          <div className="timeline-line"></div>
          <div className="timeline-label">Integration</div>
        </div>
        <div className="practice-cards">
          <div className="practice-head">
            <div className="practice-logo">🧘</div>
            <div className="practice-name">
              <h2>Foundation Meditation</h2>
              <p>10-20 minutes daily</p>
            </div>
          </div>
          <div className="practice-desc">
            Begin your journey with guided meditation sessions designed
            <br />
            specifically for beginners. Learn the fundamental techniques of
            <br />
            sitting meditation, including proper posture, attention anchoring,
            <br />
            and working with wandering thoughts. Our progressive approach
            <br />
            ensures you build a solid foundation without feeling
            <br />
            overwhelmed.
          </div>
          <div className="practice-btns">
            <button className="pbtn">Stress Reduction</button>
            <button className="pbtn">Mental Clarity</button>
            <button className="pbtn">Emotional Balance</button>
            <button className="pbtn">Better Sleep</button>
          </div>
        </div>
        <div className="practice-cards">
          <div className="practice-head">
            <div className="practice-logo">🌬️</div>
            <div className="practice-name">
              <h2>Conscious Breathing</h2>
              <p>5-10 minutes as needed</p>
            </div>
          </div>
          <div className="practice-desc">
            Master the art of breath awareness with techniques that instantly
            <br />
            calm your nervous system. From box breathing to 4-7-8 patterns,
            <br />
            discover how different breathing exercises can energize, relax, or 
            <br />
            center you throughout your day. Perfect for managing anxiety and 
            <br />
            stress in real-time.
          </div>
          <div className="practice-btns">
            <button className="pbtn">Instant Calm</button>
            <button className="pbtn">Energy Boost</button>
            <button className="pbtn">Focus Enhancement</button>
            <button className="pbtn">Anxiety Relief</button>
          </div>
        </div>
        <div className="practice-cards">
          <div className="practice-head">
            <div className="practice-logo">📝</div>
            <div className="practice-name">
              <h2>Mindful Awareness</h2>
              <p>15 minutes daily</p>
            </div>
          </div>
          <div className="practice-desc">
            Develop meta-awareness through journaling and body scan
            <br />
            practices. Learn to observe your thoughts, emotions, and physical
            <br />
            sensations without judgement. This practice includes gratitude
            <br />
            exercises, emotional check-ins, and refletive writing to deepen
            <br />
            self-understanding.
          </div>
          <div className="practice-btns">
            <button className="pbtn">Self-Discovery</button>
            <button className="pbtn">Emotional intelligence</button>
            <button className="pbtn">Pattern recognition</button>
            <button className="pbtn">Gratitude</button>
          </div>
        </div>
        <div className="practice-cards">
          <div className="practice-head">
            <div className="practice-logo">🚶</div>
            <div className="practice-name">
              <h2>Living Mindfully</h2>
              <p>Throughout the day</p>
            </div>
          </div>
          <div className="practice-desc">
            Integrate mindfulness into every aspect of your daily life. From
            <br />
            mindful eating to walking meditation, learn how to transform
            <br />
            routine activities into opportunities for presence. Discover how to 
            <br />
            maintain awareness during work, conversations, and even
            <br />
            challenging situations.
          </div>
          <div className="practice-btns">
            <button className="pbtn">Present Living</button>
            <button className="pbtn">Joy in Simple Things</button>
            <button className="pbtn">Mindful Communication</button>
            <button className="pbtn">Work-Life Balance</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticesSection;
