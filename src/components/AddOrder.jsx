import { Component } from "react";

export default class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: this.props.vendors,
      projects: this.props.projects,
      orders: this.props.orders
    }
  }
}