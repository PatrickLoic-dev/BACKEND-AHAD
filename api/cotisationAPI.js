import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiManager } from "./apiManager";
import axios from "axios";

const authToken = AsyncStorage.getItem('AuthToken');

export const initializeCotisation = async data => {
    try {
        const result = await apiManager("/cotisation/Init", {
            method : "POST",
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : `Bearer ${authToken._j}`
            },
            data : data
        })
        return result;
    } catch (error) {
        return error.response.data
    }
}