import React, { useState } from 'react';
import Navbar from '../../component/common/navbar';
import MoodPopUp from './moodPopUp';
import InspirationWallButton from './inspirationwallbutton'; // Adjust the path as needed

const HomePage = () => {
  const [mood, setMood] = useState('happy');
  const [showMoodPopup, setShowMoodPopup] = useState(false);

  const moodStyles = {
    happy: { backgroundColor: '#FFD700', emoji: '😊' },
    sad: { backgroundColor: '#1E90FF', emoji: '😢' },
    excited: { backgroundColor: '#FF4500', emoji: '😃' },
    neutral: { backgroundColor: '#CCCCCC', emoji: '😐' },
  };

  const currentMoodStyle = moodStyles[mood] || moodStyles.neutral;

  // Handler for InspirationWallButton click
  const handleInspirationWallClick = () => {
    // Your logic here (e.g., navigate to inspiration wall page)
    console.log("Inspiration Wall button clicked!");
  };

  return (
    <div>
      <Navbar />
      <button
        onClick={() => setShowMoodPopup(true)}
        style={{
          position: 'fixed',
          top: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          minWidth: '80vw',
          height: '80px',
          backgroundColor: currentMoodStyle.backgroundColor,
          color: '#fff',
          border: '5px solid #ffffff',
          borderRadius: '20px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 999,
        }}
      >
        {`Today's mood: ${mood}`}
        <span style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }}>
          {currentMoodStyle.emoji}
        </span>
      </button>

      <div style={{ marginTop: '180px', padding: '20px' }}>
        <p>Page content...</p>
      </div>

      {showMoodPopup && (
        <MoodPopUp setMood={setMood} onClose={() => setShowMoodPopup(false)} />
      )}

      {/* Render the Inspiration Wall Button */}
      <InspirationWallButton onClick={handleInspirationWallClick} />
    </div>
  );
};

export default HomePage;
