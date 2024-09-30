import axios from "axios";

// axios base configurations
export const axiosInstance = axios.create({
  baseURL: "https://super-duper-space-computing-machine-4j7xrjw55jq35q9q-5000.app.github.dev",
  headers: {
	"Content-Type": "application/json",
  },
});