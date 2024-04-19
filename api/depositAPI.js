import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { notchApiManager } from "./notchApiManager";

const authToken = 'pk.2gAdKY5E2dlCudOGaBkBUWsqgi1vW8sF5NcA09fLxHaxXy0QVwseAre5auUArGBTFiXK96zcLTlJYi13ow6kPQJamIbFplJPv6JKS6AlBPbyY15v9FO0Lp2uVOii9';

export const initializePayement = async data => {
    try {
        const result = await notchApiManager("/payments/initialize", {
            method : "POST",
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : `${authToken}`
            },
            data : data
        })
        return result;
    } catch (error) {
        return error.response.data
    }
}


export const confirmPayement = async (data, id)=> {
    try {
        const result = await notchApiManager(`/payments/${id}`, {
            method : "PUT",
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : `${authToken}`
            },
            data : data
        })
        return result;
    } catch (error) {
        return error.response.data
    }
}

