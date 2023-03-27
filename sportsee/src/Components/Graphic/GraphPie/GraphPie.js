import React from "react";
import { PieChart, Pie, ResponsiveContainer, Label } from "recharts";

export default function GraphPie(data) {
  // console.log(data.data.todayScore)

	const dataGraph = [
		{
			name: "score",
			value: Math.round(data.data.todayScore * 100),
		},
	];

  console.log(dataGraph);

	const CustomLabel = ({ viewBox, labelText, value }) => {
		const { cx, cy } = viewBox;
		return (
			<g>
				<text
					x={cx}
					y={cy - 20}
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
					y={cy + 10}
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

	return (
		<ResponsiveContainer width="100%" height="100%">
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
					outerRadius={91} // difference entre inner et outer donne l'epaisseur du cercle
					startAngle={90}
					endAngle={dataGraph[0].value * 360 / 100 + 90}
					paddingAngle={0}
					// stroke=""
					fill="#FF0000"
				>
					<Label
						content={<CustomLabel 
            labelText="de votre objectif" 
            value={(dataGraph[0].value)+"%"}
            position="center"
            />}
					/>
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
}
