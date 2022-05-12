import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	type: "light",
	palette: {
		primary: {
			main: "#60223b",
			light_maroon: "#8b2943",
			brown: "#963d43",
			grey: "#8c979a",
			yellow: "#b9b013",
			green: "#01484e",
			light: "#fff",
			error: "#f00",
			contrastText: "#fff",
			frosting_cream: "#fffbee",
		},
		secondary: {
			main: "#9c27b0",
			contrastText: "#fff",
		},
		text: {
			primary: "#60223b",
			secondary: "#60223b",
		},
		background: {
			paper: "#fff",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			mobile: 700,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
});
export default theme;
