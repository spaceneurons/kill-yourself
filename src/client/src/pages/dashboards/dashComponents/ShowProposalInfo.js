/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable linebreak-style */
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditProposal from "./EditProposal";

const ShowProposalInfo = ({ setPage, proposal, projects, setDataChange }) => {
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
			<div className="edit-proposal">
				<EditProposal proposal={proposal} projects={projects} setDataChange={setDataChange} setPage={setPage} />
			</div>
			<div className="show-proposal-container">
				{proposal.map((info, idx) => {
					return (
						<div key={idx}>
							<h5>The Project</h5>
							<div className="proposal-info">
								<p>{info.project_name}</p>
							</div>
							<h5>Problem Statement</h5>
							<div className="proposal-info">
								<p>{info.problem_statement}</p>
							</div>
							<h5>Proposed Action</h5>
							<div className="proposal-info">
								<p>{info.proposed_action}</p>
							</div>
							<h5>Expected Result</h5>
							<div className="proposal-info">
								<p>{info.expected_result}</p>
							</div>
							<h5>Social Returns</h5>
							<div className="proposal-info">
								<p>{info.social_returns}</p>
							</div>
							<h5>Key Activities</h5>
							<div className="proposal-info">
								<p>{info.key_activities}</p>
							</div>
							<h5>Key Resources</h5>
							<div className="proposal-info">
								<p>{info.key_resources}</p>
							</div>
							<h5>The Team</h5>
							<div className="proposal-info">
								<p>{info.team}</p>
							</div>
							<h5>Client Profile</h5>
							<div className="proposal-info">
								<p>{info.client_profile}</p>
							</div>
							<h5>Client Relationships</h5>
							<div className="proposal-info">
								<p>{info.client_relationships}</p>
							</div>
							<h5>Client_Channels</h5>
							<div className="proposal-info">
								<p>{info.client_channels}</p>
							</div>
							<h5>Key partners</h5>
							<div className="proposal-info">
								<p>{info.key_partners}</p>
							</div>
							<h5>Stakeholders</h5>
							<div className="proposal-info">
								<p>{info.stakeholders}</p>
							</div>
							<h5>Networks</h5>
							<div className="proposal-info">
								<p>{info.networks}</p>
							</div>
							<h5>Start Up Cost</h5>
							<div className="proposal-info">
								<p>{info.startup_costs}</p>
							</div>
							<h5>Operational Cost</h5>
							<div className="proposal-info">
								<p>{info.operational_costs}</p>
							</div>
							<h5>Finance Plan</h5>
							<div className="proposal-info">
								<p>{info.finance_plan}</p>
							</div>
							<h5>Business Plan</h5>
							<div className="proposal-info">
								<p>{info.business_plan}</p>
							</div>
							<h5>Implementation Plan</h5>
							<div className="proposal-info">
								<p>{info.implementation_plan}</p>
							</div>
							<h5>Key Milestones</h5>
							<div className="proposal-info">
								<p>{info.key_milestones}</p>
							</div>
							<h5>Monitoring And Evaluation</h5>
							<div className="proposal-info">
								<p>{info.monitoring_and_evaluation}</p>
							</div>
							<h5>Who We Are</h5>
							<div className="proposal-info">
								<p>{info.who_we_are}</p>
							</div>
							<h5>Vision And Mission</h5>
							<div className="proposal-info">
								<p>{info.vision_and_mission}</p>
							</div>
							<h5>Track_Record</h5>
							<div className="proposal-info">
								<p>{info.track_record}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ShowProposalInfo;
