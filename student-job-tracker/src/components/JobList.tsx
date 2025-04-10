import React from 'react';

interface Job {
  _id: string;
  company: string;
  role: string;
  status: string;
}

interface JobListProps {
  jobs: Job[];
  onDelete: (id: string) => void | Promise<void>;
  onUpdateStatus: (id: string, status: string) => void | Promise<void>;
}

const JobList: React.FC<JobListProps> = ({ jobs, onDelete, onUpdateStatus }) => {
  return (
    <div className="container bg-light p-5 rounded shadow-sm mt-4">
      <h1 className="mb-4 text-center">Job List</h1>

      {/* Tabela Responsiva */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>{job.company}</td>
                <td>{job.role}</td>
                <td>{job.status}</td>
                <td>
                  {/* Botões responsivos */}
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
