import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './views/login page'
import Navbar from './component/common/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/home page'
import DashboardPage from './views/dashboard page'
import MyPlanPage from './views/my plan page'
import ChatbotPage from './views/chatbot page'

function App() {

  return (
    <>
      {/* <div>
        <Navbar />
        <LoginPage />
      </div> */}
      <Router>
      <Routes>
        {/* Login page route */}
        <Route path="/" element={<LoginPage />} />
        {/* Home page route */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/myplan" element={<MyPlanPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
