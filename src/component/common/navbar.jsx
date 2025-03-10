import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
      // Perform logout operations here
      navigate('/');
    };

  const handleBot = () => {
    navigate('/chatbot');
  };

  const handleHome = () => {
    // Perform logout operations here
    navigate('/home');
  };

  const handleDash = () => {
    // Perform logout operations here
    navigate('/dashboard');
  };

  const handleMyPlan = () => {
    // Perform logout operations here
    navigate('/myplan');
  };


  return (
    <nav
      style={{
        position: 'fixed', // Makes the navbar fixed at the viewport
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#015498',
        padding: '1rem',
        zIndex: 1000, // Ensures the navbar is above other content
      }}
    >
    <div 
        style={{
            display: 'flex',
            justifyContent: 'space-between', // This pushes items to the edges
          alignItems: 'center'
        }}>
      <div 
        style={{
            display: 'flex'
          }}
            >
      <h1 style={{ color: '#fff', margin: 0, fontSize: "xx-large", textAlign:'left', marginLeft:70, marginRight:30 }}>Study Planner</h1>
      <button onClick={handleHome} style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          marginRight: 10,
          background: 'None',
          fontWeight: 'bold',
          textDecoration: 'underline'
        }}>
          Home
        </button>
      <button onClick={handleDash} style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          marginRight: 10,
          background: 'None',
          fontWeight: 'bold',
          textDecoration: 'underline'
        }}>
          Dashboard
        </button>
      <button onClick={handleMyPlan} style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          marginRight: 30,
          background: 'None',
          fontWeight: 'bold',
          textDecoration: 'underline'
        }}>
          My Plan
        </button>
        </div>
      <div>
      <button onClick={handleBot} style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          marginRight: 30,
          backgroundColor:'rgb(248, 183, 198)',
          color: '#000000',
          fontWeight: 'bold'
        }}>
          Chatbot
        </button>
        <button onClick={handleLogout} style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          marginRight: 50
        }}>
          Logout
        </button>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
