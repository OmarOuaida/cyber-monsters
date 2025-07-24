import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import LoadingScreen from './components/LoadingScreen'
import CodesPage from './pages/learn/CodesPage'
import WeakestLinkPage from './pages/learn/WeakestLinkPage'
import PasswordsPage from './pages/learn/PasswordsPage'
import ObfuscationPage from './pages/learn/ObfuscationPage'
import DeceptionPage from './pages/learn/DeceptionPage'
import SlipUpsPage from './pages/SecuritySlipUps'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'flowbite';

import LearnPage from './pages/Learn'

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen w-screen overflow-hidden">
        <NavBar />
        <main className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<LoadingScreen />} />
            <Route path="/slip-ups" element={<SlipUpsPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/learn/codes" element={<CodesPage />} />
            <Route path="/learn/weakest-link" element={<WeakestLinkPage />} />
            <Route path="/learn/deception" element={<DeceptionPage />} />
            <Route path="/learn/passwords" element={<PasswordsPage />} />
            <Route path="/learn/obfuscation" element={<ObfuscationPage />} />
            <Route path="/loading" element={<LoadingScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App