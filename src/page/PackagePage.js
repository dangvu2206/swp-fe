import React from "react";
import LayoutWeb from "../layout/LayoutWeb";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import "./../style/style.css";
import { discountImg } from "../asset";

const PackagePage = () => {
  return (
    <LayoutWeb>
      <Box
        sx={{
          background: "#292929",
          paddingBottom: "20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            margin: "0",
            color: "white",
            fontSize: "60px",
            fontWeight: "bold",
            paddingTop: "20px",
            paddingBottom: "60px",
          }}
        >
          PARTY PACKAGES
        </h1>

        <Container maxWidth="lg">
          <Grid container spacing={2} columns={16}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, background: "black", color: "white" }}>
                <CardMedia
                  sx={{ height: 189, background: "black" }}
                  image="https://picsum.photos/id/237/200/300"
                  title="green iguana"
                />
                <CardContent>
                  <div className="header_cart">
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ textAlign: "center", textTransform: "uppercase" }}
                    >
                      Lizard
                    </Typography>
                  </div>
                  <p className="price">
                    $649.99
                    <br />
                    <span className="details">
                      + GST for 10 participants
                      <br />
                      $54.99 per additional participant
                    </span>
                  </p>
                  <div>
                    <ul>
                      <li>Includes 10 kids admissions to Leisure Lagoon</li>
                      <li>
                        Includes up to 20 adult admissions to Leisure Lagoon
                      </li>
                      <li>Private party space for 90 minutes</li>
                      <li>
                        Unlimited Play time before &amp; after the party time
                      </li>
                      <li>
                        1000 E-tickets for the birthday child to redeem Prizes
                      </li>
                      <li>40 arcade credits for each child</li>
                      <li>1 bumper car ride for each child</li>
                      <li>1 Virtual box ride for each child</li>
                      <li>1 On-the-fly ropes course for each child</li>
                      <li>1 Grip socks for each child</li>
                      <li>Buddy shirt for the birthday child</li>
                      <li>Goodie bag for each child</li>
                      <li>Plates, cups, cutlery, napkins &amp; table cloth</li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src={discountImg}
                      alt="discounr"
                      width={"100%"}
                      height={114}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <Button
                      variant="contained"
                      sx={{
                        background: "red",
                        height: 57,
                      }}
                    >
                      Book now
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, background: "black", color: "white" }}>
                <CardMedia
                  sx={{ height: 189 }}
                  image="https://picsum.photos/id/237/200/300"
                  title="green iguana"
                />
                <CardContent>
                  <div className="header_cart">
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ textAlign: "center", textTransform: "uppercase" }}
                    >
                      Lizard
                    </Typography>
                  </div>
                  <p className="price">
                    $649.99
                    <br />
                    <span className="details">
                      + GST for 10 participants
                      <br />
                      $54.99 per additional participant
                    </span>
                  </p>
                  <div>
                    <ul>
                      <li>Includes 10 kids admissions to Leisure Lagoon</li>
                      <li>
                        Includes up to 20 adult admissions to Leisure Lagoon
                      </li>
                      <li>Private party space for 90 minutes</li>
                      <li>
                        Unlimited Play time before &amp; after the party time
                      </li>
                      <li>
                        1000 E-tickets for the birthday child to redeem Prizes
                      </li>
                      <li>40 arcade credits for each child</li>
                      <li>1 bumper car ride for each child</li>
                      <li>1 Virtual box ride for each child</li>
                      <li>1 On-the-fly ropes course for each child</li>
                      <li>1 Grip socks for each child</li>
                      <li>Buddy shirt for the birthday child</li>
                      <li>Goodie bag for each child</li>
                      <li>Plates, cups, cutlery, napkins &amp; table cloth</li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src={discountImg}
                      alt="discounr"
                      width={"100%"}
                      height={114}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <Button
                      variant="contained"
                      sx={{
                        background: "red",
                        height: 57,
                      }}
                    >
                      Book now
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, background: "black", color: "white" }}>
                <CardMedia
                  sx={{ height: 189 }}
                  image="https://picsum.photos/id/237/200/300"
                  title="green iguana"
                />
                <CardContent>
                  <div className="header_cart">
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ textAlign: "center", textTransform: "uppercase" }}
                    >
                      Lizard
                    </Typography>
                  </div>
                  <p className="price">
                    $649.99
                    <br />
                    <span className="details">
                      + GST for 10 participants
                      <br />
                      $54.99 per additional participant
                    </span>
                  </p>
                  <div>
                    <ul>
                      <li>Includes 10 kids admissions to Leisure Lagoon</li>
                      <li>
                        Includes up to 20 adult admissions to Leisure Lagoon
                      </li>
                      <li>Private party space for 90 minutes</li>
                      <li>
                        Unlimited Play time before &amp; after the party time
                      </li>
                      <li>
                        1000 E-tickets for the birthday child to redeem Prizes
                      </li>
                      <li>40 arcade credits for each child</li>
                      <li>1 bumper car ride for each child</li>
                      <li>1 Virtual box ride for each child</li>
                      <li>1 On-the-fly ropes course for each child</li>
                      <li>1 Grip socks for each child</li>
                      <li>Buddy shirt for the birthday child</li>
                      <li>Goodie bag for each child</li>
                      <li>Plates, cups, cutlery, napkins &amp; table cloth</li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src={discountImg}
                      alt="discounr"
                      width={"100%"}
                      height={114}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <Button
                      variant="contained"
                      sx={{
                        background: "red",
                        height: 57,
                      }}
                    >
                      Book now
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, background: "black", color: "white" }}>
                <CardMedia
                  sx={{ height: 189 }}
                  image="https://picsum.photos/id/237/200/300"
                  title="green iguana"
                />
                <CardContent>
                  <div className="header_cart">
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ textAlign: "center", textTransform: "uppercase" }}
                    >
                      Lizard
                    </Typography>
                  </div>
                  <p className="price">
                    $649.99
                    <br />
                    <span className="details">
                      + GST for 10 participants
                      <br />
                      $54.99 per additional participant
                    </span>
                  </p>
                  <div>
                    <ul>
                      <li>Includes 10 kids admissions to Leisure Lagoon</li>
                      <li>
                        Includes up to 20 adult admissions to Leisure Lagoon
                      </li>
                      <li>Private party space for 90 minutes</li>
                      <li>
                        Unlimited Play time before &amp; after the party time
                      </li>
                      <li>
                        1000 E-tickets for the birthday child to redeem Prizes
                      </li>
                      <li>40 arcade credits for each child</li>
                      <li>1 bumper car ride for each child</li>
                      <li>1 Virtual box ride for each child</li>
                      <li>1 On-the-fly ropes course for each child</li>
                      <li>1 Grip socks for each child</li>
                      <li>Buddy shirt for the birthday child</li>
                      <li>Goodie bag for each child</li>
                      <li>Plates, cups, cutlery, napkins &amp; table cloth</li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src={discountImg}
                      alt="discounr"
                      width={"100%"}
                      height={114}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <Button
                      variant="contained"
                      sx={{
                        background: "red",
                        height: 57,
                      }}
                    >
                      Book now
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </LayoutWeb>
  );
};

export default PackagePage;
