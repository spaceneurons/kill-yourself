import { useState, useEffect } from "react";
import styled from "styled-components";
import { Box, Button, Divider, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import PreviewIcon from "@mui/icons-material/Preview";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import BackIcon from "@mui/icons-material/ArrowBack";
import Loading from "../../../components/services/Loading";
import Error from "../../../components/services/Error";
import { pascalCase } from "../../../components/services/utils";

const StudentProfile = ({ setPage, id, setInfo, setDataChange }) => {
	const [profileInfo, setProfileInfo] = useState({});
	const [projects, setProjects] = useState([]);
	const [projectsId, setProjectsId] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState({ state: false, message: "" });

	useEffect(() => {
		const getProfileInfo = async () => {
			const studentInfo = {
				student_name: "",
				student_email: "",
				student_number: null,
				student_phone: null,
				student_bio: "--No info...",
				student_img: "",
				student_active: true,
			};

			try {
				const response = await fetch("/auth/student/dashboard", {
					method: "GET",
					headers: { token: localStorage.token },
				});
				const parseRes = await response.json();
				if (response.status !== 200) {
					alert(parseRes);
				} else {
					const student = parseRes[0];
					studentInfo.student_name = student.student_name;
					studentInfo.student_email = student.student_email;
				}
				setDataChange(true);
			} catch (error) {
				console.error(error.message);
			}

			try {
				const res = await fetch(`/api/students_profile/${id}`, {
					method: "GET",
					headers: { "Content-Type": "application/json" },
				});
				const body = await res.json();
				if (res.status !== 200) {
					//alert(body.message);
				} else {
					studentInfo.student_number = body.student_number;
					studentInfo.student_phone = body.student_phone;
					studentInfo.student_bio = body.student_bio;
					studentInfo.student_img = body.student_img;
					studentInfo.student_active = body.student_active;
				}
				setDataChange(true);
			} catch (error) {
				console.error(error.message);
			}
			setProfileInfo(studentInfo);
			setInfo(studentInfo);
			localStorage.setItem("profile", JSON.stringify(studentInfo));
		};
		getProfileInfo();
		setLoading(false);
	}, []);

	const handleProjectView = (event) => {
		event.preventDefault();
		/*const projectTitle = event.currentTarget.getAttribute("data-id");
		//alert(projectTitle);
		history.push({
			pathname: "/viewproject",
			state: {
				project_id: projectTitle,
			},
		});*/
	};

	return (
		<>
			<NavContainer setPage={setPage} />
			{loading ? (
				<Loading />
			) : error.state ? (
				<Error message={error?.message} />
			) : (
				<MainContainer>
					<SubContainer>
						<MediaContainer>
							<Box
								sx={{
									boxShadow: 3,
									padding: "1rem",
									width: "100%",
									display: "flex",
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<TopContainer>
									<PhotoContainer>
										<InitialsAvatar name={`${profileInfo?.student_name}`} />
									</PhotoContainer>
									<InfoContainer>
										<Info profileInfo={profileInfo} setPage={setPage} />
									</InfoContainer>
								</TopContainer>
							</Box>
						</MediaContainer>
						<BioContainer>
							<Box sx={{ boxShadow: 3, padding: "1rem" }}>
								<Bio bio={profileInfo?.student_bio} />
							</Box>
						</BioContainer>
					</SubContainer>
				</MainContainer>
			)}
		</>
	);
};

export default StudentProfile;

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	width: 100%;
	min-height: 90vh;
	padding-bottom: 1rem;
	margin-top: 0.5rem;

	overflow-x: hidden;

	@media (min-width: 768px) {
		flex-direction: row;
		margin-left: 1rem;
		margin-right: 1rem;
		align-items: flex-start;
	}
`;
const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-top: 2rem;
	@media (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
		width: 75%;
	}
`;
const MediaContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;

	@media (min-width: 768px) {
		flex-direction: row;
		margin-left: 1rem;
		margin-right: 1rem;
		width: 60%;
	}
`;

const TopContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	@media (min-width: 768px) {
		margin-left: 1rem;
		margin-right: 1rem;
	}
`;
const PhotoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	@media (min-width: 768px) {
		margin-left: 1rem;
		margin-right: 1rem;
	}
`;
const BioContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 90%;
	margin-top: 1rem;
	@media (min-width: 768px) {
		width: 40%;
		margin-right: 1rem;
		margin-top: 0px;
	}
`;

const Info = ({ profileInfo, setPage }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "1rem",
			}}
		>
			<Typography gutterBottom variant="h4" sx={{ textAlign: "center" }}>
				{`${pascalCase(profileInfo?.student_name)}`}
			</Typography>
			<Typography
				variant="body1"
				sx={{ textAlign: "center" }}
			>{`Email:  ${profileInfo.student_email}`}</Typography>
			<Typography
				variant="body1"
				sx={{ textAlign: "center" }}
			>{`Student Number:  ${profileInfo.student_number}`}</Typography>
			<Typography
				variant="body1"
				sx={{ textAlign: "center" }}
			>{`Phone Number:  0${profileInfo.student_phone}`}</Typography>
			<Typography
				variant="body1"
				sx={{ textAlign: "center" }}
			>{`Account Status: ${
				profileInfo.student_active === true ? "Active" : " Suspended"
			}`}</Typography>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					padding: "1rem",
					width: "100%",
				}}
			>
				<UploadButton />
				<Button
					variant="outlined"
					startIcon={<EditIcon />}
					sx={{
						textTransform: "none",
						marginBottom: "0.7rem",
					}}
					onClick={() => setPage("edit_profile")}
				>
					Edit profile info
				</Button>
				<Button
					variant="outlined"
					startIcon={<SettingsIcon />}
					sx={{
						textTransform: "none",
					}}
					onClick={() => setPage("account_settings")}
				>
					Account Settings
				</Button>
			</Box>
		</Box>
	);
};

