import { useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/home/Home";
import StudentSignUp from "./pages/register/StudentSignUp";
import StudentLogin from "./pages/login/StudentLogin";
import MentorLogin from "./pages/login/MentorLogin";
import AdminLogin from "./pages/login/AdminLogin";

import StudentDashboard from "./pages/dashboards/StudentDashboard";
import MentorDashboard from "./pages/dashboards/MentorDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import { toast } from "react-toastify";

import Header from "./components/Header";
import HEADERS_DATA from "./assets/data/headers_data";

toast.configure();

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};

	const [headers, setHeaders] = useState(HEADERS_DATA.home);
	const changeHeaders = (currentHeaders) => {
		setHeaders(currentHeaders);
	};

	return (
		<div className="main-app p-5">
			<Router>
				<Header
					headers={headers}
					setAuth={setAuth}
					isAuthenticated={isAuthenticated}
					changeHeaders={changeHeaders}
				/>
				<Switch>
					<Route
						exact
						path="/student/sign-up"
						render={(props) =>
							!isAuthenticated ? (
								<StudentSignUp {...props} setAuth={setAuth} />
							) : (
								<Redirect to="/student/login" />
							)
						}
					/>
					<Route
						exact
						path="/student/login"
						render={(props) =>
							!isAuthenticated ? (
								<StudentLogin
									{...props}
									setAuth={setAuth}
									changeHeaders={changeHeaders}
								/>
							) : (
								<Redirect to="/student/dashboard" />
							)
						}
					/>
					<Route
						exact
						path="/mentor/login"
						render={(props) =>
							!isAuthenticated ? (
								<MentorLogin
									{...props}
									setAuth={setAuth}
									changeHeaders={changeHeaders}
								/>
							) : (
								<Redirect to="/mentor/dashboard" />
							)
						}
					/>
					<Route
						exact
						path="/admin/login"
						render={(props) =>
							!isAuthenticated ? (
								<AdminLogin
									{...props}
									setAuth={setAuth}
									changeHeaders={changeHeaders}
								/>
							) : (
								<Redirect to="/admin/dashboard" />
							)
						}
					/>
					<Route
						exact
						path="/student/dashboard"
						render={(props) =>
							isAuthenticated ? (
								<StudentDashboard
									{...props}
									setAuth={setAuth}
									changeHeaders={changeHeaders}
								/>
							) : (
								<Redirect to="/student/login" />
							)
						}
					/>
					<Route
						exact
						path="/mentor/dashboard"
						render={(props) =>
							isAuthenticated ? (
								<MentorDashboard {...props} setAuth={setAuth} />
							) : (
								<Redirect to="/mentor/login" />
							)
						}
					/>
					<Route
						exact
						path="/admin/dashboard"
						render={(props) =>
							isAuthenticated ? (
								<AdminDashboard {...props} setAuth={setAuth} />
							) : (
								<Redirect to="/admin/login" />
							)
						}
					/>
					<Route path="/*" render={(props) => <Home {...props} />} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
