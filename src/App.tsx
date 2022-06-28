// import React, { ReactEventHandler, useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lyrics from "./pages/Lyrics";

function App() {
	// const api_key = "84e8f51ab9cf65f8541c567217d7752e/";
	// const url = "https://api.musixmatch.com/ws/1.1/";
	// const exm =
	// 	"matcher.lyrics.get?q_track=sexy%20and%20i%20know%20it&q_artist=lmfao";
	//"http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin%20bieber&page_size=3&page=1&s_track_rating=desc&apikey=84e8f51ab9cf65f8541c567217d7752e"
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
