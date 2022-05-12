/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

const ProjectTable = ({ getProjectById, projects }) => {

	return (
		<>
			<div className="project-table">
				<h3>Project Proposals</h3>
				<table className="table table-hover mt-5">
					<thead>
						<tr>
							<th scope="col" style={{ width: "10%" }}>
								#
							</th>
							<th scope="col" style={{ width: "15%" }}>
								Project Name
							</th>
							<th scope="col" style={{ width: "20%" }}>
								Problem Statement
							</th>
							<th scope="col" style={{ width: "20%" }}>
								Proposed Action
							</th>
							<th scope="col" style={{ width: "15%" }}>
								Project Status
							</th>
						</tr>
					</thead>
					<tbody>
						{projects.length === 0 ? (
							<tr>
								<td colSpan="5">
									<h3 className="text-center">--No projects to display--</h3>
								</td>
							</tr>
						) : (
							projects.map((proj, idx) => {
								return (
									<tr key={idx} onClick={() => getProjectById(proj.project_id)}>
										<th scope="row">{idx + 1}</th>
										<td>{proj.project_name}</td>
										<td>{proj.problem_statement}</td>
										<td>{proj.proposed_action}</td>
										<td>{proj.project_status}</td>
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

export default ProjectTable;