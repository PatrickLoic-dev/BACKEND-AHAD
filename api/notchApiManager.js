import axios from "axios";


export const notchApiManager = axios.create({
    baseURL : "https://api.notchpay.co/",
    responseType : 'json',
    withCredentials : true
})