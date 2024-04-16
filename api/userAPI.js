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
