import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiManager } from "./apiManager";
import axios from "axios";

const authToken = AsyncStorage.getItem('AuthToken');

export const login = async data => {
    try {
        const result = await apiManager	("/users/login", {
            method : "POST",
            headers : {
                'Content-Type' : "application/json"
            },
            data : data
        })
        return result;
    } catch (error) {
        return error.response.data
    }
}

export const registration = async data  => {
    try {
        const result = await apiManager	("/users", {
            method : "POST",
            headers : {
                'Accept': 'application/json',
                'Content-Type' : "multipart/form-data",
            },
            data : data
        })
        return result;
    } catch (error) {
        return error.response.data
    }
}

export const updateUser = async data => {
    try {
        const result = await apiManager	("/users/me", {
            method : "PATCH",
            headers : {
                'Content-Type' : "application/json",
                'Authorization': `Bearer ${authToken._j}`
            },
            data : data
        
        })
        return result;
    } catch (error) {
        return error.response.data
    }
}

export const Profile = async data => {
    try {
        const result = await axios.get('https://backend-ahad-production.up.railway.app/api/v1/users/me', {
            headers: {
                'Authorization': `Bearer ${authToken._j}`
            },
        },)
        return result;
    } catch (error) {
        return error.response.data
    }
}

export const logout = async () => {
    try {
        const result = await apiManager("/users/logout/all", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${authToken._j}`
            }
        });
        return result;
    } catch (error) {
        return error.response.data;
    }
}