export class Model {

	constructor(data) {
		this.data = data;
		// console.log(data)
	}

	GraphBarModel(data) {
		const day = data.day;
		const weight = data.kilogram;
		const calories = data.calories;

		return {
			day,
			weight,
			calories
		}
	}

	GraphLineModel(data) {
		const name = ["L", "M", "M", "J", "V", "S", "D"];
		const day = data.day;
		const sessionLength = data.sessionLength;

		return {
			name,
			day,
			sessionLength
		}
	}

	GraphPieModel(data) {
		const name = "score"
		const value = data.score || data.todayScore

		return {
			name,
			value
		}
	}

	GraphRadarModel(data) {
		const subject = data.kind;
		const value = data.value;

		return {
			subject,
			value
		}
	}

}
