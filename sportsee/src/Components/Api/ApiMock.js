import axios from "axios";

/**
 * Get user infos
 *
 * @param {string} userId User id
 * @returns {object} Response
 */
export const getApiMock = async (userId) => {
	try {
		const dataMock = await axios.get(
			`../../../public/data/data.json/user/${userId}` // modif a faire : supprimer la fin de la ligne apres json et lui demander d'aller chercher le truc a l'interieur + dans api.js
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
export const getApiMockActivity = async (userId) => {
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
export const getApiMockPerformance = async (userId) => {
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
export const getApiMockAverageSessions = async (userId) => {
	try {
		const dataMock = await axios.get(
			`../../../public/data/data.json/user/${userId}/average-sessions`
		);
		return dataMock.data;
	} catch (error) {
		console.log(error);
	}
};
