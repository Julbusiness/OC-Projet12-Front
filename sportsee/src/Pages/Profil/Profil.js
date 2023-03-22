import "./Profil.css";

export default function Profil(data) {

	return (
			<div className="container">
				<div className="user-info">
					<h1>
						<span className="bonjour">Bonjour</span>
						<span className="user-name"> {data.data.data.userInfos.firstName}</span>
					</h1>
				</div>
				<p className="profil-text">
					Félicitation ! Vous avez explosé vos objectifs hier 👏
				</p>
				<div className="grid-container">
					<div className="div1">First</div>
					<div className="div2">Second</div>
					<div className="div3">third</div>
					<div className="div4">fourth</div>
					<div className="div5">fifth</div>
					<div className="div6">sixth</div>
					<div className="div7">seventh</div>
					<div className="div8">height</div>
				</div>
			</div>
	);
}
