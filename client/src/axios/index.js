import axios from 'axios';
import keys from "../config.js"
const API = axios.create({ baseURL: keys.serverURL });


export const fetchDataAbout = async () => API.get('/about');
export const fetchDataResume = async () => API.get('/resume');
export const fetchDataProjects = async () => API.get('/projects');

export const createImage = async (newImage) => {
    const data  = await API.post('/projects', newImage);
    console.log("data: ", data);

}