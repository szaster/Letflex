import React from "react";
import "./HomePage.css";
import { Container, Grid, Menu } from "semantic-ui-react";
import GoogleAuth from "../GoogleAuth/index.js";
import RightMenu from "../NavBar/Sections/RightMenu";

function HomePage() {
  return (
    <div>
      <RightMenu />
      <Grid centered>
        <Container className="bgHome">
          <GoogleAuth />
        </Container>
      </Grid>
    </div>
  );
}

export default HomePage;
