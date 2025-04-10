import React from 'react';
import JobRoutes from '../routes/JobRoutes';

const MainLayout = () => (
  <div>
    <header style={{ backgroundColor: 'var(--blue-dark)', padding: '20px' }}>
      <h1>Job Tracker</h1>
    </header>
    <main>
      <JobRoutes />
    </main>
  </div>
);

export default MainLayout;
