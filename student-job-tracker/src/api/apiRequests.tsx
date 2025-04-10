import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://student-web-tracker-backend.onrender.com/api/jobs';


interface Job {
  _id: string;
  company: string;
  role: string;
  status: string;
  appliedDate: string;
  link: string;
}





// Obter todos os trabalhos
export const getJobs = async (): Promise<Job[]> => {
  try {
    const response: AxiosResponse<Job[]> = await axios.get(`${API_URL}/find-job`);
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};







// Adicionar um novo trabalho
export const addJob = async (job: Job): Promise<Job> => {
  try {
    const response: AxiosResponse<Job> = await axios.post(`${API_URL}/add-job`, job);
    return response.data;
  } catch (error) {
    console.error('Error adding job:', error);
    throw error;
  }
};






// Deletar um trabalho
export const deleteJob = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/delete-job/${id}`);
  } catch (error) {
    console.error('Error deleting job:', error);
    throw error;
  }
};







// Atualizar o status de um trabalho
export const updateJobStatus = async (id: string, status: string): Promise<Job> => {
  try {
    const response: AxiosResponse<Job> = await axios.patch(`${API_URL}/update-status/${id}`, { status });
    return response.data;
  } catch (error) {
    console.error('Error updating job status:', error);
    throw error;
  }
};
