import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Lyrics = () => {
	const id = useParams().id;
	const [lyrics, setLyrics] = useState("");
	useEffect(() => {
		axios
			.get(
				`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=84e8f51ab9cf65f8541c567217d7752e`
			)
			.then((res) => {
				setLyrics(res.data.message.body.lyrics.lyrics_body);
			})
			.catch((err) => {
				console.error(err.message);
			});
	}, [id]);
	return (
		<pre>
			<Typography mt={5} p={5} align="center">
				{lyrics.length > 0 ? lyrics : "Loading..."}
			</Typography>
		</pre>
	);
};

export default Lyrics;
