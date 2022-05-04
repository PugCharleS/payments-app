import moment from "moment";
import { Component } from "react";

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
            <div>
                <h1>Home</h1>
                <table>
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
                </table>
                <br/><br/><br/>
            </div>
        )
    }
}