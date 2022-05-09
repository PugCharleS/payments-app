import { Component } from "react";
import { Badge, Button, Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        name: "",
        projectDetails: "",
        amountReceivable: "",
        startDate: "",
        endDate: "",
      },
    };
  }

  render() {
    return (
      <Container className="container-sec">
        <Card className="text-center">
          <Card.Header>
            <Badge bg="light" text="dark">
              <p className="title">Project Form</p>
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
                <Form.Label>Project Details</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Project Details"
                  name="projectDetails"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Amount Receivable</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Amount Receivable"
                  name="amountReceivable"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter Start Date"
                  name="startDate"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter End Date"
                  name="endDate"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>

              <Button variant="primary" onClick={this.onProjectSubmit}>
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

  onProjectSubmit = () => {
    console.log(this.state.project);
    this.props.addProject(this.state.project);
  };

  onChangeHandler = (event) => {
    this.setState({
      project: {
        ...this.state.project,
        [event.target.name]: event.target.value,
      },
    });
  };
}
