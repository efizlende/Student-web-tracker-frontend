import { useState, useEffect } from 'react';
import { getJobs, addJob, deleteJob, updateJobStatus } from '../api/apiRequests';

interface Job {
  _id: string;
  company: string;
  role: string;
  status: string;
  appliedDate: string;
  link: string;
}




const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);









  const handleAddJob = async (job: Job) => {
    try {
      const newJob = await addJob(job);
      setJobs([...jobs, newJob]);
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };









  const handleDeleteJob = async (id: string) => {
    try {
      await deleteJob(id);
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };








  const handleUpdateJobStatus = async (id: string, status: string) => {
    try {
      const updatedJob = await updateJobStatus(id, status);
      setJobs(jobs.map((job) => (job._id === id ? updatedJob : job)));
    } catch (error) {
      console.error('Error updating job status:', error);
    }
  };
  return { jobs, loading, addJob: handleAddJob, deleteJob: handleDeleteJob, updateJobStatus: handleUpdateJobStatus };
};



export default useJobs;
