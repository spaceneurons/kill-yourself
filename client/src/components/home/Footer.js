import * as React from "react";
import { Box, Typography, Link } from "@mui/material";
import styled from "styled-components";
import theme from "../../themes/theme";

function Copyright() {
  return (
		<Typography variant="body2">
			{"Copyright © "}
			<Link color="inherit" href="https://github.com/spaceneurons/kill-yourself/">
				Margarita Rusheva
			</Link>
			{` ${new Date().getFullYear()}.`}
		</Typography>
	);
}

const Footer = () => {
  return (
    <Container>

      <FlexItem>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant='h5'>Financial assessment of startups</Typography>
          <Typography variant='body2'>
            220045, Belarus, Minsk
          </Typography>
          <Copyright />
        </Box>
      </FlexItem>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: row};
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${theme.palette.primary.white};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FlexItem = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  flex-grow: 1;
`;

const ImageContainer = styled.div`
  width: 40%;
`;

const Image = styled.img``;
