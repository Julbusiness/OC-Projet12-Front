	// Modéliser les données de graphBar
	//? name, poids, calories

	export function GraphBarModel (data) {
		console.log(data)
		if (!data.day) {
			throw new Error("Les données de graphBar sont érronées")
		} else {

			const date = new Date(data.day);
			const day = date.getDate();
			console.log(day)

			const kilogram = data.kilogram
			console.log(kilogram);

			const calories = data.calories
			console.log(calories);
	
			return {
			name: day,
			poids: kilogram,
			calories: calories,
			}
		}

	}


// Modéliser les données de graphLine
//? name, day, sessionLength

export function GraphLineModel (data) {
	if (!data.day)
		throw new Error("Les données de graphLine sont érronées")

	const name = data.name
	const day = data.day || data.today
	const sessionLength = data.sessionLength

	return {
		name,
		day,
		sessionLength
	}
}


// Modéliser les données de graphPie
//? name, value

export function GraphPieModel (data) {
	if (!data.name)
		throw new Error("Les données de graphPie sont érronées")

	const name = data.score || data.todayScore
	const value = data.value

	return {
		name,
		value
	}
}


// Modéliser les données de graphRadar
//? subject, perf

export function GraphRadarModel (data) {
	if (!data.kind)
		throw new Error("Les données de graphRadar sont érronées")

	const subject = data.kind
	const value = data.value

	return {
		subject,
		value
	}
}