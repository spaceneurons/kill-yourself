import { useState } from "react";
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	TextField,
	Container,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import { withSnackbar } from "notistack";

const EditStudentProfile = (props) => {
	const { setPage, id, info } = props;
	const [values, setValues] = useState({
		student_name: info?.student_name || "",
		student_number: info?.student_number || "",
		student_email: info?.student_email || "",
		student_phone: info?.student_phone || "",
		student_bio: info?.student_bio || "",
	});

	const saveProfileInfo = async () => {
		if (
			values.student_name &&
			values.student_number &&
			values.student_email &&
			values.student_phone &&
			values.student_bio
		) {
			sendInfoToServer();
		} else {
			props.enqueueSnackbar("Please provide all fields", { variant: "error" });
		}
	};

	const sendInfoToServer = async () => {
			const res = await fetch("/api/students_profile", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					student_id: id,
					student_number: values.student_number,
					student_phone: values.student_phone,
					student_bio: values.student_bio,
					student_img: "#",
					student_active: true,
				}),
			});
			const body = await res.json();
			if (res.status !== 200) {
				props.enqueueSnackbar(body.message, {
					variant: "error",
				});
			} else {
				localStorage.setItem("profile", JSON.stringify(values));
				props.enqueueSnackbar("Saved sucessfully!", {
					variant: "success",
				});
				setPage("profile");
			}
	};

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<Container
			sx={{
				maxWidth: "100%",
				minHeight: "90vh",
				paddingBottom: "1rem",
				marginTop: "2.5rem",
			}}
		>
			<form autoComplete="off" noValidate>
				<Card>
					<CardHeader
						subheader="You must fill in all the fields."
						title="Profile"
					/>
					<Divider />
					<CardContent>
						<Grid container spacing={3}>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Full name"
									name="student_name"
									onChange={handleChange}
									required
									value={values.student_name}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Student number"
									name="student_number"
									onChange={handleChange}
									type="number"
									required
									value={values.student_number}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Email Address"
									name="student_email"
									onChange={handleChange}
									required
									value={values.student_email}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Phone Number"
									name="student_phone"
									onChange={handleChange}
									type="number"
									required
									value={values.student_phone}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField
									multiline
									required
									fullWidth
									label="Bio"
									name="student_bio"
									onChange={handleChange}
									value={values.student_bio}
									variant="outlined"
								/>
							</Grid>
						</Grid>
					</CardContent>
					<Divider />
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							p: 2,
						}}
					>
						<Button
							color="primary"
							variant="contained"
							sx={{ marginRight: "1rem" }}
							endIcon={<CancelIcon />}
							onClick={() => {
								props.enqueueSnackbar("Changes were discarded!", {
									variant: "error",
								});
								setPage("profile");
							}}
						>
							Cancel
						</Button>
						<Button
							color="primary"
							variant="contained"
							endIcon={<SendIcon />}
							onClick={saveProfileInfo}
						>
							Save
						</Button>
					</Box>
				</Card>
			</form>
		</Container>
	);
};

export default withSnackbar(EditStudentProfile);
