import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import theme from "./themes/theme";

import App from "./App";

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SnackbarProvider maxSnack={4}>
				<App />
			</SnackbarProvider>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