const Bio = ({ bio }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Typography variant="h4">Biography</Typography>
			<Divider
				orientation="horizontal"
				flexItem
				width="100%"
				border-color="primary.grey"
				sx={{ marginBottom: "1rem", marginTop: "1rem" }}
			/>
			<Typography
				variant="body1"
				sx={{
					width: "70%",
					marginTop: "1rem",
					textAlign: "center",
				}}
			>
				{bio}
			</Typography>
		</Box>
	);
};

const InitialsAvatar = ({ name }) => {
	const arr = name?.trim().split(" ");
	let string = "";
	for (let word of arr) {
		string += word?.substring(0, 1);
	}
	return (
		<Box
			sx={{
				bgcolor: "primary.main",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "10rem",
				width: "10rem",
				borderRadius: "50%",
				marginBottom: "1rem",
			}}
		>
			<Typography sx={{ fontSize: "5rem", color: "primary.light" }}>
				{string}
			</Typography>
		</Box>
	);
};

const UploadButton = () => {
	return (
		<Box
			sx={{
				alignItems: "center",
				display: "flex",
				justifyContent: "center",
				marginBottom: "0.7rem",
			}}
		>
			<Box
				accept="image/*"
				id="contained-button-file"
				multiple
				type="file"
				name="image"
				sx={{ display: "none" }}
			>
				{" "}
			</Box>
			<Button
				variant="outlined"
				sx={{ textTransform: "none" }}
				component="span"
			>
				<AddAPhotoIcon sx={{ marginRight: "0.5rem" }} /> Upload photo
			</Button>
		</Box>
	);
};

const ProjectTile = ({ title, handleProjectView, projects, projectsId }) => {
	return (
		<Box
			sx={{
				boxShadow: 3,
				marginBottom: "1rem",
				padding: "0.5rem",
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Typography>{title}</Typography>
			<ViewButton
				data-id={projectsId[projects?.indexOf(title)]}
				onClick={handleProjectView}
			>
				<Typography variant="body2" sx={{ marginRight: "0.4rem" }}>
					View
				</Typography>
				<PreviewIcon />
			</ViewButton>
		</Box>
	);
};

const ViewButton = styled.div`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }}`;

const NavContainer = ({ setPage }) => {
	return (
		<Box sx={{ marginTop: "1.2rem", marginLeft: "1rem" }}>
			<Button
				variant="contained"
				sx={{ textTransform: "none" }}
				onClick={() => setPage("")}
			>
				<BackIcon />
				<Typography sx={{ marginLeft: "0.3rem" }}>Back to Dashboard</Typography>
			</Button>
		</Box>
	);
};
