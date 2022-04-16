/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Feedback = ({ setPage, setDataChange }) => {
	const [getFeedback, setGetFeedback] = useState([]);

	const getMentorFeedback = async () => {
		try {
			const response = await fetch("/api/student/feedback", {
				method: "GET",
				headers: { "token": localStorage.token },
			});

			const parseResponse = await response.json();

			setGetFeedback(parseResponse);
			setDataChange(true);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getMentorFeedback();
	});

	return (
		<>
			<div
				className="back mb-5"
				onClick={() => setPage("")}
				style={{ fontWeight: "600", cursor: "pointer" }}
			>
				<ArrowBackIcon />
				Go Back
			</div>
			<div className="feedback-table">
				<h3 className="text-center">Feedback</h3>
				<table className="table table-hover mt-5">
					<thead>
						<tr>
							<th scope="col" style={{ width: "10%" }}>
								#
							</th>
							<th scope="col" style={{ width: "15%" }}>
								Mentor Name
							</th>
							<th scope="col" style={{ width: "35%" }}>
								The Project
							</th>
							<th scope="col" style={{ width: "35%" }}>
								Feedback
							</th>
						</tr>
					</thead>
					<tbody>
						{getFeedback.length === 0 ? (
							<tr>
								<td colSpan="5">
									<h5 className="text-center">--No feedback to display--</h5>
								</td>
							</tr>
						) : (
							getFeedback.map((item, idx) => {
								return (
									<tr key={idx}>
										<th scope="row">{idx + 1}</th>
										<td>{item.mentor_name}</td>
										<td>{item.project_name}</td>
										<td>{item.feedback}</td>
									</tr>
								);
							})
						)}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Feedback;
