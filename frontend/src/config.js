import axios from "axios";

export const axiosInstance = axios.create({
    baseURL = "https://glacial-castle-30429.herokuapp.com/api/"
})