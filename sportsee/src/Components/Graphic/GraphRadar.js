import React from "react";
import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	PolarRadiusAxis,
	ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types"

export default function GraphRadar(data) {

	const dataGraph = data.data.data;
	const dataGraphReverse = dataGraph.reverse();
	const kind = data.data.kind;
	const dataGraphBar = [];

	dataGraphReverse.forEach((element, index) => {
		let activities = Object.values(kind).reverse();
		dataGraphBar.push({
			subject: activities[index++],
			perf: element.value,
		});
	});

	dataGraphReverse.propTypes = {
		element: PropTypes.object.isRequired,
		index: PropTypes.number.isRequired,
	}

	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart
				outerRadius={90} // taille du graph
				data={dataGraphBar}
				innerRadius={10}
			>
				<PolarGrid stroke="white" radialLines={false} />
				<PolarAngleAxis
					dataKey="subject" // clé : nom des elements
					stroke="#ffffff" // couleur des elements (blanc)
					fontSize="12"
					tickLine={false} // pour enelever les petit trait (tick)
					axisLine={false} // enleve la couleur du polygon exterieur
					dy={3} // decale les kind vers le haut ou le bas par rapport au graph
					dx={-2} // decale les kind vers la gauche ou la droite par rapport au graph
				/>
				<PolarRadiusAxis
					axisLine={false} // enleve l'axe avec les chiffres
					tick={false} // enleve les chiffres de l'axe
				/>
				<Radar
					dataKey="perf" // clé de la valeur principal
					fill="#ff0101" // couleur du graph (rouge)
					fillOpacity={0.6} // opacité
				/>
			</RadarChart>
		</ResponsiveContainer>
	);
}

GraphRadar.propTypes = {
	data: PropTypes.object.isRequired
}