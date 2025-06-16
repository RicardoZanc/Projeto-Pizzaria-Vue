const axios = require('axios').default;

const api = axios.create({
    baseURL: process.env.VUE_APP_URL || "http://localhost:3000/"
});

export default api;