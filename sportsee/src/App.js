// import elements react et react-router-dom
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// import des composants
// import Api from "./Components/Api/Api"
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import Profil from "./Pages/Profil/Profil";
import Setting from "./Pages/Setting/Setting";
import Community from "./Pages/Community/Community";
import NotFound from "./Pages/NotFound/NotFound";

// import CSS
import "./App.css";

// console.log(Api)

function App() {
  const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3000/user/18`)
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((data) => {
				// console.log(data);
				return setData(data);
			});
	}, []);
	return (
		<div className="App">
			<Navbar />
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user/:id" element={<Profil data={data}/>} />
				<Route path="/setting" element={<Setting />} />
				<Route path="/community" element={<Community />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
