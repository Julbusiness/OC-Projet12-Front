import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import Profil from "./Pages/Profil/Profil";
import Setting from "./Pages/Setting/Setting";
import Community from "./Pages/Community/Community";
import NotFound from "./Pages/NotFound/NotFound";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user/:userId" element={<Profil />}/>
				<Route path="/setting" element={<Setting />} />
				<Route path="/community" element={<Community />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
