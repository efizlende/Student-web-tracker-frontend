import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JobListPage from '../pages/jobListPage';
import AddJobPage from '../pages/addJobPage';

const JobRoutes = () => {
  return (
    <Routes>
      <Route path="/add-job" element={<AddJobPage />} />
      <Route path="/" element={<JobListPage />} />
    </Routes>
  );
};

export default JobRoutes;
