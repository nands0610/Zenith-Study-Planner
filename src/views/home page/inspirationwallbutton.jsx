// inspirationwallbutton.jsx
import React from 'react';

const InspirationWallButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        right: '20px',               // Positioned at the right side
        top: '50%',                  // Centered vertically
        transform: 'translateY(-50%)',
        width: '25vw',              // Big square button
        height: '45vh',
        backgroundImage: "url('https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZXxlbnwwfHwwfHx8MA%3D%3D')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',  // Bright color (orange red)
        border: 'none',
        borderRadius: '10px',        // Slight rounding; adjust or remove for a perfect square
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
        zIndex: 999,
        marginTop: 40,
        marginRight: 60
      }}
    >
      {/* <img
        src="https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZXxlbnwwfHwwfHx8MA%3D%3D" // Fire icon image
        alt="fire"
        style={{
          width: '100%',
          height: '100%',
          marginBottom: '10px',
        }}
      /> */}
      <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center' }}>
        INSPIRATION WALL
      </span>
    </button>
  );
};

export default InspirationWallButton;
