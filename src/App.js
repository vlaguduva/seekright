import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import HouseQuestionnaire from './components/HouseQuestionnaire';
import DailyChoreQuestionnaire from './components/DailyChoreQuestionnaire';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import './styles/index.css';
import './styles/Themes.css';
import Assessments from './components/Assessments';
import NewAssessment from './components/NewAssessment';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Router>
          <ErrorBoundary>
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/assessment" element={<Assessments />} />
                <Route path="/assessment/new" element={<NewAssessment />} />
                <Route path="/house-assessment" element={<HouseQuestionnaire />} />
                <Route path="/daily-chore-assessment" element={<DailyChoreQuestionnaire />} />
                <Route path="*" element={
                  <div className="not-found">
                    <h1>404 - Page Not Found</h1>
                    <p>The page you're looking for doesn't exist.</p>
                  </div>
                } />
              </Routes>
            </main>
            <footer className="footer">
              <p>&copy; {new Date().getFullYear()} SeekRightTeam. All rights reserved.</p>
            </footer>
          </ErrorBoundary>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
