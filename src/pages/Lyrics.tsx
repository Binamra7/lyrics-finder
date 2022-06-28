import axios from "axios";
import React, { useEffect, useState } from "react";
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
				console.log(res.data);
				setLyrics(res.data.message.body.lyrics.lyrics_body);
			})
			.catch((err) => {
				console.error(err.message);
			});
	}, [id]);
	return (
		<div>
			<p>{lyrics}</p>
		</div>
	);
};

export default Lyrics;
