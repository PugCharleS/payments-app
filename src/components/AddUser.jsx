import { Component } from "react";
import { Badge, Button, Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        username: "",
        password: "",
        accountType: "",
        securityQuestion: "",
        securityAnswer: "",
      },
    };
  }

  render() {
    return (
      <Container className="container-sec">
        <Card className="text-center">
          <Card.Header>
            <Badge bg="light" text="dark">
              <p className="title">User Form</p>
            </Badge>{" "}
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="username"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Account Type</Form.Label>
                <Form.Select name="accountType" onChange={this.onChangeHandler}>
                  <option value="">---select account type---</option>
                  <option value={"savings"}>savings</option>
                  <option value={"business"}>business</option>
                </Form.Select>
                {/* <Form.Control type="text" placeholder="business or savings" name="accountType" onChange={this.onChangeHandler}  /> */}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Security Question</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Write down your question"
                  name="securityQuestion"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Security Answer</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Write down your answer"
                  name="securityAnswer"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>

              <Button variant="primary" onClick={this.onUserSubmit}>
                Submit
              </Button>
            </Form>
          </Card.Body>
          <Card.Footer className="text-muted">
            @Developer by PugCharl3S
          </Card.Footer>
        </Card>
      </Container>
    );
  }

  onUserSubmit = () => {
    this.props.addUser(this.state.user);
  };

  onChangeHandler = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };
}
