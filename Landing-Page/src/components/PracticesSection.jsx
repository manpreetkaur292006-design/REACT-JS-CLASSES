import React from "react";

const PracticesSection = () => {
  return (
    <>
      <div className="practices-section" id="practices-section-id">
        <h1>Mindful Practices</h1>
        <p>Master these core practices to build your mindfulness toolkit</p>

        <div className="practices-layout">
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
              specifically for beginners. Learn the fundamental techniques of
              sitting meditation, including proper posture, attention anchoring,
              and working with wandering thoughts. Our progressive approach
              ensures you build a solid foundation w
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
              calm your nervous system. From box breathing to 4-7-8 patterns,
              discover how different breathing exercises can energize, relax, or
              center you throughout your day. Perfect for managing anxiety and
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
              practices. Learn to observe your thoughts, emotions, and physical
              sensations without judgement. This practice includes gratitude
              exercises, emotional check-ins, and refletive writing to deepen
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
              mindful eating to walking meditation, learn how to transform
              routine activities into opportunities for presence. Discover how
              to maintain awareness during work, conversations, and even
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
      </div>
    </>
  );
};

export default PracticesSection;
