// import * as dotenv from "dotenv"
// dotenv.config()
// console.log(process.env.SERVER_URL)

import axios from "axios"
export const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
});