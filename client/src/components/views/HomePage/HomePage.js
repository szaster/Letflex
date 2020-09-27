import React from "react";
import "./HomePage.css";
import { Container, Grid } from "semantic-ui-react";
import GoogleAuth from "../GoogleAuth/index.js";
import IntroNavbar from "../NavBar/IntroNavbar";

function HomePage() {
  return (
    <div>
      <IntroNavbar />
      <Grid centered>
        <Container fluid className="bgHome">
          <GoogleAuth />
        </Container>
      </Grid>
    </div>
  );
}

export default HomePage;
