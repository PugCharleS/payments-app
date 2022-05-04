import moment from "moment";
import { Component } from "react";
import { Badge, Container, Table } from "react-bootstrap";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";
import '../../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          orders: this.props.orders,
          date: moment().format('YYYY-MM-DD'),
        }
    }

    sumPayments() {
        let totals = [0,0];
        for (const order of this.state.orders) {
            if (order.payment.status === 'UNPAID')
                totals[0] += order.amount
            if (order.payment.status === 'PAID')
                totals[1] += order.amount
        }
        return totals;
    }

    render() {
        return (
            <div className="body">
                <Container className="container-sec">
                <Badge bg="light" text="dark" >
                    <p className="title">Summary</p>
                </Badge>{' '}
                <br/><br/><br/>
                    <Table striped bordered hover size="sm" variant="dark">
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
                    <br/><br/><br/>
                </Container>
            </div>
        )
    }
}