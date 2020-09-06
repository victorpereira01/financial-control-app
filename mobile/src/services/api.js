import axios from 'axios';

const api = axios.create({
    baseURL: 'https://financial-contr01.herokuapp.com/users'
})
 
export default api;