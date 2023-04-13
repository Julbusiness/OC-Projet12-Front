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
		console.log(userId)

		try {
			const { data } = await axios.get(ENV);

			let currentArr = data.data;
			console.log(currentArr)

			let newObj = {}

			const arr = currentArr.filter((obj) => {
				if(obj.data.id === userId.userId || obj.data.userId === userId.userId) {
					newObj = obj
					return newObj
				}
			})
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
		console.log('Je suis dans getApi')

		// let currentFolder = ("Je suis le second paramètre");
		let currentFolder = "data";

		return {
			userId,
			currentFolder,
		}	
	}

	/**
	 * getApiActivity returns a data object
	 * @param {number} userId
	 * @returns {object}
	 */
	getApiActivity(userId) {
		console.log('Je suis dans getApiActivity')
		let currentFolder = ("Je suis le second paramètre");

		return {
			userId,
			currentFolder,
		}	
	}

	/**
	 * getApiPerformance returns a data object
	 * @param {number} userId
	 * @returns {object}
	 */
	getApiPerformance(userId) {
		console.log('Je suis dans getApiPerformance')
		let currentFolder = ("Je suis le second paramètre");

		return {
			userId,
			currentFolder,
		}	
	}

	/**
	 * getApiAverageSessions returns a data object
	 * @param {number} userId
	 * @returns {object}
	 */
	getApiAverageSessions(userId) {
		console.log('Je suis dans getApiAverageSessions')
		let currentFolder = ("Je suis le second paramètre");

		return {
			userId,
			currentFolder,
		}	
	}
}
