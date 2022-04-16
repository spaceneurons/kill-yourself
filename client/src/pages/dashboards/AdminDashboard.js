import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import ProposalTempl from "../proposals/ProposalTempl";
import AllProposals from "../proposals/Proposals";
import Competitions from "../proposals/Competitions";
import CompTemplate from "../proposals/CompTemplate";
import MentorSignUp from "../register/MentorSignUp";
import AdminSignUp from "../register/AdminSignUp";
import { Box } from "@mui/system";
import BcgImage from "./bg1.png";

const AdminDashboard = ({ setAuth }) => {
	const [proposals, setProposals] = useState([]);
	const [page, setPage] = useState("");

	const getProposals = async () => {
		try {
			const response = await axios.get("/api/project");
			const data = response.data;
			setProposals(data);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getProposals();
	}, [page]);

	return (
		<div
			style={{
				backgroundImage: `url(${BcgImage})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			{page === "proposal" ? (
				<ProposalTempl setPage={setPage} />
			) : page === "compTemplate" ? (
				<CompTemplate setPage={setPage} />
			) : page === "all" ? (
				<AllProposals page={page} setPage={setPage} proposals={proposals} />
			) : page === "competition" ? (
				<div>
					<Competitions page={page} setPage={setPage} />
				</div>
			) : page === "mentor" ? (
				<MentorSignUp setPage={setPage} />
			) : page === "admin" ? (
				<AdminSignUp setPage={setPage} />
			) : (
				<Container style={{ width: "100%" }}>
					<div style={{ width: "100%" }}>
						{/* HEADING START*/}
						{/* <Box
							sx={{
								display: "flex",
								justifyContent: "center",
								mt: 2,
							}}
						>
							<Typography variant="h5" component="h2">
								Welcome back admin@sun.ac.za
							</Typography>
						</Box> */}
							{/* HEADING END */}
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								flexDirection: "column",
							}}
						>
							<Box
								sx={{
									display: "flex",
									pb: 2,
									pt: 2,
								}}
							>
								<Button onClick={() => setAuth(false)} variant="contained">
									Log out
								</Button>
							</Box>
							{/* <Button onClick={() => setPage("all")} variant="contained">
								Projects
							</Button>
							<br />
							<br />
							<Button onClick={() => setPage("proposal")} variant="contained">
								Add project
							</Button> */}
							<br />
							<br />
							<Button onClick={() => setPage("admin")} variant="contained">
								Add Admin
							</Button>
							<br />
							<br />
							<Button onClick={() => setPage("mentor")} variant="contained">
								Add Mentor
							</Button>
							<br />
							<br />
							<Button
								onClick={() => setPage("competition")}
								variant="contained"
							>
								Competitions
							</Button>
							<br />
							<br />
							<Button
								onClick={() => setPage("compTemplate")}
								variant="contained"
							>
								Add competition
							</Button>
							<br />
							<br />
						</Box>
					</div>
				</Container>
			)}
		</div>
	);
};

export default AdminDashboard;
