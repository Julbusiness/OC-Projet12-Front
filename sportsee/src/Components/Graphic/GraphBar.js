import React from "react";
import {
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Bar,
	ResponsiveContainer,
} from "recharts";

export default function GraphBar(data) {
	const dataGraph = data.data.sessions;
	const dataGraphBar = [];

	for (const el of dataGraph) {
		// console.log(el)

		const date = new Date(el.day);
		const day = date.getDate();
		// console.log(day)

		dataGraphBar.push({
			name: day,
			poids: `${el.kilogram}`,
			calories: `${el.calories}`,
		});
	}

	//? console.log
	// console.log(dataGraph)
	// console.log(dataGraphBar)

	//? Style pour les graphs

	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip-bar">
					<p className="label">{`${payload[0].value}kg`}</p>
					<p className="label">{`${payload[1].value}kCal`}</p>
				</div>
			);
		}
	};

	return (
		<ResponsiveContainer width="100%" height="75%">
			<BarChart
				barSize={8} // width de la bar
				barGap={8} // distance entre les divers bars
				data={dataGraphBar}
				barCategoryGap={25} // distance entre les categories
				margin={{ top: 50, right: 0, left: 20, bottom: 0 }}
			>
				<CartesianGrid
					strokeDasharray="4 1"
					vertical={false}
					stroke="#DEDEDE"
				/>
				<XAxis
					dataKey="name"
					tickLine={false}
					tickCount={0}
					tick={{ fontSize: 14, fill: "#9B9EAC" }}
					dy={10}
					stroke="#DEDEDE" // couleur de la barre du bas
					padding={{ left: -25, right: -25 }} // permet de reduire les 2 cotés visibles de la barre x
				/>
				<YAxis
					yAxisId="poids"
					dataKey="poids"
					orientation="right"
					tickCount={3}
					axisLine={false}
					tickLine={false}
					type="number"
					domain={["dataMin -1", "auto"]}
					tick={{ fontSize: 14, fill: "#9B9EAC" }}
					tickMargin="25"
					dy={-2}
				/>
				<YAxis
					yAxisId="calories"
					dataKey="calories"
					type="number"
					domain={["dataMin - 100", "auto"]}
					hide={true}
				/>
				<Tooltip
					content={CustomTooltip}
					cursor={{ fill: "rgba(196, 196, 196, 0.5)", width: 65 }}
					offset={40} // distance entre le pointeur et le content tooltip
					wrapperStyle={{ outline: "none" }}
				/>
				<Bar
					yAxisId="poids"
					dataKey="poids"
					fill="#282D30"
					maxBarSize={7}
					radius={[5, 5, 0, 0]}
				/>
				<Bar
					yAxisId="calories"
					dataKey="calories"
					fill="#E60000"
					maxBarSize={7}
					radius={[5, 5, 0, 0]}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
}
