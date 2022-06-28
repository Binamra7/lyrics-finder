import { Card } from "@mui/material";
import { Container } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";

interface TracksProps {
	results: any;
}

const Tracks: FC<TracksProps> = ({ results }) => {
	return (
		<Container>
			{results &&
				results.map((result: any) => {
					return (
						<Card variant="outlined" key={result.track.track_id}>
							<Link to={`/lyrics/${result.track.track_id}`}>
								{result.track.track_name}
								{result.track.artist_name}
							</Link>
						</Card>
					);
				})}
		</Container>
	);
};

export default Tracks;
