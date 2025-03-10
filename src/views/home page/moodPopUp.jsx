import React from 'react';

const MoodPopUp = ({ setMood, onClose }) => {
  // Define the mood options with their name and emoji
  const moodOptions = [
    { name: 'happy', emoji: '😊' },
    { name: 'sad', emoji: '😢' },
    { name: 'excited', emoji: '😃' },
    { name: 'neutral', emoji: '😐' },
  ];

  // When a mood is selected, update the mood and close the popup
  const handleMoodSelect = (mood) => {
    setMood(mood);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: 'rgb(244, 138, 163)',
          padding: '20px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>Select Your Mood</h2>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {moodOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => handleMoodSelect(option.name)}
              style={{
                backgroundColor: '#000000',
                border: 'none',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.5rem',
                margin: '10px',
              }}
            >
              <span>{option.emoji}</span>
              <span style={{ fontSize: '0.8rem', marginTop: '5px' }}>
                {option.name}
              </span>
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            border: 'none',
            backgroundColor: '#ccc',
            borderRadius: '5px',
            cursor: 'pointer',
            color: '#015498'
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MoodPopUp;
