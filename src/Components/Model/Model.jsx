/**
 * data modeling class
 * @property {object} data
 */
export class Model {
	constructor(data) {
		this.data = data;
	}

	/**
	 * data activities
	 * @property {string} day
	 * @property {number} weight
	 * @property {number} calories
	 */
	GraphBarModel(data) {
		const day = data.day;
		const weight = data.kilogram;
		const calories = data.calories;

		return {
			day,
			weight,
			calories,
		};
	}

	/**
	 * data average-sessions
	 * @property {string} name
	 * @property {number} day
	 * @property {number} sessionLength
	 */
	GraphLineModel(data) {
		const name = ["L", "M", "M", "J", "V", "S", "D"];
		const day = data.day;
		const sessionLength = data.sessionLength;

		return {
			name,
			day,
			sessionLength,
		};
	}

	/**
	 * main data
	 * @property {string} name
	 * @property {number} value
	 */
	GraphPieModel(data) {
		const name = "score";
		const value = data.score || data.todayScore;	

		return {
			name,
			value,
		};
	}

	/**
	 * data average-sessions
	 * @property {number} subject
	 * @property {number} value
	 */
	GraphRadarModel(data) {
		const subject = data.kind;
		const value = data.value;

		return {
			subject,
			value,
		};
	}
}
