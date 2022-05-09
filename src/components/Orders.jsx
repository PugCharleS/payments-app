import { Component } from "react";
import { Badge, Card, Container, Table } from "react-bootstrap";

export class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orders,
      vendors: this.props.vendors,
      projects: this.props.projects,
    };
  }

  render() {
    return (
      <div className="body">
        <Container className="container-sec">
          <Card className="text-center">
            <Card.Header>
              <Badge bg="light" text="dark">
                <p className="title">Order Summary</p>
              </Badge>{" "}
            </Card.Header>
            <Card.Body>
              <br />
              <Table striped bordered hover size="" variant="light">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Order Details</th>
                    <th>Expected Date Of Fulfillment</th>
                    <th>Amount</th>
                    <th>Vendor Name</th>
                    <th>Project Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.orders.map((order) => {
                    return (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.orderDetails}</td>
                        <td>{order.expectedDateOfFulfillment}</td>
                        <td>{order.amount}</td>
                        <td>{order.vendor.name}</td>
                        <td>{order.project.name}</td>
                        <td>{order.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer className="text-muted">
              @Developer by PugCharl3S
            </Card.Footer>
          </Card>
        </Container>
      </div>
    );
  }
}
