import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:7071/api',
    // baseURL: 'http://localhost:7071/api'
})

http.interceptors.response.use(response => {
    return response;
}, err => {
    return err;
})

export default function (url) {
    return http.get(url);
}