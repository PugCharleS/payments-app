import moment from "moment";
import { Component } from "react";
import { Badge, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export class PaymentsDue extends Component {

    constructor(props) {
        super(props);
        this.state = {
          orders: this.props.orders,
          date: moment().format('YYYY-MM-DD')
        }
    }

    payNow(id) {
        fetch(`http://localhost:8881/order/payment/status/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        
        setTimeout(() => {
            window.location.reload()
        }, 100);
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
                                <th>ID</th>
                                <th>Order Details</th>
                                <th>Expected Date Of Fulfillment</th>
                                <th>Amount</th>
                                <th>Vendor</th>
                                <th>Project</th>
                                <th>Payment</th>
                                <th>Pay Now</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                this.state.orders
                                .filter((order) => order.payment.status === 'UNPAID')
                                // .filter((order) => this.state.date <= order.expectedDateOfFulfillment)
                                .map((order) => {
                                    return(
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.orderDetails}</td>
                                            <td>{order.expectedDateOfFulfillment}</td>
                                            <td>{order.amount}</td>
                                            <td>{order.vendor.name}</td>
                                            <td>{order.project.name}</td>
                                            <td>{order.payment.status}</td>
                                            <td><Link to="/payments-made" onClick={() => this.payNow(order.id)}>Pay Now</Link></td>
                                            <td>{order.status}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}