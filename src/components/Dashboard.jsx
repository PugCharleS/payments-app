import { Component } from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'

export class Dashboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orders,
    }
  }

  sumPayments() {
    let totals = [0,0,0];
    for (const order of this.state.orders) {
      if (order.payment.status === 'UNPAID')
        totals[0] += order.amount
      if (order.payment.status === 'PAID')
        totals[1] += order.amount
    }
    return totals;
  }

  render(){
    const options={
      AnimationEnabled:true,
      theme: "dark2",
      title:{
        text: "Total orders " + this.state.orders.length
      },
      axisX:{
        title: "Orders",
        reversed: true,
      },
      axisY:{
        title: "Total of budget",
        includeZero: true,
        labelFormatter: this.addSymbols
      },
      data: [{
        type: "bar",
        dataPoints:[
        {y: this.sumPayments()[1], label: "Paids"},
        {y: this.sumPayments()[0], label: "Unpaids"},
        ]
      }]
    }
    return(
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}