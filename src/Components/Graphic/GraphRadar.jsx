import React from "react";
import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	PolarRadiusAxis,
	ResponsiveContainer,
} from "recharts";
import PropTypes, { object } from "prop-types";
import { Model } from "../Model/Model";

/**
 * GraphRadar transmits the data elements to set up the Radar graph (user performance)
 * @param {object} data
 * @returns JSX
 */
export default function GraphRadar(data) {
	const dataGraph = data.data.data;
	const dataGraphReverse = dataGraph.reverse();
	const kind = data.data.kind;
	const dataGraphBar = [];

	dataGraphReverse.forEach((element, index) => {
		let userModel = new Model(element);
		const kindFr = userModel.GraphRadarModel(element).trad

		dataGraphBar.push({
			subject: Object.values(kindFr).reverse()[index++],
			perf: userModel.GraphRadarModel(element).value,
		});
	});

	dataGraphReverse.propTypes = {
		element: PropTypes.object.isRequired,
		index: PropTypes.number.isRequired,
	};

	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart
				outerRadius={90}
				data={dataGraphBar}
				innerRadius={10}
			>
				<PolarGrid stroke="white" radialLines={false} />
				<PolarAngleAxis
					dataKey="subject" 
					stroke="#ffffff" 
					fontSize="12"
					tickLine={false} 
					axisLine={false} 
					dy={3} 
					dx={-2} 
				/>
				<PolarRadiusAxis
					axisLine={false} 
					tick={false} 
				/>
				<Radar
					dataKey="perf" 
					fill="#ff0101"
					fillOpacity={0.6}
				/>
			</RadarChart>
		</ResponsiveContainer>
	);
}

GraphRadar.propTypes = {
	data: PropTypes.object.isRequired,
};
