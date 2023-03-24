import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../Components/Api/Api";
import { getApiActivity } from "../../Components/Api/Api";
import "./Profil.css";
import calories from "../../Assets/calories-icon.png";
import proteines from "../../Assets/protein-icon.png";
import glucides from "../../Assets/carbs-icon.png";
import lipides from "../../Assets/fat-icon.png";

export default function Profil() {
	const [data, setData] = useState([]);
	const [dataActivity, setDataActivity] = useState([])
	const { userId } = useParams();
	// console.log(userId);

	useEffect(() => {
		async function getApiLoad() {
			const data = await getApi(userId);
			setData(data);
		}
		getApiLoad();
	}, [userId]);

	useEffect(() => {
		async function getApiActivityLoad() {
			const dataActivity = await getApiActivity(userId);
			setDataActivity(dataActivity);
		}
		getApiActivityLoad();
	}, [userId]);

	const element = data.data;
	const elementActivity = dataActivity.data
	console.log(elementActivity)

	return (
		element && elementActivity &&(
			<div className="container">
				<div className="user-info">
					<h1>
						<span className="bonjour">Bonjour</span>
						<span className="user-name"> {element.userInfos.firstName}</span>
					</h1>
				</div>
				<p className="profil-text">
					Félicitation ! Vous avez explosé vos objectifs hier 👏
				</p>
				<div className="grid-container">
					<div className="graph-bar">
						<div>{elementActivity.sessions[0].kilogram}</div>
					</div>
					<div className="calories">
						<img src={calories} alt="" className="icon" />
						<div className="container-info">
							<p className="calDyn">{element.keyData.calorieCount}kCal</p>
							<p className="calFix">Calories</p>
						</div>
					</div>
					<div className="proteines">
						<img src={proteines} alt="" className="icon" />
						<div className="container-info">
							<p className="calDyn">{element.keyData.proteinCount}g</p>
							<p className="calFix">Proteines</p>
						</div>
					</div>
					<div className="glucides">
						<img src={glucides} alt="" className="icon" />
						<div className="container-info">
							<p className="calDyn">{element.keyData.carbohydrateCount}g</p>
							<p className="calFix">Glucides</p>
						</div>
					</div>
					<div className="lipides">
						<img src={lipides} alt="" className="icon" />
						<div className="container-info">
							<p className="calDyn">{element.keyData.lipidCount}g</p>
							<p className="calFix">Lipides</p>
						</div>
					</div>
					<div className="graph-line">graph-line</div>
					<div className="graph-multi">graph-multi</div>
					<div className="graph-circle">graph-circle</div>
				</div>
			</div>
		)
	);
}
