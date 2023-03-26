import React from "react";
import { PieChart, Pie, ResponsiveContainer, Label, Cell } from "recharts";

export default function GraphPie() {

	const data = [
		{
			name: "Group A",
			value: 2400,
		},
	];

	const CustomLabel = ({ viewBox, labelText, value }) => {
		const { cx, cy } = viewBox;
		return (
			<g>
				<text
					x={cx}
					y={cy}
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
					y={cy + 20}
					className="recharts-text recharts-label"
					textAnchor="middle"
					dominantBaseline="central"
					alignmentBaseline="middle"
					fontSize="15"
				>
					{labelText}
				</text>
			</g>
		);
	};

	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart>
				<Pie
					data={data}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					label={false}
					cornerRadius={50}
					innerRadius={89}
					outerRadius={100} // difference entre inner et outer donne l'epaisseur du cercle
					startAngle={80}
					endAngle={220}
					paddingAngle={0}
					// stroke=""
					fill="red"
				>
					<Label
						content={<CustomLabel labelText="de votre objectif" value="12%" />}
						position="center"
					/>
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
}
