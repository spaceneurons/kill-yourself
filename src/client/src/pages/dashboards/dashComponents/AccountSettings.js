import { useState, useEffect } from "react";
import styled from "styled-components";
import {
	Box,
	Divider,
	Typography,
	TextField,
	Button,
	FormControlLabel,
	FormGroup,
	Checkbox,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BackIcon from "@mui/icons-material/ArrowBack";
import { withSnackbar } from "notistack";

const Settings = (props) => {
	const [values, setValues] = useState({
		oldpwd: "",
		newpwd: "",
		newpwd2: "",
		sms: true,
		phone: false,
		email: true,
	});

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	const handleCheckbox = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.checked,
		});
	};

	const savePassword = async () => {
	/*	if (values.oldpwd && values.newpwd && values.newpwd2) {
			if (values.newpwd === values.newpwd2) {
				const res = await fetch(`/students/${props.user.user_id}`);
				const body = await res.json();
				if (res.status !== 200) {
					props.enqueueSnackbar(body.message, {
						variant: "error",
					});
				} else {
					if (body.password === values.oldpwd) {
						const res = await fetch("/changepassword", {
							method: "PUT",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								user_id: props.user.user_id,
								new_password: values.newpwd,
							}),
						});
						const body = await res.json();
						if (res.status !== 200) {
							props.enqueueSnackbar(body.message, {
								variant: "error",
							});
						} else {
							props.enqueueSnackbar("Password was sucessfully changed!", {
								variant: "success",
							});
						}
					} else {
						props.enqueueSnackbar("Please provide all fields!", {
							variant: "error",
						});
					}
				}
			} else {
				props.enqueueSnackbar("New password mismatch!", { variant: "error" });
			}
		} else {
			props.enqueueSnackbar("Please provide all fields!", { variant: "error" });
		}*/
	};


	const saveCommPrefs = () => {};
	return (
		<>
			<NavContainer setPage={props.setPage} />
			<MainContainer>
				<PasswordContainer>
					<PasswordSection
						savePassword={savePassword}
						handleChange={handleChange}
						values={values}
					/>
				</PasswordContainer>
				<CommContainer>
					<CommunicationSection
						saveCommPrefs={saveCommPrefs}
						handleCheckbox={handleCheckbox}
						values={values}
					/>
				</CommContainer>
			</MainContainer>
		</>
	);
};

export default withSnackbar(Settings);

const PasswordContainer = styled.div`
	margin-top: 1rem;
	margin-right: 2rem;
	width: 90%;
	@media (min-width: 768px) {
		margin-left: 1rem;
		margin-right: 1rem;
		width: 50%;
	}
`;
const CommContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
	width: 90%;
	margin-right: 2rem;
	@media (min-width: 768px) {
		margin-top: 1rem;
		margin-right: 1rem;
		width: 50%;
	}
`;

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: 1rem;
	margin-right: 1rem;
	width: 100%;
	min-height: 90vh;
	padding-bottom: 1rem;
	margin-top: 2rem;
	overflow-x: hidden;

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
	}
`;

const PasswordSection = ({ savePassword, handleChange, values }) => {
	return (
		<Box
			sx={{
				boxShadow: 3,
				padding: "1rem",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Typography variant="h5" sx={{ textAlign: "center" }}>
				Change your password
			</Typography>
			<Divider
				orientation="horizontal"
				flexItem
				width="100%"
				border-color="primary.grey"
				sx={{ marginBottom: "1rem" }}
			/>
			<TextField
				fullWidth
				inputProps={{
					autocomplete: "new-password",
					form: {
						autocomplete: "off",
					},
				}}
				label="Current password"
				name="oldpwd"
				onChange={handleChange}
				type="password"
				value={values.oldpwd}
				variant="outlined"
			/>
			<TextField
				fullWidth
				inputProps={{
					autocomplete: "new-password",
					form: {
						autocomplete: "off",
					},
				}}
				label="New Password"
				name="newpwd"
				onChange={handleChange}
				type="password"
				value={values.newpwd}
				variant="outlined"
				sx={{ marginTop: "1rem" }}
			/>
			<TextField
				fullWidth
				inputProps={{
					autocomplete: "new-password",
					form: {
						autocomplete: "off",
					},
				}}
				label="Repeat New Password"
				name="newpwd2"
				onChange={handleChange}
				type="password"
				value={values.newpwd2}
				variant="outlined"
				sx={{ marginTop: "1rem" }}
			/>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
					width: "100%",
					marginTop: "1.2rem",
				}}
			>
				<Button
					color="primary"
					variant="contained"
					endIcon={<SendIcon />}
					onClick={savePassword}
					sx={{ textTransform: "none" }}
				>
					Save
				</Button>
			</Box>
		</Box>
	);
};

const CommunicationSection = ({ saveCommPrefs, handleCheckbox, values }) => {
	return (
		<Box
			sx={{
				boxShadow: 3,
				padding: "1rem",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Typography variant="h5" sx={{ textAlign: "center" }}>
				Communication preferences
			</Typography>
			<Divider
				orientation="horizontal"
				flexItem
				width="100%"
				border-color="primary.grey"
				sx={{ marginBottom: "1rem" }}
			/>

			<FormGroup>
				<Box
					sx={{
						padding: "1rem",
						width: "100%",
						display: "flex",
						flexDirection: "row",
						flexFlow: "wrap",
						alignItems: "center",
					}}
				>
					<FormControlLabel
						control={
							<Checkbox
								name="phone"
								checked={values.phone}
								onChange={handleCheckbox}
								inputProps={{ "aria-label": "controlled" }}
							/>
						}
						label="Phone"
					/>

					<FormControlLabel
						control={
							<Checkbox
								name="email"
								checked={values.email}
								onChange={handleCheckbox}
								inputProps={{ "aria-label": "controlled" }}
							/>
						}
						label="Email"
					/>
					<FormControlLabel
						control={
							<Checkbox
								name="sms"
								checked={values.sms}
								onChange={handleCheckbox}
								inputProps={{ "aria-label": "controlled" }}
							/>
						}
						label="SMS"
					/>
				</Box>
			</FormGroup>

			<Divider
				orientation="horizontal"
				flexItem
				width="100%"
				border-color="primary.grey"
				sx={{ marginBottom: "0rem", marginTop: "1.5rem" }}
			/>

			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
					width: "100%",
					marginTop: "1.2rem",
				}}
			>
				<Button
					color="primary"
					variant="contained"
					endIcon={<SendIcon />}
					onClick={saveCommPrefs}
					sx={{ textTransform: "none" }}
				>
					Save
				</Button>
			</Box>
		</Box>
	);
};

const NavContainer = ({ setPage }) => {
	return (
		<Box sx={{ marginTop: "1rem", marginLeft: "1rem" }}>
			<Button
				variant="contained"
				sx={{ textTransform: "none" }}
				onClick={() => setPage("profile")}
			>
				<BackIcon />
				<Typography sx={{ marginLeft: "0.3rem" }}>Back to Profile</Typography>
			</Button>
		</Box>
	);
};
