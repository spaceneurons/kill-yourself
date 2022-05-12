/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";

const Projects = ({ setPage }) => {
	const [inputs, setInputs] = useState({
		project_name: "",
		problem_statement: "",
		proposed_action: "",
		expected_result: "",
	});

	const handleChange = (e) => {
		return setInputs((input) => ({
			...input,
			[e.target.name]: e.target.value,
		}));
	};

	const { project_name, problem_statement, proposed_action, expected_result } =
		inputs;

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const myHeaders = new Headers();

			myHeaders.append("Content-Type", "application/json");
			myHeaders.append("token", localStorage.token);

			const body = {
				project_name,
				problem_statement,
				proposed_action,
				expected_result,
			};

			const response = await fetch("/api/student/projects", {
				method: "POST",
				headers: myHeaders,
				body: JSON.stringify(body),
			});

			const parseResponse = await response.json();
			console.log(parseResponse);
		} catch (error) {
			console.error(error.message);
		}
	};

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
			<h2 className="text-center mt-4">The Project Proposal</h2>
			<form onSubmit={handleSubmit}>
				<h6>The Project</h6>
				<textarea
					className="form-control mb-4"
					type="text"
					name="project_name"
					value={project_name}
					onChange={(e) => handleChange(e)}
				/>
				<h6>Problem Statement</h6>
				<textarea
					className="form-control mb-4"
					type="text"
					name="problem_statement"
					value={problem_statement}
					onChange={(e) => handleChange(e)}
				/>
				<h6>Proposed Action</h6>
				<textarea
					className="form-control mb-4"
					type="text"
					name="proposed_action"
					value={proposed_action}
					onChange={(e) => handleChange(e)}
				/>
				<h6>Expected Results</h6>
				<textarea
					className="form-control mb-4"
					type="text"
					name="expected_result"
					value={expected_result}
					onChange={(e) => handleChange(e)}
				/>
				<button type="submit" className="proj-submit">
					Send
					<SendIcon className="ml-3" />
				</button>
			</form>
		</>
	);
};

export default Projects;

