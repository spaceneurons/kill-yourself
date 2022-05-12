import { useState, useEffect } from "react";
import {
	Box,
	Stack,
	Typography,
	Grid,
	Divider,
	Container,
} from "@mui/material";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
	const [featuredProjects, setFeaturedProjects] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch("/api/featured_projects");
			const body = await res.json();
			if (res.status !== 200) {
				alert(body.message);
			} else {
				setFeaturedProjects(body);
				//alert(JSON.stringify(body));
			}
		};

		getData();
	}, []);

	return (
		<>
			{ featuredProjects.length > 0 ? (
				<Box sx={{ flexGrow: 1, marginTop: "3rem" }}>
					<Typography
						sx={{
							fontWeight: "600",
							fontSize: "2.4rem",
						}}
					>
						Featured Projects
					</Typography>
					<Divider
						orientation="horizontal"
						flexItem
						border-color="primary.grey"
					/>
					<Grid container spacing={2} sx={{ marginTop: "1.3rem" }}>
						{featuredProjects?.map((project, index) => (
							<Grid item xs={12} sm={6} md={4} key={`${project.name}-${index}`}>
								<ProjectCard project={project} />
							</Grid>
						))}
					</Grid>
				</Box> ) : (<Box></Box>)
			}
		</>
	);
};

export default FeaturedProjects;
