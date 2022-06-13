import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });


export const fetchDataAbout = async () => API.get('/about');
export const fetchDataResume = async () => API.get('/resume');
export const fetchDataProjects = async () => API.get('/projects');

export const createImage = async (newImage) => {
    const data  = await API.post('/projects', newImage);
    console.log("data: ", data);

}