import styled from "styled-components";
import { useState, useEffect } from "react";
import {
	Box,
	Stack,
	Typography,
	Grid,
	Divider,
	Container,
} from "@mui/material";
import theme from "../../themes/theme";

const Team = (props) => {
	const [team, setTeam] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch("/api/meet_the_team");
			const body = await res.json();
			if (res.status !== 200) {
				alert(body.message);
			} else {
				setTeam(body);
			}
		};

		getData();
	}, []);

	return (
		<div>
			{team.length > 0 ? (
				<Box sx={{ marginTop: "2rem" }}>
					<div>
						<Typography sx={{ fontWeight: 600, fontSize: "2.4rem" }}>
							Meet the Team
						</Typography>
						<Divider
							orientation="horizontal"
							border-color={theme.palette.primary.grey}
							sx={{ marginBottom: "0.5rem" }}
						/>
						<p>
							The awesome team of mentors and administrators who makes this
							programme work.
						</p>
					</div>
					<GridContainer>
						{team?.map((d, i) => (
							<Holder key={`${d.name}-${i}`}>
								<Thumbnail>
									<img src={d.img} alt="..." className="team-img" />
									<Caption>
										<Typography sx={{ fontWeight: 600, fontSize: "1rem" }}>
											{d.name}
										</Typography>
										<Typography>{d.role}</Typography>
									</Caption>
								</Thumbnail>
							</Holder>
						))}
					</GridContainer>
				</Box>
			) : (
				<Box></Box>
			)}
		</div>
	);
};

export default Team;

const Holder = styled.div`
	margin-bottom: 1rem;
`;

const Caption = styled.div``;

const GridContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 600px) {
		display: grid;
		grid-gap: 5px;
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1000px) {
		display: grid;
		grid-gap: 5px;
		grid-template-columns: repeat(4, 1fr);
	}
`;

const Thumbnail = styled.div`
	backgroundColor: "d4dbdd",
	border: 0;
	img {
		width: 240px;
	}
`;
