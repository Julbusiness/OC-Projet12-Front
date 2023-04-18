import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ENV = import.meta.env.VITE_API;

if(ENV === 'http://localhost:3000'){
	console.log(ENV + ' API')
} else {
	console.log(ENV + ' APIMOCK')
}

// import { Api } from "../../Components/Api/Api"
// import { Request } from "../../Components/Api/Api"
import { Api } from "../../Components/Api/ApiMock";
import { Request } from "../../Components/Api/ApiMock";

import GraphBar from "../../Components/Graphic/GraphBar";
import GraphRadar from "../../Components/Graphic/GraphRadar";
import GraphPie from "../../Components/Graphic/GraphPie";
import GraphLine from "../../Components/Graphic/GraphLine";

import "./Profil.css";
import calories from "../../Assets/calories-icon.png";
import proteines from "../../Assets/protein-icon.png";
import glucides from "../../Assets/carbs-icon.png";
import lipides from "../../Assets/fat-icon.png";

/**
 * Function that returns JSX (Profil page)
 * @returns JSX
 */
export default function Profil() {
	const [data, setData] = useState([]);
	const [dataActivity, setDataActivity] = useState([]);
	const [dataPerformance, setDataPerformance] = useState([]);
	const [dataAverageSessions, setDataAverageSessions] = useState([]);
	const { userId } = useParams();

	let user_api = new Api(userId);
	let request = new Request();

	useEffect(() => {
		async function getApiLoad() {
			const data = await request.currentURL(user_api.getApi(parseInt(userId)));
			setData(data);
		}
		getApiLoad();

		async function getApiActivityLoad() {
			const dataActivity = await request.currentURL(
				user_api.getApiActivity(parseInt(userId))
			);
			setDataActivity(dataActivity);
		}
		getApiActivityLoad();

		async function getApiPerformanceLoad() {
			const dataPerformance = await request.currentURL(
				user_api.getApiPerformance(parseInt(userId))
			);
			setDataPerformance(dataPerformance);
		}
		getApiPerformanceLoad();

		async function getApiAverageSessionsLoad() {
			const dataAverageSessions = await request.currentURL(
				user_api.getApiAverageSessions(parseInt(userId))
			);
			setDataAverageSessions(dataAverageSessions);
		}
		getApiAverageSessionsLoad();
	}, [userId]);

	const element = data.data;
	const elementActivity = dataActivity.data;
	const elementPerformance = dataPerformance.data;
	const elementAverageSessions = dataAverageSessions.data;

	return (

		<div className="container">
			<div className="user-info">
				<h1>
					<span className="bonjour">Bonjour</span>
					<span className="user-name">
						{" "}
						{element && element.userInfos.firstName}
					</span>
				</h1>
				<p className="profil-text">
					Félicitation ! Vous avez explosé vos objectifs hier 👏
				</p>
			</div>
			<div className="grid-container">
				<div className="graph-bar-other">
					<div className="graph-bar-container">
						<div className="txt-graph">
							<p className="title-graph-bar">Activité quotidienne</p>
							<ul className="title-graph-container">
								<li className="title-point-graph kg">Poids (kg)</li>
								<li className="title-point-graph kCal">
									Calories brûlées (kCal)
								</li>
							</ul>
						</div>
						{elementActivity && <GraphBar data={elementActivity} />}
					</div>
					<div className="other-graph">
						<div className="graph-line">
							<p className="title-line">Durée moyenne des sessions</p>
							{elementAverageSessions && (
								<GraphLine data={elementAverageSessions} />
							)}
						</div>
						<div className="graph-multi">
							{elementPerformance && <GraphRadar data={elementPerformance} />}
						</div>
						<div className="graph-circle">
							<p className="title-pie">Score</p>
							<span className="pie">
								{element && <GraphPie data={element} />}
							</span>
						</div>
					</div>
				</div>
				<div className="right-infos">
					<div className="calories">
						<img src={calories} alt="" className="icon" />
						<div className="container-info">
							<p className="calDyn">
								{element && element.keyData.calorieCount}kCal
							</p>
							<p className="calFix">Calories</p>
						</div>
					</div>
					<div className="proteines">
						<img src={proteines} alt="" className="icon" />
						<div className="container-info">
							<p className="calDyn">
								{element && element.keyData.proteinCount}g
							</p>
							<p className="calFix">Proteines</p>
						</div>
					</div>
					<div className="glucides">
						<img src={glucides} alt="" className="icon" />
						<div className="container-info">
							<p className="calDyn">
								{element && element.keyData.carbohydrateCount}g
							</p>
							<p className="calFix">Glucides</p>
						</div>
					</div>
					<div className="lipides">
						<img src={lipides} alt="" className="icon" />
						<div className="container-info">
							<p className="calDyn">{element && element.keyData.lipidCount}g</p>
							<p className="calFix">Lipides</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
