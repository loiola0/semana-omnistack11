import axios from 'axios';
//clinte http é responsável por fazer as chamadas do back-end e devolver as respostas no frontend.

const api = axios.create({
    baseURL: "http://localhost:3333",
})


export default api;
