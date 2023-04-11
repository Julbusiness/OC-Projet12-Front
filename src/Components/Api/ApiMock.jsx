import axios from "axios";

/**
 * Get user infos
 *
 * @param {string} userId User id
 * @returns {object} Response
 */
export const getApi = async (userId) => {
	try {
		const dataMock = await axios.get(
			`../../../public/data/data.json`
		);
		return dataMock.data;
	} catch (error) {
		console.log(error);
	}
};

/**
 * Get user activity
 *
 * @param {string} userId User id
 * @returns {object} Response
 */
export const getApiActivity = async (userId) => {
	try {
		const dataMock = await axios.get(
			`../../../public/data/data.json/user/${userId}/activity`
		);
		return dataMock.data;
	} catch (error) {
		console.log(error);
	}
};

/**
 * Get user performance
 *
 * @param {string} userId User id
 * @returns {object} Response
 */
export const getApiPerformance = async (userId) => {
	try {
		const dataMock = await axios.get(
			`../../../public/data/data.json/user/${userId}/performance`
		);
		return dataMock.data;
	} catch (error) {
		console.log(error);
	}
};

/**
 * Get user average session
 *
 * @param {string} userId User id
 * @returns {object} Response
 */
export const getApiAverageSessions = async (userId) => {
	try {
		const dataMock = await axios.get(
			`../../../public/data/data.json/user/${userId}/average-sessions`
		);
		return dataMock.data;
	} catch (error) {
		console.log(error);
	}
};
