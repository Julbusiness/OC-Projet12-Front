import axios from "axios";

const ENV = import.meta.env.VITE_API;

/**
 * data modeling class
 * @params {string} URL
 * @returns {object} data
 */
export class Request {
	constructor() {
	}

	async currentURL(userId) {

		try {
			const { data } = await axios.get(ENV);
      console.log(data);

			let currentArr = data.data
			console.log(currentArr)

			let newObj = {}

			const arr = currentArr.filter((obj) => {
				if(obj.id === userId || obj.userId === userId) {
					newObj = obj
					return newObj
				}
			})
			console.log(newObj)
			return arr;

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
		console.log('Je suis dans getApi')
		return userId
	}

	/**
	 * getApiActivity returns a data object
	 * @param {number} userId
	 * @returns {object}
	 */
	getApiActivity(userId) {
		console.log('Je suis dans getApiActivity')
		return userId
	}

	/**
	 * getApiPerformance returns a data object
	 * @param {number} userId
	 * @returns {object}
	 */
	getApiPerformance(userId) {
		console.log('Je suis dans getApiPerformance')
		return userId	}

	/**
	 * getApiAverageSessions returns a data object
	 * @param {number} userId
	 * @returns {object}
	 */
	getApiAverageSessions(userId) {
		console.log('Je suis dans getApiaverage')
		return userId	}
}
