/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import "./Dashboard.css";

import Profile from "./dashComponents/Profile";
import AccountSettings from "./dashComponents/AccountSettings";
import EditProfile from "./dashComponents/EditProfile";
import Competitions from "./dashComponents/Compititions";
import ProjectTable from "./dashComponents/ProjectTable";
import Feedback from "./dashComponents/Feedback";

import PersonIcon from "@mui/icons-material/Person";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import AddProposal from "./dashComponents/AddProposal";
import ShowProposalInfo from "./dashComponents/ShowProposalInfo";
import BcgImage from "../../../../images/background/bg1.png";

const StudentDashboard = () => {
	const [name, setName] = useState("");
	const [id, setId] = useState("");
	const [info, setInfo] = useState("");
	const [page, setPage] = useState("");
	const [table, setTable] = useState(false);
	const [projects, setProjects] = useState([]);
	const [proposal, setProposal] = useState([]);
	const [dataChange, setDataChange] = useState(false);

	const getName = async () => {
		try {
			const response = await fetch("/auth/student/dashboard", {
				method: "GET",
				headers: { token: localStorage.token },
			});
			const parseRes = await response.json();
			setName(parseRes[0].student_name);
			setId(parseRes[0].student_id);
		} catch (error) {
			console.error(error.message);
		}
	};

	const getProjects = async () => {
		try {
			const response = await fetch("/api/student/projects/proposal", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseResponse = await response.json();

			setProjects(parseResponse);
			setTable(true);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getName();
		getProjects();
		setDataChange(false);
	}, [dataChange]);

	const getProjectById = async (id) => {
		try {
			const response = await fetch(`/api/student/projects/proposal/${id}`, {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseResponse = await response.json();

			setProposal(parseResponse);
			setPage("show_proposal");
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		let localUserData = localStorage.getItem("profile");
		if (localUserData) {
			let userProfile = JSON.parse(localUserData);
			for (let name in userProfile) {
				setInfo((info) => {
					return {
						...info,
						[name]: userProfile[name],
					};
				});
			}
		}
	}, []);

	return (
		<>
			<div
				className="container container-fluid no-padding"
				style={{
					backgroundImage: `url(${BcgImage})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				{page === "profile" ? (
					<Profile
						setPage={setPage}
						id={id}
						setInfo={setInfo}
						setDataChange={setDataChange}
					/>
				) : page === "edit_profile" ? (
					<EditProfile
						setPage={setPage}
						id={id}
						info={info}
						setDataChange={setDataChange}
					/>
				) : page === "account_settings" ? (
					<AccountSettings setPage={setPage} setDataChange={setDataChange} />
				) : page === "feedback" ? (
					<Feedback setPage={setPage} setDataChange={setDataChange} />
				) : page === "competitions" ? (
					<Competitions setPage={setPage} setDataChange={setDataChange} />
				) : page === "proposal" ? (
					<AddProposal setPage={setPage} setDataChange={setDataChange} />
				) : page === "show_proposal" ? (
					<ShowProposalInfo
						setPage={setPage}
						proposal={proposal}
						projects={projects}
						setDataChange={setDataChange}
					/>
				) : (
					<>
						<div className="introduction">
							<h1>Student Dashboard</h1>
							<h2>Welcome Back {name}</h2>
						</div>
						<div className="links-wrapper">
							<div className="links">
								<div className="profile" onClick={() => setPage("profile")}>
									<PersonIcon style={{ fontSize: "2rem" }} />
									Profile
								</div>
								<div className="proposals" onClick={() => setPage("proposal")}>
									<VolunteerActivismIcon style={{ fontSize: "2rem" }} /> Add
									Proposal
								</div>
								<div className="feedback" onClick={() => setPage("feedback")}>
									<FeedbackIcon style={{ fontSize: "2rem" }} />
									Feedback
								</div>
								<div
									className="competitions"
									onClick={() => setPage("competitions")}
								>
									<SportsKabaddiIcon style={{ fontSize: "2rem" }} />
									Competitions
								</div>
							</div>
						</div>
						<hr />
						<ProjectTable
							setPage={setPage}
							getProjectById={getProjectById}
							projects={projects}
							table={table}
						/>
					</>
				)}
			</div>
		</>
	);
};

export default StudentDashboard;
