// Modéliser les données de graphBar
//? day, weight, calories
export class UsersBar {
	constructor(data) {
		this.day = data.day;
		this.weight = data.kilogram;
		this.calories = data.calories;
		// console.log(data)
	}
}

// Modéliser les données de graphLine
//? name, day, sessionLength
export class UsersLine {
	constructor(data) {
		this.name = ["L", "M", "M", "J", "V", "S", "D"];
		this.day = data.day;
		this.sessionLength = data.sessionLength;
		// console.log(data);
	}
}

// Modéliser les données de graphPie
//? name, value
export class UsersPie {
	constructor(data) {
		this.name = "score";
		this.value = data.score || data.todayScore;
		// console.log(data)
	}
}

// Modéliser les données de graphRadar
//? subject, perf
export class UsersRadar {
	constructor(data) {
		this.subject = data.kind;
		this.value = data.value;
		// console.log(data);
	}
}
