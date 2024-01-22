import { Box, Grid } from "@mui/material";
import React from "react";

const CustomPackage = () => {
  return (
    <Box
      sx={{
        margin: "20px 0 ",
      }}
    >
      Customize your event using the sections below. If there is anything you
      still need that you don't see here, tell us in the notes section on the
      next step.
      <h3>Add Product</h3>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <div>xs=2</div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomPackage;
