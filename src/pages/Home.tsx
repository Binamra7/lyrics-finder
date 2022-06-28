import { useState, useEffect } from "react";
import axios from "axios";
import Tracks from "../components/Tracks";

const Home = () => {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([
		{
			track: {
				track_name: "",
				artist_name: "",
				track_id: "",
			},
		},
	]);
	useEffect(() => {
		if (search.length > 0) {
			axios
				.get(
					`http://api.musixmatch.com/ws/1.1/track.search?q_track=${search}&page_size=10&page=1&s_track_rating=desc&apikey=84e8f51ab9cf65f8541c567217d7752e`
					// `http://api.musixmatch.com/ws/1.1/track.search?q_track=${search}&apikey=84e8f51ab9cf65f8541c567217d7752e`
				)
				.then((res) => {
					console.log(res.data);

					setResults(res.data.message.body.track_list);
					console.log("results: ", results);
				})
				.catch((err) => {
					console.error(err.message);
				});
		}
		// eslint-disable-next-line
	}, [search]);
	const [title, setTitle] = useState("");

	const handleChange = (e: any) => {
		setTitle(e.target.value);
	};

	const handleSearch = (e: any) => {
		e.preventDefault();
		setSearch(title);
		setTitle("");
	};
	return (
		<div className="App">
			<h1>Search for the song</h1>
			<form onSubmit={handleSearch}>
				<input type="text" value={title} onChange={handleChange} />
				<button value="submit">Search</button>
			</form>
			<Tracks results={results} />
		</div>
	);
};

export default Home;
