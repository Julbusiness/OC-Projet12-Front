import axios from "axios";

const ENV = import.meta.env.VITE_API
// console.log(ENV_PROD)

/**
 * getApi returns a data object
 * @param {number} userId 
 * @returns {object}
 */
export async function getApi(userId) {
	const API_URL = `${ENV}/user/${userId}`; 
	try {
		const { data } = await axios.get(API_URL);
		// console.log(data)
		return data;
	} catch (error) {
		console.log(error);
	}
}

/**
 * getApiActivity returns a data object
 * @param {number} userId 
 * @returns {object}
 */
export async function getApiActivity(userId) {
	const API_URL = `${ENV}/user/${userId}/activity`;

	try {
		const { data } = await axios.get(API_URL);
		// console.log(data)
		return data;
	} catch (error) {
		console.log(error);
	}
}

/**
 * getApiPerformance returns a data object
 * @param {number} userId 
 * @returns {object}
 */
export async function getApiPerformance(userId) {
	const API_URL = `${ENV}/user/${userId}/performance`;

	try {
		const { data } = await axios.get(API_URL);
		// console.log(data)
		return data;
	} catch (error) {
		console.log(error);
	}
}

/**
 * getApiAverageSessions returns a data object
 * @param {number} userId 
 * @returns {object}
 */
export async function getApiAverageSessions(userId) {
	const API_URL = `${ENV}/user/${userId}/average-sessions`;

	try {
		const { data } = await axios.get(API_URL);
		// console.log(data)
		return data;
	} catch (error) {
		console.log(error);
	}
}
