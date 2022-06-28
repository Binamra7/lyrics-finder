import { useState, useEffect } from "react";
import axios from "axios";
import Tracks from "../components/Tracks";
import { Button, TextField } from "@mui/material";

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
				)
				.then((res) => {
					setResults(res.data.message.body.track_list);
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
				<TextField
					id="outlined-basic"
					label="Search Tracks"
					variant="outlined"
					value={title}
					onChange={handleChange}
				/>
				<Button
					variant="contained"
					value="submit"
					onClick={handleSearch}
					sx={{ mx: 4, mt: 1 }}
				>
					Search
				</Button>
			</form>
			<Tracks results={results} />
		</div>
	);
};

export default Home;
