import * as React from "react";
import styled from "styled-components";
import { flexbox } from "@mui/system";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Drawer,
	Link,
	MenuItem,
	Stack,
	Divider,
	Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AboutIcon from "@mui/icons-material/Info";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PortalIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LogInButton from "./header/LogInButton";
import NavLogo from "./logo.png";
//import theme from '../themes/theme';
import HEADERS_DATA from "../assets/data/headers_data";

function Header(props) {
	let history = useHistory();
	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};

		setResponsiveness();

		window.addEventListener("resize", () => setResponsiveness());

		return () => {
			window.removeEventListener("resize", () => setResponsiveness());
		};
	}, []);

	const displayDesktop = () => {
		return (
			<Toolbar
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					maxWidth: "100%",
				}}
			>
				<LogoImage />
				<PageTitle />
				<DesktopMenuItems headers={props.headers} />
				<MainMenuIcons
					{...props}
					setAuth={props.setAuth}
					isAuthenticated={props.isAuthenticated}
					changeHeaders={props.changeHeaders}
				/>
			</Toolbar>
		);
	};

	const DesktopMenuItems = ({ headers }) => {
		let DISPLAY_DATA = headers?.length > 0 ? headers : HEADERS_DATA.home;

		return (
			<Stack
				spacing={2}
				direction={{ xs: "column", sm: "row" }}
				sx={{
					marginLeft: "1rem",
					marginRight: "1rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					textAlign: "center",
				}}
				divider={
					<Divider
						orientation="vertical"
						flexItem
						border-color="primary.grey"
					/>
				}
			>
				{DISPLAY_DATA?.map(({ label, href }) => (
					<Box key={label}>
						<Button
							style={{ textTransform: "none" }}
							{...{
								key: label,
								color: "inherit",
								to: href,
								component: RouterLink,
							}}
						>
							{label}
						</Button>
					</Box>
				))}
			</Stack>
		);
	};

	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));

		return (
			<Toolbar
				sx={{
					display: flexbox,
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<IconButton
						{...{
							edge: "start",
							color: "inherit",
							"aria-label": "menu",
							"aria-haspopup": "true",
							onClick: handleDrawerOpen,
						}}
					>
						<MenuIcon />
					</IconButton>

					<Drawer
						{...{
							anchor: "left",
							open: drawerOpen,
							onClose: handleDrawerClose,
						}}
					>
						<MobileMenuItems headers={props.headers} />
					</Drawer>

					<LogoImage />
				</Box>
				<MainMenuIcons
					setAuth={props.setAuth}
					isAuthenticated={props.isAuthenticated}
					changeHeaders={props.changeHeaders}
				/>
			</Toolbar>
		);
	};

	const MainMenuIcons = (props) => {
		return (
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<LogInButton
					{...props}
					setAuth={props.setAuth}
					changeHeaders={props.changeHeaders}
					isAuthenticated={props.isAuthenticated}
				/>
			</Box>
		);
	};

	const MobileMenuItems = ({ headers }) => {
		let DISPLAY_DATA = headers?.length > 0 ? headers : HEADERS_DATA.home;
		return (
			<Stack sx={{ marginTop: "1rem" }}>
				<Typography
					sx={{
						marginRight: "1rem",
						marginLeft: "1rem",
						fontWeight: 800,
						textDecoration: "underline",
						color: "primary.main",
					}}
				>
					Menu
				</Typography>
				{DISPLAY_DATA?.map(({ label, href, id }) => (
					<Box key={label}>
						<Link
							{...{
								component: RouterLink,
								to: href,
								color: "inherit",
								style: { textDecoration: "none", autoCapitalize: "none" },
								key: label,
							}}
						>
							<MenuItem
								sx={{
									color: "primary.main",
									display: "flex",
									flexDirection: "row",
								}}
							>
								<IconButton
									edge="start"
									color="inherit"
									aria-label="menu"
									sx={{ mr: "0.5rem" }}
								>
									<GetMenuIcon id={id} />
								</IconButton>
								<Typography>{label}</Typography>
							</MenuItem>
						</Link>
					</Box>
				))}
			</Stack>
		);
	};

	const GetMenuIcon = ({ id }) => {
		switch (id) {
			case 1:
				return (
					<Box
						component="img"
						src="/images/navbar/projects.png"
						sx={{ height: "1.2rem" }}
						alt="projects"
					></Box>
				);
			case 2:
				return (
					<Box
						component="img"
						sx={{ height: "1.2rem" }}
						src="/images/navbar/news.png"
						alt="news"
					></Box>
				);
			case 3:
				return (
					<Box
						component="img"
						sx={{ height: "1.2rem" }}
						src="/images/navbar/events.png"
						alt="events"
					></Box>
				);
			case 4:
				return (
					<Box
						component="img"
						sx={{ height: "1.3rem" }}
						src="/images/navbar/sign_up.png"
						alt="register"
					></Box>
				);
			case 5:
				return <AboutIcon />;
			case 6:
				return <AccountCircle />;
			case 7:
				return (
					<Box
						component="img"
						sx={{ height: "1.3rem" }}
						src="/images/navbar/trophy.png"
						alt="competitions"
					></Box>
				);
			case 8:
				return (
					<Box
						component="img"
						sx={{ height: "1.3rem" }}
						src="/images/navbar/dashboard.png"
						alt="dashboard"
					></Box>
				);
			case 9:
				return <PortalIcon />;
			case 10:
				return <SettingsIcon />;
			default:
				return <MenuIcon />;
		}
	};

	const PageTitle = () => {
		return (
			<Box sx={{ marginLeft: "1rem", marginRight: "1rem", flexGrow: 1 }}>
				<Typography sx={{ textAlign: "center", fontSize: "1rem" }}>
					{"Advancing Engaged Citizenship"}
				</Typography>
			</Box>
		);
	};

	const LogoImage = () => {
		return (
			<Box
				sx={{
					margin: "1rem",
					padding: "0.2rem",
				}}
				onClick={() => history.push("/")}
			>
				<img
					src={NavLogo}
					alt="Website Logo"
					height="30rem"
					width="auto"
				/>
			</Box>
		);
	};

	return (
		<header>
			<Nav>
				<AppBar sx={{ position: "fixed", top: "0", width: "100%" }}>
					{mobileView ? displayMobile() : displayDesktop()}
				</AppBar>
			</Nav>
			<Offset />
		</header>
	);
}

export default Header;

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	max-width: 100wh;
	padding: 0 36px;
`;

const Offset = styled.div`
	min-height: 4rem;
`;
