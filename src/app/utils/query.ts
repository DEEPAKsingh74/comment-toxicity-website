import { AxiosInstance } from "axios";
import { axiosInstance } from "./network_config";

const ACCESS_ID = process.env.AZURE_ID;

export class ReactQueryClass {
	base_instance: AxiosInstance | null = null;

	constructor() {
		this.base_instance = axiosInstance;
	}

	async getHome(url: string) {
		const response = await this.base_instance?.get(url);
		return response?.data;
	}

	async getPredictions(url: string, data: string) {
		// Make an asynchronous POST request
		try {
			const response = await this.base_instance?.post(`${url}?code=${ACCESS_ID}`, { comment: data });
			return response?.data;  // Return the response data
		} catch (error) {
			console.error("Error fetching predictions:", error);
			return null;
		}
	}

}
