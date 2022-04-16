import { useState } from "react";
import { Button, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Fade from "@mui/material/Fade";
import { withRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { withSnackbar } from "notistack";
import HEADERS_DATA from "../../assets/data/headers_data";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

function LogInButton(props) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		if (props.isAuthenticated) {
			props.enqueueSnackbar("You have been logged out!", { variant: "error" });
			localStorage.removeItem("token");
			props.setAuth(false);
			props.changeHeaders(HEADERS_DATA.home);
			props.history.push("/");
		} else {
			setAnchorEl(event.currentTarget);
		}
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box>
			<Box
				sx={{
					bgcolor: "primary.light",
					marginRight: "1rem",
					marginLeft: "0px",
					borderRadius: "4px",
					display: "flex",
					flexDirection: "row",
					padding: "0.2rem",
					justifyContent: "center",
					alignItems: "center",
					color: "text.secondary",
				}}
			>
				<Button
					id="fade-button"
					aria-controls="fade-menu"
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					onClick={handleClick}
					style={{
						textTransform: "none",
					}}
				>
					{props.isAuthenticated ? <LogoutIcon /> : <LoginIcon />}
					{props.isAuthenticated ? "Log out" : "Log In"}
				</Button>
			</Box>
			<Menu
				id="fade-menu"
				MenuListProps={{
					"aria-labelledby": "fade-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				<MenuItem
					onClick={() => {
						props.history.push("/student/login");
						handleClose();
					}}
					sx={{ color: "primary.main" }}
				>
					<Avatar
						sx={{
							color: "primary.main",
							bgcolor: "primary.light",
							marginRight: "0.3rem",
						}}
					/>
					Student
				</MenuItem>
				<MenuItem
					onClick={() => {
						props.history.push("/mentor/login");
						handleClose();
					}}
					sx={{ color: "primary.main" }}
				>
					<Avatar
						sx={{
							color: "primary.main",
							bgcolor: "primary.light",
							marginRight: "0.3rem",
						}}
					/>
					Mentor
				</MenuItem>
				<MenuItem
					onClick={() => {
						props.history.push("/admin/login");
						handleClose();
					}}
					sx={{ color: "primary.main" }}
				>
					<Avatar
						sx={{
							color: "primary.main",
							bgcolor: "primary.light",
							marginRight: "0.3rem",
						}}
					/>
					<Typography>Admin</Typography>
				</MenuItem>
			</Menu>
		</Box>
	);
}

export default withRouter(withSnackbar(LogInButton));
