import React from "react";
import { PieChart, Pie, ResponsiveContainer, Label } from "recharts";
import PropTypes from "prop-types"
import { Model } from "../Model/Model";

/**
 * GraphPie transmits the data elements to set up the Pie graph (user main-data)
 * @param {object} data
 * @returns JSX
 */
export default function GraphPie(data) {

		let userModel = new Model(data.data)

	const dataGraph = [
		{
			name: userModel.GraphPieModel(data.data).name,
			value: Math.round(userModel.GraphPieModel(data.data).value * 100),
		},
	];

	const CustomLabel = ({ viewBox, labelText, value }) => {
		const { cx, cy } = viewBox;
		return (
			<g>
				<text
					x={cx}
					y={cy - 10}
					className="recharts-text recharts-label"
					textAnchor="middle"
					dominantBaseline="central"
					alignmentBaseline="middle"
					fill="#282D30"
					fontSize="26"
					fontWeight="600"
				>
					{value}
				</text>
				<text
					x={cx}
					y={cy + 15}
					className="recharts-text recharts-label"
					textAnchor="middle"
					dominantBaseline="central"
					alignmentBaseline="middle"
					fontSize="15"
          fill="#74798C"
				>
					{labelText}
				</text>
			</g>
		);
	};

	CustomLabel.propTypes = {
		viewBox: PropTypes.object,
		labelText: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired
	}

	return (
		<ResponsiveContainer width="100%" height="100%" style={{}}>
			<PieChart>
				<Pie
					data={dataGraph}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					label={false}
					cornerRadius={50}
					innerRadius={80}
					outerRadius={91}
					startAngle={90}
					endAngle={dataGraph[0].value * 360 / 100 + 90}
					// endAngle={450}
					paddingAngle={0}
					fill="#FF0000"
				>
					<Label
						content={<CustomLabel labelText="de votre objectif" value={(dataGraph[0].value)+"%"} position="center"/>}
					/>
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
}

GraphPie.propTypes = {
	data: PropTypes.object.isRequired
}