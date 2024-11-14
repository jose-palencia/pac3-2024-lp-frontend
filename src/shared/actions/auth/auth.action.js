// import { blogApi } from '../../../config/api';

import axios from "axios";

export const loginAsync = async (form) => {
    try {
        const { data } = await axios.post('/auth/login', form);
        
        return data;
    } catch (error) {
        console.error({...error});
        return error?.response?.data;        
    }
}