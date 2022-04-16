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
								Программная поддержка оценки и мониторинга финансовых показателей стартапа
							</Typography>
						</Grid>
						<Grid item xs={12} md={8}>
							<Box
								sx={{
									padding: "1rem",
								}}
							>
								<WrappingText>
								Платформа, где клиенты смогут вносить финансовые показатели
								своего стартапа, а финансовые аналитики, в совю очередь,
								давать оценку данному проекту. Клиент сможет получить фидбек от
								финансового аналитика, а так же..........
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
