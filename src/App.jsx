import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import EmptyPage from "./Components/EmptyPage/EmptyPage";
import Profil from "./Pages/Profil/Profil";
import NotFound from "./Pages/NotFound/NotFound";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Sidebar />
			<Routes>
				<Route path="/" element={<EmptyPage page="Accueil"/>} />
				<Route path="/user/:userId" element={<Profil />}/>
				<Route path="/setting" element={<EmptyPage page="Réglage"/>} />
				<Route path="/community" element={<EmptyPage page="Communauté"/>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
