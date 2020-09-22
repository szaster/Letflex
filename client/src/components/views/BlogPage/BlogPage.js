import React from "react";
import { Header, Comment, Form, Button, Segment } from "semantic-ui-react";
import MainNavbar from "../NavBar/MainNavbar";

function Blog() {
  var comments = [
    {
      author: "lIZ",
      date: "today at 5pm",
      text: "my comments",
    },
  ];
  return (
    <div style={{ padding: "5rem" }}>
      <MainNavbar />
      {/* <Grid>
        <Grid.Row> */}
      <Segment>
        <Header> Top 10 Movies</Header>

        <p>
          Lorem ipsum dolor sit amet, cu est euripidis inciderint. Mel amet
          veniam at. Qui ei prompta ceteros, inermis veritus principes id has.
          Malorum intellegam te pro, ne has mundi consequuntur, ei pri quod
          augue praesent. Pri id posse semper intellegebat. Usu alia autem
          iracundia id, et vel odio primis sadipscing. Sit porro erant no, id
          sea dicam constituam. Has soluta postea dolorem ea, affert putent ne
          sed. Lorem abhorreant vel at. At vel sale habemus pertinax, sint
          ubique quidam eos no, legere appetere has ex. Ubique inermis dolorem
          cu per, mel elitr eloquentiam an, ne qui affert partem disputando. In
          accusamus concludaturque eum, vim id affert adipisci neglegentur.
          Nonumy copiosae dissentiunt nam et. Sea ei posse nullam erroribus, ut
          vix mundi possit. Ut ius quidam iracundia, eam te utinam omnium, ea
          sed inani definiebas. Omnes nostrud an has, verear delenit corpora te
          usu. Et eos harum sententiae. Prompta facilisis pro id. An has audire
          conclusionemque, sed dolorum delectus ne, vix eu nusquam molestie.
          Harum veritus legendos ex quo, oratio legere vituperata vis cu. In
          alii dolor sapientem eos, cu vix pericula sadipscing. Ius civibus
          accommodare delicatissimi te, laudem splendide eam cu. Enim blandit
          euripidis no eos, dolores delicata in ius, an mea suas augue
          patrioque. Eu per hinc scaevola periculis, modo deleniti instructior
          no eos, id lorem dicit l
        </p>

        <Comment.Group>
          <Header as="h3" dividing>
            Comments
          </Header>
          {comments.map((comment) => {
            return (
              <Comment>
                <Comment.Avatar src="/images/avatar/small/joe.jpg" />
                <Comment.Content>
                  <Comment.Author as="a">{comment.author}</Comment.Author>
                  <Comment.Metadata>
                    <div>{comment.date}</div>
                  </Comment.Metadata>
                  <Comment.Text>{comment.text}</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            );
          })}

          <Form reply>
            <Form.TextArea />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </Segment>
      {/* </Grid.Row>
      </Grid> */}
    </div>
  );
}

export default Blog;
