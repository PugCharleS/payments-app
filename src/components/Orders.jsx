import { Component } from "react";
import { Badge, Container, Table } from "react-bootstrap";

export class Orders extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orders,
      vendors: this.props.vendors,
      projects: this.props.projects,
    }
  }

  render() {
    return (
      <div className="body">
        <Container className="container-sec">
          <Badge bg="light" text="dark" >
            <p className="title">Order Summary</p>
          </Badge>{' '}
          <br/><br/><br/>
          <Table striped bordered hover size="sm" variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Order Details</th>
                <th>Expected Date Of Fulfillment</th>
                <th>Amount</th>
                <th>Vendor Name</th>
                <th>Project Name</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.orders.map((order) => {
                  return(
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.orderDetails}</td>
                      <td>{order.expectedDateOfFulfillment}</td>
                      <td>{order.amount}</td>
                      <td>{order.vendor.name}</td>
                      <td>{order.project.name}</td>
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
