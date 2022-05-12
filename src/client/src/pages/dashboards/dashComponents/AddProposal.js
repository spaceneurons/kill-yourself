/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import StepOne from "./AddProposalSteps/StepOne";
import StepTwo from "./AddProposalSteps/StepTwo";
import StepThree from "./AddProposalSteps/StepThree";
import StepFour from "./AddProposalSteps/StepFour";
import StepFive from "./AddProposalSteps/StepFive";
import StepSix from "./AddProposalSteps/StepSix";
import StepSeven from "./AddProposalSteps/StepSeven";
import StepEight from "./AddProposalSteps/StepEight";
import StepNine from "./AddProposalSteps/StepNine";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const AddProposal = ({ setPage, setDataChange }) => {
	const [data, setData] = useState({
		project_name: "",
		problem_statement: "",
		proposed_action: "",
		expected_result: "",
		social_returns: "",
		key_activities: "",
		key_resources: "",
		team: "",
		client_profile: "",
		client_relationships: "",
		client_channels: "",
		key_partners: "",
		stakeholders: "",
		networks: "",
		startup_costs: "",
		operational_costs: "",
		finance_plan: "",
		business_plan: "",
		implementation_plan: "",
		key_milestones: "",
		monitoring_and_evaluation: "",
		who_we_are: "",
		vision_and_mission: "",
		track_record: "",
	});

	const [currentStep, setCurrentstep] = useState(0);

	// API REQUEST
	const makeApiRequest = async (formData) => {

		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("token", localStorage.token);

		try {
			const body = formData;

			const response = await fetch("/api/student/projects/proposal", {
				method: "POST",
				headers: myHeaders,
				body: JSON.stringify(body),
			});
			const parseData = await response.json();

			if (parseData) {
				setPage("");
				setDataChange(true);
			}

		} catch (error) {
			console.error(error.message);
		}
	};

	// FORWARD 1 STEP
	const handleNextStep = (newData, finalStep = false) => {
		setData((previousState) => ({ ...previousState, ...newData }));

		if (finalStep) {
			makeApiRequest({ ...data, ...newData });
			return;
		}

		setCurrentstep((previousStep) => previousStep + 1);
	};

	// BACK 1 STEP
	const handlePreviousStep = (newData) => {
		setData((previousState) => ({ ...previousState, ...newData }));
		setCurrentstep((previousState) => previousState - 1);
	};

	const steps = [
		<StepOne
			next={handleNextStep}
			data={data}
			steps={currentStep + 1}

			/>,
		<StepTwo
			next={handleNextStep}
			previousStep={handlePreviousStep}
			data={data}
		/>,
		<StepThree
			next={handleNextStep}
			previousStep={handlePreviousStep}
			data={data}
		/>,
		<StepFour
			next={handleNextStep}
			previousStep={handlePreviousStep}
			data={data}
		/>,
		<StepFive
			next={handleNextStep}
			previousStep={handlePreviousStep}
			data={data}
		/>,
		<StepSix
			next={handleNextStep}
			previousStep={handlePreviousStep}
			data={data}
		/>,
		<StepSeven
			next={handleNextStep}
			previousStep={handlePreviousStep}
			data={data}
		/>,
		<StepEight
			next={handleNextStep}
			previousStep={handlePreviousStep}
			data={data}
		/>,
		<StepNine
			next={handleNextStep}
			previousStep={handlePreviousStep}
			data={data}
		/>,
	];


	return (
		<div className="App">
			<div
				className="back"
				onClick={() => setPage("")}
				style={{ fontWeight: "600", cursor: "pointer" }}
			>
				<ArrowBackIcon />
				Go Back
			</div>
			<Box
				sx={{
					mx: "auto",
					borderStyle: "outset",
					// bgcolor: 'primary.main',
					color: "#kkk",
					width: "auto",
					p: 1,
					m: 1,
					borderRadius: 1,
					textAlign: "center",
				}}
			>
				The Project Proposal
			</Box>
			{steps[currentStep]}
		</div>
	);
};
export default AddProposal;
