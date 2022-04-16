import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


const StudentSignUp = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		student_name: "",
		student_email: "",
		student_password: "",
	});

	const { student_name, student_email, student_password } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const body = { student_name, student_email, student_password };

			const response = await fetch("/auth/student/sign-up", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			const parseRes = await response.json();

			localStorage.setItem("token", parseRes.token);

			if (parseRes.token) {
				setAuth(true);

				toast.success("Signed Up Successfully");
			} else {
				setAuth(false);

				toast.error(parseRes);
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	const Copyright = (props) => {
		return (
			<Typography
				variant="body2"
				color="text.secondary"
				align="center"
				{...props}
			>
				{"Copyright © "}
				<Link to="/">
					The A Team
				</Link>{" "}
				{new Date().getFullYear()}
				{"."}
			</Typography>
		);
	};


	return (
		<>
		<Link to="/"><button className="home-btn">Home</button></Link>
			<Container
				sx={{
					maxWidth: "100%",
					minHeight: "90vh",
					paddingBottom: "1rem",
				}}
			>
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<Box
						sx={{
							marginTop: 8,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
							<LockOutlinedIcon />
							</Avatar>
						<Typography component="h1" variant="h5">
							Student Sign up
						</Typography>
						<Box
							component="form"
							onSubmit={onSubmitForm}
							noValidate
							sx={{ mt: 1 }}
						>
							{/* STUDENT NAME */}
							<TextField
								margin="normal"
								required
								fullWidth
								id="name"
								label="Name"
								name="student_name"
								autoComplete="name"
								value={student_name}
								onChange={(e) => onChange(e)}
							/>

							{/* STUDENT EMAIL */}
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="student_email"
								autoComplete="email"
								helperText='Only university email address accepted, i.e. ...@sun.ac.za'
								value={student_email}
								onChange={(e) => onChange(e)}
							/>

							{/* STUDENT PASSWORD */}
							<TextField
								margin="normal"
								required
								fullWidth
								name="student_password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								value={student_password}
								onChange={(e) => onChange(e)}
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
								onClick={onSubmitForm}
							>
								Sign Up
							</Button>
							<Grid container>
								<Grid item xs>
									<FormLink href="#" variant="body2">
										Forgot password?
									</FormLink>
								</Grid>
							</Grid>
						</Box>
					</Box>
					<Copyright sx={{ mt: 8, mb: 4 }} />
				</Container>
			</Container>
		</>
	);
};

export default StudentSignUp;
