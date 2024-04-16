import axios from "axios";


export const apiManager = axios.create({
    baseURL : "https://backend-ahad-production.up.railway.app/api/v1",
    responseType : 'json',
    withCredentials : true
})