import axios from "axios";

const ENV = import.meta.env.VITE_API;

/**
 * data modeling class
 * @params {string} URL
 * @returns {object} data
 */
export class Request {
	constructor(url) {
		this.url = url;
	}
	async currentURL(userId) {
		try {
			const { data } = await axios.get(ENV);
      console.log(data);
			const currentData = data.data
			const arrData = currentData.filter((obj) => {
				const currentObj = (obj.id == userId)
				return currentObj
			})
			console.log(arrData)

			return arrData;
		} catch (error) {
			console.log(error);
		}
	}
}

/**
 * URL modeling class
 * @param {number} userId
 * @returns {string} URL
 */
export class Api {
	constructor(userId) {
		this.userId = userId;
	}

	/**
	 * getApi returns a data object
	 * @param {number} userId
	 * @returns {object}
	 */
	async getApi(userId) {
		return userId
	}

	/**
	 * getApiActivity returns a data object
	 * @param {number} userId
	 * @returns {object}
	 */
	getApiActivity(userId) {
		const API_URL = `${ENV}/user/${userId}/activity`;
		return API_URL;
	}

	/**
	 * getApiPerformance returns a data object
	 * @param {number} userId
	 * @returns {object}
	 */
	getApiPerformance(userId) {
		const API_URL = `${ENV}/user/${userId}/performance`;
		return API_URL;
	}

	/**
	 * getApiAverageSessions returns a data object
	 * @param {number} userId
	 * @returns {object}
	 */
	getApiAverageSessions(userId) {
		const API_URL = `${ENV}/user/${userId}/average-sessions`;
		return API_URL;
	}
}
