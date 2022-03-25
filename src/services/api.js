import axios from 'axios'

//https://api.hgbrasil.com/weather?key=6911ee7c&lat=-23.682&lon=-46.875&user_ip=remote

export const key = '96e59d29'

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather'
})

export default api;

