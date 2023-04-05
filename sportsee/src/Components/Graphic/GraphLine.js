import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types"
import { UsersLine } from "../Model/Model";

export default function GraphLine(data) {
	const dataGraph = data.data.sessions;
	const dataGraphBar = [];
	
	dataGraph.forEach((el, index) => {

		let user = new UsersLine(el)
		
		dataGraphBar.push({
			name: user.name[index++],
			day: user.day,
			sessionLength: user.sessionLength,
		});
	});

	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip-line">
					<p className="linechart-label">{`${payload[0].value} min`}</p>
				</div>
			);
		}
		return null;
	};

		CustomTooltip.propTypes ={
		active: PropTypes.bool.isRequired,
		payload: PropTypes.arrayOf(PropTypes.object).isRequired
	}

	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart
				data={dataGraphBar}
				margin={{
					top: 100,
					right: 25,
					left: 20,
					bottom: 5,
				}} // marge entre le bord du container et le debut du graph et de la legende
			>
				<XAxis
					dataKey="name"
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: 12, fill: "rgba(255, 255, 255, 0.5)" }}
				/>
				<YAxis
					dataKey="sessionLength"
					hide={true} //montre l'échelle Y
					type="number"
					domain={[-10, "dataMax"]}
				/>
				<Tooltip
					cursor={false} //! piste pour changer la couleur de la div cursor
					content={CustomTooltip}
					offset={20} // distance entre le pointeur et le content tooltip
					wrapperStyle={{ width: 25, height: 25, outline: "none" }} // taille de la bulle au mouseover + outline pour enlever la bordure verte autour de la bulle
				/>
				<Line
					type="natural"
					dataKey="sessionLength"
					dot={false} // enleve les points sur la ligne
					strokeWidth={2}
					stroke="url(#gradient)" // couleur de la ligne
				/>
				<defs>
					<linearGradient id="gradient">
						<stop offset="10%" stopColor="white" stopOpacity="0.5" />
						<stop offset="30%" stopColor="white" stopOpacity="0.6" />
						<stop offset="60%" stopColor="white" stopOpacity="0.7" />
						<stop offset="80%" stopColor="white" stopOpacity="0.9" />
						<stop offset="100%" stopColor="white" stopOpacity="1" />
					</linearGradient>
				</defs>
			</LineChart>
		</ResponsiveContainer>
	);
}

GraphLine.propTypes = {
	data: PropTypes.object.isRequired
}
