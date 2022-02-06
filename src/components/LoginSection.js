import React from "react";
import Container from "@mui/material/Container";
import { Box,Button, TextField, Grid, Typography } from "@mui/material";
const LoginSection = () => {
  return (
    <Container >
      <Grid container>
        <Grid item lg={6} md={6} xs={12}>
          <Typography>Hi, I am Ravi Kishan dsds fsd sfsaf sdf</Typography>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Typography>Sign up</Typography>
          <Box component="form">
          <TextField
          label="Name"
          type="text"
          autoComplete="Ravi"
          size="sm"
        />
        <TextField
          label="Email"
          type="email"
          size="sm"

        />
        <TextField
        label="Mobile"
        type="text"
        size="sm"

      />
      <Button>Sign up</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginSection;
