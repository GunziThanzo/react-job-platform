import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import HomePage from './components/HomePage';
import { initialJobs } from './data/initialJobs';

function App() {
  const [jobs, setJobs] = useState(initialJobs);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col bg-gray-100 dark:bg-black ${darkMode ? 'dark' : ''}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex-grow pb-24 pt-12">
          <main className="max-w-screen-lg mx-auto p-4 pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/jobs" element={<JobList jobs={jobs} setJobs={setJobs} />} />
              <Route path="/jobs/:id" element={<JobDetails jobs={jobs} />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
