import axios from "axios";

// axios base configurations
const BASE_URL = process.env.NEXT_PUBLIC_REQUEST_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,	
  headers: {
	"Content-Type": "application/json",
  },
});
