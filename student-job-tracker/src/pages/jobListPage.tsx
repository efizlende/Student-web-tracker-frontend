import React from 'react';
import JobList from '../components/JobList';
import useJobs from '../hooks/useJobs';
import { Link } from 'react-router-dom'; 

const JobListPage: React.FC = () => {
  const { jobs, deleteJob, updateJobStatus } = useJobs();

  const handleUpdateStatus = (id: string, status: string) => {
    updateJobStatus(id, status);
  };

  return (
    <div className="container">
      <h1 className="mt-5">Job List</h1>
      <Link to="/add-job" className="btn btn-primary my-3">Add Job</Link> {/* Botão para adicionar vaga */}
      <JobList 
        jobs={jobs} 
        onDelete={deleteJob} 
        onUpdateStatus={handleUpdateStatus} 
      />
    </div>
  );
};

export default JobListPage;
