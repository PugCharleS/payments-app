import { Component } from "react";
import { Badge, Button, Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        orderDetails: "",
        expectedDateOfFulfillment: "",
        amount: "",
      },
    };
  }

  render() {
    return (
      <Container className="container-sec">
        <Card className="text-center">
          <Card.Header>
            <Badge bg="light" text="dark">
              <p className="title">Order Form</p>
            </Badge>{" "}
          </Card.Header>
          <Card.Body>
            <Form id="form">
              <Form.Group className="mb-3" id="form-group">
                <Form.Label>Vendor</Form.Label>
                <Form.Select name="vendor" id="vendor">
                  <option>---select vendor---</option>
                  {this.props.vendors.map((vendor) => {
                    return (
                      <option key={vendor.id} value={vendor.id}>
                        {vendor.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Order Details</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Order Details"
                  name="orderDetails"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3" id="form-group">
                <Form.Label>Projects</Form.Label>
                <Form.Select name="project" id="project">
                  <option>---select project---</option>
                  {this.props.projects.map((project) => {
                    return (
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Expected Date Of Fulfillment</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter Expected Date Of Fulfillment"
                  name="expectedDateOfFulfillment"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Amount"
                  name="amount"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>
              <Button variant="primary" onClick={this.onOrderSubmit}>
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

  onOrderSubmit = () => {
    let vid = document.getElementById("vendor").value;
    let pid = document.getElementById("project").value;
    this.props.addOrder(this.state.order, Number(vid), Number(pid));
  };

  onChangeHandler = (event) => {
    this.setState({
      order: {
        ...this.state.order,
        [event.target.name]: event.target.value,
      },
    });
  };
}
