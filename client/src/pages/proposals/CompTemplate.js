import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Button, TextField } from "@mui/material";

const CompTemplate = ({ setPage }) => {
	const [compTitle, setCompTitle] = useState("");
	const [compDesc, setCompDesc] = useState("");
	const [contactPers, setContactPers] = useState("");
	const [comp, setComp] = useState([]);

	const comp_title = compTitle;
	const comp_desc = compDesc;
	const contact_pers = contactPers;

	const handleCompTitle = (e) => {
		e.preventDefault();
		setCompTitle(e.target.value);
	};

	const handleCompDesc = (e) => {
		e.preventDefault();
		setCompDesc(e.target.value);
	};

	const handleContactPers = (e) => {
		e.preventDefault();
		setContactPers(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			myHeaders.append("token", localStorage.token);

			const body = { comp_title, comp_desc, contact_pers };

			const res = await fetch("/api/competition", {
				method: "POST",
				headers: myHeaders,
				body: JSON.stringify(body),
			});

			const parseRes = await res.json();
			setComp([...comp, parseRes]);
			setCompTitle("");
			setCompDesc("");
			setContactPers("");
			setPage("");
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div>
			<Container style={{ width: "100%" }}>
				<Button onClick={() => setPage("")} variant="contained">
					Back
				</Button>
				<br />
				<br />
				<TextField
					required
					id="competition-title"
					label="Competition title"
					placeholder="What is this name of the  competition?"
					variant="outlined"
					style={{ width: "100%" }}
					value={compTitle}
					onChange={handleCompTitle}
				/>
				<br />
				<br />
				<TextField
					required
					id="competition-description"
					label="Competition description"
					placeholder="What is this competition about?"
					variant="outlined"
					style={{ width: "100%" }}
					value={compDesc}
					onChange={handleCompDesc}
				/>
				<br />
				<br />
				<TextField
					required
					id="outlined-basic"
					label="Contct person"
					variant="outlined"
					placeholder="Who can give more information?"
					style={{ width: "100%" }}
					value={contactPers}
					onChange={handleContactPers}
				/>
				<br />
				<br />
				<Button
					id="submit"
					variant="contained"
					size="large"
					onClick={handleSubmit}
					color="primary"
				>
					Add Competition
				</Button>
			</Container>
		</div>
	);
};

export default CompTemplate;
