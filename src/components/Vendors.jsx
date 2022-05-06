import { Component } from "react";
import { Badge, Container, Table } from "react-bootstrap";

export class Vendors extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      vendors: this.props.vendors
    }
  }

  render() {
    return (
      <div className="body">
        <Container className="container-sec">
          <Badge bg="light" text="dark" >
            <p className="title">Active vendors</p>
          </Badge>{' '}
          <br/><br/><br/>
          <Table striped bordered hover size="sm" variant="dark">
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
              {
                this.state.vendors.map((vendor) => {
                  return(
                    <tr key={vendor.id}>
                      <td>{vendor.id}</td>
                      <td>{vendor.name}</td>
                      <td>{vendor.email}</td>
                      <td>{vendor.contact}</td>
                      <td>{vendor.city}</td>
                      <td>{vendor.specs}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
}
