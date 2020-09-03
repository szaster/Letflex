import React from "react";
import { Card, Grid } from "semantic-ui-react";

function About() {
  return (
    <div className="jumbotron">
      <Grid centered padded>
        <Grid.Row>
          <Card>
            <Card.Header>Carina Reyes</Card.Header>
            <Card.Content>placeholder text</Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default About;
