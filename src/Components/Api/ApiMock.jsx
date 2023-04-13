import axios from "axios";

const ENV = import.meta.env.VITE_API;

/**
 * data modeling class
 * @params {string} URL
 * @returns {object} data
 */
export class Request {
	constructor() {}

	async currentURL(userId) {
		// console.log(userId)

		try {
			const { data } = await axios.get(ENV);

			let currentArr = data[userId.currentFolder];
			// console.log(currentArr)

			let newObj = {};

			const arr = currentArr.filter((obj) => {
				if (
					obj.data.id === userId.userId ||
					obj.data.userId === userId.userId
				) {
					newObj = obj;
					return newObj;
				}
			});
			return newObj;
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
	getApi(userId) {
		let currentFolder = "data";
		return {
			userId,
			currentFolder,
		};
	}

	/**
	 * getApiActivity returns a data object
	 * @param {number} userId
	 * @returns {object}
	 */
	getApiActivity(userId) {
		let currentFolder = "dataActivity";
		return {
			userId,
			currentFolder,
		};
	}

	/**
	 * getApiPerformance returns a data object
	 * @param {number} userId
	 * @returns {object}
	 */
	getApiPerformance(userId) {
		let currentFolder = "dataPerformance";
		return {
			userId,
			currentFolder,
		};
	}

	/**
	 * getApiAverageSessions returns a data object
	 * @param {number} userId
	 * @returns {object}
	 */
	getApiAverageSessions(userId) {
		let currentFolder = "dataAverageSessions";
		return {
			userId,
			currentFolder,
		};
	}
}
