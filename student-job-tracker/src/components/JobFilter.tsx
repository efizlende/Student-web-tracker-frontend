

import React, { useState } from 'react';
import { getFilteredJobs } from '../api/apiRequests'; 

interface JobFilterProps {
  setFilteredJobs: (jobs: Job[]) => void;
}

interface Job {
  company: string;
  role: string;
  status: string;
  appliedDate: string;
}

const JobFilter: React.FC<JobFilterProps> = ({ setFilteredJobs }) => {
  const [status, setStatus] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleFilter = async () => {
    const jobs = await getFilteredJobs(status, startDate, endDate);
    setFilteredJobs(jobs); 
  };

  return (
    <div className="filter-container">
      <select onChange={(e) => setStatus(e.target.value)} value={status}>
        <option value="">All Status</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      
      <input 
        type="date" 
        onChange={(e) => setStartDate(e.target.value)} 
        value={startDate} 
        placeholder="Start Date" 
      />
      
      <input 
        type="date" 
        onChange={(e) => setEndDate(e.target.value)} 
        value={endDate} 
        placeholder="End Date" 
      />
      
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default JobFilter;
