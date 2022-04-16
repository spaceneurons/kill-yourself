import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Container } from "@mui/material";
import ErrorPic from "./error.png";

const Error = ({ message }) => {
  return (
    <Container
      sx={{
				backgroundColor: "d4dbdd",
        maxWidth: "100%",
        minHeight: "60vh",
        paddingBottom: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component='img'
          src={ErrorPic}
          alt='error'
          sx={{ height: "10rem" }}
        ></Box>
        <Typography sx={{ marginTop: "2rem", fontSize: "1.5rem" }}>
          {message || "Fatal error! Could not load content from server!"}
        </Typography>
      </Box>
    </Container>
  );
};

export default Error;
