import React from "react";
import "./Sidebar.css";
import logo1 from "../../Assets/sidebar1.png";
import logo2 from "../../Assets/sidebar2.png";
import logo3 from "../../Assets/sidebar3.png";
import logo4 from "../../Assets/sidebar4.png";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="logo-container">
				<div className="bg-logo">
					<img src={logo1} alt="" className="logo-side" />
				</div>
				<div className="bg-logo">
					<img src={logo2} alt="" className="logo-side" />
				</div>
				<div className="bg-logo">
					<img src={logo3} alt="" className="logo-side" />
				</div>
				<div className="bg-logo">
					<img src={logo4} alt="" className="logo-side" />
				</div>
			</div>
			<div className="copyright">&copy; Copyright SportSee 2020</div>
		</div>
	);
}
