import React, { useState } from 'react';

interface Job {
  _id: string;
  company: string;
  role: string;
  status: string;
  appliedDate: string; 
}

interface JobListProps {
  jobs: Job[];
  onDelete: (id: string) => void | Promise<void>;
  onUpdateStatus: (id: string, status: string) => void | Promise<void>;
}

const JobList: React.FC<JobListProps> = ({ jobs, onDelete, onUpdateStatus }) => {
  
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [startDateFilter, setStartDateFilter] = useState<string>('');
  const [endDateFilter, setEndDateFilter] = useState<string>('');


  const filteredJobs = jobs.filter((job) => {
    const matchesStatus = statusFilter ? job.status === statusFilter : true;
    const matchesStartDate = startDateFilter ? new Date(job.appliedDate) >= new Date(startDateFilter) : true;
    const matchesEndDate = endDateFilter ? new Date(job.appliedDate) <= new Date(endDateFilter) : true;

    return matchesStatus && matchesStartDate && matchesEndDate;
  });

  return (
    <div className="container bg-light p-5 rounded shadow-sm mt-4">
      <h1 className="mb-4 text-center">Job List</h1>

 
      <div className="mb-4">
        <select 
          className="form-select mb-2" 
          value={statusFilter} 
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>

        <input
          type="date"
          className="form-control mb-2"
          value={startDateFilter}
          onChange={(e) => setStartDateFilter(e.target.value)}
        />
        <input
          type="date"
          className="form-control mb-2"
          value={endDateFilter}
          onChange={(e) => setEndDateFilter(e.target.value)}
        />
      </div>

   
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Status</th>
              <th>Applied Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job._id}>
                <td>{job.company}</td>
                <td>{job.role}</td>
                <td>{job.status}</td>
                <td>{new Date(job.appliedDate).toLocaleDateString()}</td>
                <td>
                  
                  <div className="d-flex flex-column flex-sm-row gap-2">
                    <button 
                      className="btn btn-warning mb-2 mb-sm-0 w-100 w-sm-auto"
                      onClick={() => onUpdateStatus(job._id, 'Interview')}>
                      Set as Interview
                    </button>
                    <button 
                      className="btn btn-success mb-2 mb-sm-0 w-100 w-sm-auto"
                      onClick={() => onUpdateStatus(job._id, 'Offer')}>
                      Set as Offer
                    </button>
                    <button 
                      className="btn btn-danger w-100 w-sm-auto"
                      onClick={() => onDelete(job._id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
