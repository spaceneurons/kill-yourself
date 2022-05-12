import React, { useEffect, useState } from "react";
import MentorShowProposal from "./dashComponents/MentorShowProposal";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import BcgImage from "../../../../images/background/bg1.png";

const MentorDashboard = ({ setAuth }) => {
	const [proposals, setProposals] = useState([]);
	const [singleProject, setSingleProject] = useState([]);
	const [page, setPage] = useState("");
	const [dataChange, setDataChange] = useState(false);

	useEffect(() => {
		getAllProposals();
		setDataChange(false);
	}, [dataChange]);

	const getAllProposals = async () => {
		try {
			const response = await fetch("/api/project");
			const data = await response.json();
			setProposals(data);
		} catch (error) {
			console.error(error.message);
		}
	};

	const getProposalById = async (id) => {
		try {
			const response = await fetch(`/api/student/projects/proposal/${id}`, {
				method: "GET",
				headers: { "token": localStorage.token },
			});

			const parseResponse = await response.json();

			setSingleProject(parseResponse);
			setPage("mentor_show");
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div
			className="p-5"
			style={{
				backgroundImage: `url(${BcgImage})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			{page === "mentor_show" ? (
				<MentorShowProposal
					singleProject={singleProject}
					setPage={setPage}
					projectId={proposals.project_id}
					setDataChange={setDataChange}
				/>
			) : (
				<Container style={{ width: "100%" }}>
					<Button onClick={() => setAuth(false)} variant="contained">
						Log out
					</Button>
					<br />
					<br />
					<div>
						<h3 className="text-center mb-3">Student Project Proposals</h3>
						<table className="table table-hover">
							<caption>List of Projects</caption>
							<thead>
								<tr>
									<th scope="col" style={{ width: "10%" }}>#</th>
									<th scope="col" style={{ width: "15%" }}>Student name</th>
									<th scope="col" style={{ width: "15%" }}>Project name</th>
									<th scope="col" style={{ width: "35%" }}>Problem statement</th>
									<th scope="col" style={{ width: "15%" }}>Project status</th>
								</tr>
							</thead>
							{proposals.map(
								(
									{
										project_id,
										student_name,
										project_name,
										problem_statement,
										project_status,
									},
									index
								) => {
									return (
										<tbody key={project_id}>
											<tr onClick={() => getProposalById(project_id)}>
												<th scope="row">{index + 1}</th>
												<td>{student_name}</td>
												<td>{project_name}</td>
												<td>{problem_statement}</td>
												<td>{project_status}</td>
											</tr>
										</tbody>
									);
								}
							)}
						</table>
					</div>
				</Container>
			)}
		</div>
	);
};

export default MentorDashboard;
