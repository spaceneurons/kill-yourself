/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
// import AddProposal from "./AddProposal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Competitions = ({ setPage, setDataChange }) => {
	const [comp, setComp] = useState(false);
	const [competitions, setCompetitions] = useState([]);

	const getCompetitions = async () => {
		try {
			const response = await fetch("/api/competition", {
				method: "GET",
				headers: { "token": localStorage.token },
			});

			const parseResponse = await response.json();

			setCompetitions(parseResponse);
			setComp(true);
			setDataChange(true);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getCompetitions();
	});

	return (
		<>
			<div
				className="back"
				onClick={() => setPage("")}
				style={{ fontWeight: "600", cursor: "pointer" }}
			>
				<ArrowBackIcon />
				Go Back
			</div>
			<h2 className="text-center mt-4 mb-4">Competitions</h2>
			{!comp ? (
				<h3>--No competitions to display--</h3>
			) : (
				competitions.map((comp, idx) => {
					return (
						<div className="card mb-3" key={idx}>
							<div className="card-body">
								<h5 className="card-title">{comp.comp_title}</h5>
								<p className="card-text">{comp.comp_desc}</p>
								<p className="card-text">Contact: {comp.contact_pers}</p>
							</div>
						</div>
					);
				})
			)}
		</>
	);
};

export default Competitions;

// {comp === true ? <AddProposal /> : (comp ? (<h3>--No competitions to display--</h3>) : (competitions.map((comp, idx) => {
// 	return (
// 		<ul key={idx}>
// 			<li style={{ listStyle: "none" }}>
// 				<h2>{comp.comp_title}</h2>
// 			</li>
// 			<li style={{ listStyle: "none" }}>{comp.comp_desc}</li>
// 			<li style={{ listStyle: "none" }}>Contact: {comp.contact}</li>
// 		</ul>
