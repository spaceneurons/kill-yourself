import {
	Box,
	Stack,
	Typography,
	Grid,
	Container,
	Button,
} from "@mui/material";

import styled from "styled-components";
import { useHistory } from "react-router-dom";

import TouchAppIcon from "@mui/icons-material/TouchApp";
import BcgImage from "./bg1.png";

const Content = () => {
	let history = useHistory();

	return (
		<Container
			sx={{
				backgroundImage: `url(${BcgImage})`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				maxWidth: "100%",
				minHeight: "60vh",
				paddingBottom: "1rem",

			}}
		>
			<Stack direction="column" sx={{ padding: "2rem" }}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<Typography
								sx={{
									fontWeight: "600",
									fontSize: "2.4rem",
									textAlign: "center",
								}}
							>
								Advancing Engaged Citizenship
							</Typography>
						</Grid>
						<Grid item xs={12} md={8}>
							<Box
								sx={{
									padding: "1rem",
								}}
							>
								<WrappingText>
									A platform where students can journey with a team of mentors
									to assist with the innovation of project ideas, during the
									conceptualization and implementation phase. It allows students
									to complete a standard template with prompts to answer key
									questions. It also allows university staff to provide feedback
									and mentorship via the platform.
									<WrappedImage
										onClick={() => history.push("/student/sign-up")}
									>
										<TouchAppIcon fontSize="large" />
										<Button variant="outlined">Sign up</Button>
									</WrappedImage>
								</WrappingText>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Stack>
		</Container>
	);
};

export default Content;

const WrappingText = styled.div`
	width: 100%;
`;
const WrappedImage = styled.div`
	cursor: pointer;
	img {
		float: right;
		margin: 1rem;
		width: 150px;
	}
`;
