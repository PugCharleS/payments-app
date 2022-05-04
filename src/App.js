import { Routes, Route } from "react-router";
import { Component } from "react";
import { AllOrders } from "./components/AllOrders";
import { PaymentsDue } from "./components/PaymentsDue";
import { PaymentsMade } from "./components/PaymentsMade";
import { Home } from "./components/Home";
import NavBar from "./components/NavBar";
import { Error404 } from "./components/Error404";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

 //data for allorders
  componentDidCatch(){
    fetch('http://localhost:8881/order')
    .then(response => response.json())
    .then(data=>{
      this.setState({
        data: data,
      });
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home orders={this.state.data} />} />
          <Route path="/all-orders" element={<AllOrders orders={this.state.data} />} />
          <Route path="/payments-due" element={<PaymentsDue orders={this.state.data}/>} />
          <Route path="/payments-made" element={<PaymentsMade orders={this.state.data} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    );
  }
}

