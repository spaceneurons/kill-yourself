//import { useState, useEffect } from "react";
import styled from "styled-components";
import { Divider } from "@mui/material";
import Content from "../../components/home/Content";
import Footer from "../../components/home/Footer";
//import Loading from "../../components/services/Loading";
//import theme from '../../themes/theme';

const Home = () => {

	return (
		<MainContainer>
			<Content />
			<Divider orientation="horizontal" flexItem border-color="primary.grey" />
			<Footer />
		</MainContainer>
	);
};

export default Home;

const MainContainer = styled.div`
	min-height: 90vh;
	margin-top: 1rem;
	overflow-x: hidden;

`;
