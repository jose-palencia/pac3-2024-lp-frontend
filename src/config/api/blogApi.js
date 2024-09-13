import axios from "axios";

const API_URL = 'https://localhost:7191/api';

const blogApi = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    },
}); 

// TODO: Add interceptors
export {
    blogApi,
    API_URL
}