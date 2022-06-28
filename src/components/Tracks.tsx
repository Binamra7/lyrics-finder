import { Card, Box, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

//specify the interface for results which is array of objects
interface Results {
	track: {
		track_name: string;
		artist_name: string;
		track_id: string;
	};
}

//specify the interface for props which is an object with a results property
interface Props {
	results: Results[];
}

const Tracks: FC<Props> = ({ results }) => {
	return (
		<Container sx={{ mt: 3 }}>
			{results[0].track.track_name !== "" &&
				results.map((result: any, i: number) => {
					return (
						<Card variant="outlined" key={result.track.track_id}>
							<Link to={`/lyrics/${result.track.track_id}`}>
								<Box
									sx={{
										display: "flex",
										bgcolor: "info.main",
										color: "white",
									}}
								>
									<Typography align="left" p={3} mx={1}>
										{i + 1}.
									</Typography>
									<Typography align="center" p={3} mx={2}>
										{result.track.track_name}
									</Typography>
									<Typography align="right" py={3} mx={"auto"}>
										Artist: {result.track.artist_name}
									</Typography>
								</Box>
							</Link>
						</Card>
					);
				})}
		</Container>
	);
};

export default Tracks;
