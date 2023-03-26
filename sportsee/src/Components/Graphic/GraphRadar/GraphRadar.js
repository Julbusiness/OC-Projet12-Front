import React from "react";
import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

export default function GraphRadar(data) {
	// console.log(data.data.data);
	const dataGraph = data.data.data;
	const kind = data.data.kind;
	const dataGraphBar = [];

	dataGraph.forEach((element, index) => {
		let activities = Object.values(kind);
		dataGraphBar.push({
			subject: activities[index++],
			perf: element.value,
			fullMark: 150,
		});
	});

	//? console.log
	// console.log(dataGraph)
	// console.log(dataGraphBar)

	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart
				outerRadius={90} // taille du graph
				data={dataGraphBar}
				innerRadius={12}
			>
				<PolarGrid stroke="white" radialLines={false} />
				<PolarAngleAxis
					dataKey="subject" // clé : nom des elements
					stroke="#ffffff" // couleur des elements (blanc)
					fontSize="12"
					tickLine={false} // pour enelever les petit trait (tick)
					axisLine={false} // enleve la couleur du polygon exterieur
          dy={3}
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
