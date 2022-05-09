import { Component } from "react";
import { Badge, Card, Container, Table } from "react-bootstrap";

export class Vendors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: this.props.vendors,
    };
  }

  render() {
    return (
      <div className="body">
        <Container className="container-sec">
          <Card className="text-center">
            <Card.Header>
              <Badge bg="light" text="dark">
                <p className="title">Active Vendors</p>
              </Badge>{" "}
            </Card.Header>
            <Card.Body>
              <br />
              <Table striped bordered hover size="" variant="light">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>City</th>
                    <th>Specs</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.vendors.map((vendor) => {
                    return (
                      <tr key={vendor.id}>
                        <td>{vendor.id}</td>
                        <td>{vendor.name}</td>
                        <td>{vendor.email}</td>
                        <td>{vendor.contact}</td>
                        <td>{vendor.city}</td>
                        <td>{vendor.specs}</td>
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
