import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: 'df10f55ba401542cb5f85c11073b7d6e'
    },
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },

});

// api.defaults.withCredentials = true;

export default api;