import React from 'react';
import JobForm from '../components/JobForm';
import useJobs from '../hooks/useJobs';

const AddJobPage: React.FC = () => {
  const { addJob } = useJobs();

  return (
    <div className="container">
      <h1 className="mt-5">Add Job</h1>
      <JobForm onAddJob={addJob} />
    </div>
  );
};

export default AddJobPage;
