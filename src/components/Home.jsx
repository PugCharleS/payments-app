import moment from "moment";
import { Component } from "react";
import { Badge, Card, Container, Table } from "react-bootstrap";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";
import "../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orders,
      date: moment().format("YYYY-MM-DD"),
    };
  }

  sumPayments() {
    let totals = [0, 0];
    for (const order of this.state.orders) {
      if (order.payment.status === "UNPAID") totals[0] += order.amount;
      if (order.payment.status === "PAID") totals[1] += order.amount;
    }
    return totals;
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
                    <th>Total Orders</th>
                    <th>Total Payment Due</th>
                    <th>Total Payment Made</th>
                  </tr>
                </thead>
                <tbody>
                  <td>{this.state.orders.length}</td>
                  <td>{this.sumPayments()[0]}</td>
                  <td>{this.sumPayments()[1]}</td>
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
