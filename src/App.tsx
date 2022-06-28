import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lyrics from "./pages/Lyrics";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/lyrics/:id" element={<Lyrics />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
