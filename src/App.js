import React, { useState } from 'react';
import './App.css';
import jobData from './data/data.json';

function JobListing({ job }) {
  const logostyle = {
    background: job.logoBackground
  };

  const postedAndContract = `${job.postedAt} • ${job.contract}`;
  return (
    <div className="job-listing">
      <div className="job-logo" style={logostyle}>
        <img src={job.logo} alt={`${job.company} Logo`} />
      </div>

      <div className="job-details-container">
          <div className="job-details">
            <div>  
              <span className="posted-at-contract">{postedAndContract}</span>
            </div>
            <div>
              <span className="position">{job.position}</span>
            </div>
            <div>
              <span className="company">{job.company}</span>
            </div>
          </div>  
        </div>
      <div>
        <span className="location">{job.location}</span>
      </div>
    </div>
  );
}

function App() {
  const [jobs, setJobs] = useState(jobData);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleJobs, setVisibleJobs] = useState(12); // Initially display 12 jobs

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const loadMore = () => {
    setVisibleJobs(visibleJobs + 3); // Load 3 more jobs
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <div>
            <h1>devjob</h1>
          </div>
          <div
            className={`bars ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="job-listings-container">
        {jobs.slice(0, visibleJobs).map((job) => (
          <JobListing key={job.id} job={job} />
        ))}
      </main>

      {visibleJobs < jobs.length && (
        <div className="load-more">
          <button onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default App;

