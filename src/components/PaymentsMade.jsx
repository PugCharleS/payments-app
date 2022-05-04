import { Component } from "react";

export class PaymentsMade extends Component {
    constructor(props) {
        super(props);
        this.state = {
          orders: this.props.orders,
        }
    }

    render() {
        return (
            <div>
                <h1>Payments Made</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Order Details</th>
                            <th>Expected Date Of Fulfillment</th>
                            <th>Amount</th>
                            <th>Vendor</th>
                            <th>Project</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            this.state.orders
                            .filter((order) => order.payment.status === 'PAID')
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
                                        <td>{order.status}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
