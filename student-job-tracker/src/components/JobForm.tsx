import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface Job {
  _id?: string;
  company: string;
  role: string;
  status: string;
  appliedDate: string;
  link: string;
}

interface JobFormProps {
  onAddJob: (job: Job) => void | Promise<void>;
}

const JobForm: React.FC<JobFormProps> = ({ onAddJob }) => {
  const [job, setJob] = useState<Job>({
    company: '',
    role: '',
    status: 'Applied',
    appliedDate: '',
    link: ''
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await onAddJob(job);
      navigate('/');  // Redirects to the job list page after success
    } catch (error) {
      setErrorMessage('Error adding job. Please try again.');
      console.error('Error adding job:', error);
    }
  };

  return (
    <div className="container bg-light p-4 rounded shadow-sm mt-4">
      <h1 className="mb-4 text-center">Add Job</h1>
      
     
      {errorMessage && (
        <div className="alert alert-danger">{errorMessage}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={handleChange}
            className="form-control"
            placeholder="Company"
            required
          />
        </div>
        
        <div className="form-group mb-3">
          <input
            type="text"
            name="role"
            value={job.role}
            onChange={handleChange}
            className="form-control"
            placeholder="Role"
            required
          />
        </div>
        
        <div className="form-group mb-3">
          <select
            name="status"
            value={job.status}
            onChange={handleChange}
            className="form-control"
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        
        <div className="form-group mb-3">
          <input
            type="date"
            name="appliedDate"
            value={job.appliedDate}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        
        <div className="form-group mb-3">
          <input
            type="url"
            name="link"
            value={job.link}
            onChange={handleChange}
            className="form-control"
            placeholder="Job Application Link"
            required
          />
        </div>

   
        <button type="submit" className="btn btn-success w-100">Add Job</button>
      </form>
    </div>
  );
};

export default JobForm;
