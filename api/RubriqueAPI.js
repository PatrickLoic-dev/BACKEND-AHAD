import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiManager } from "./apiManager";
import axios from "axios";

const authToken = AsyncStorage.getItem('AuthToken');


export const GetRubriques = async (id) => {
    try {
        const result = await axios.get(`https://backend-ahad-production.up.railway.app/api/v1/rubriques`, {
            headers: {
                'Authorization': `Bearer ${authToken._j}`
            },
        });
        return result;
    } catch (error) {
        return error.response.data;
    }
}