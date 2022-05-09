import { Routes, Route } from "react-router";
import { Component } from "react";
import { PaymentsDue } from "./components/PaymentsDue";
import { PaymentsMade } from "./components/PaymentsMade";
import { Home } from "./components/Home";
import { Error404 } from "./components/Error404";
import NavBar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dashboard } from "./components/Dashboard";
import { AddUser } from "./components/AddUser";
import { Users } from "./components/Users";
import { AddProject } from "./components/AddProject";
import { Projects } from "./components/Projects";
import { AddVendor } from "./components/AddVendor";
import { Vendors } from "./components/Vendors";
import AddOrder from "./components/AddOrder";
import { Orders } from "./components/Orders";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      projects: [],
      vendors: [],
      orders: [],
    };
  }

  //data for allorders
  componentDidCatch() {
    // Fetching Orders
    fetch("http://localhost:8881/order")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      });

    // Fetching Users
    fetch("http://localhost:8881/user")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
        });
      });

    // Fetching Projects
    fetch("http://localhost:8881/project")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          projects: data,
        });
      });

    // Fetching Vendors
    fetch("http://localhost:8881/vendor")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          vendors: data,
        });
      });

    // Fetching Orders
    fetch("http://localhost:8881/order")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          orders: data,
        });
      });
  }

  addUser = (user) => {
    let userArry = this.state.users;

    fetch(`http://localhost:8881/user/register`, {
      method: "POST",
      body: JSON.stringify({
        name: user.name,
        username: user.username,
        password: user.password,
        accountType: user.accountType,
        securityQuestion: user.securityQuestion,
        securityAnswer: user.securityAnswer,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => userArry.push(data));

    this.setState({ users: userArry });
  };

  addProject = (project) => {
    let projectArry = this.state.projects;

    fetch(`http://localhost:8881/project`, {
      method: "POST",
      body: JSON.stringify({
        name: project.name,
        projectDetails: project.projectDetails,
        amountReceivable: project.amountReceivable,
        startDate: project.startDate,
        endDate: project.endDate,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => projectArry.push(data));

    this.setState({ users: projectArry });
  };

  addVendor = (vendor) => {
    let vendorArry = this.state.vendors;

    fetch(`http://localhost:8881/vendor/add`, {
      method: "POST",
      body: JSON.stringify({
        name: vendor.name,
        address: vendor.address,
        city: vendor.city,
        contact: vendor.contact,
        email: vendor.email,
        specs: vendor.specs,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => vendorArry.push(data));

    this.setState({ vendors: vendorArry });
  };

  addOrder = (order, vid, pid) => {
    let orderArry = this.state.orders;

    fetch(`http://localhost:8881/order/${vid}/${pid}`, {
      method: "POST",
      body: JSON.stringify({
        orderDetails: order.orderDetails,
        expectedDateOfFulfillment: order.expectedDateOfFulfillment,
        amount: order.amount,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => orderArry.push(data));

    this.setState({ orders: orderArry });
  };

  render() {
    return (
      <div>
        <NavBar />
        {/* <SideBar /> */}
        <Routes>
          <Route path="/" element={<Home orders={this.state.data} />} />

          {/* <Route
            path="/all-orders"
            element={<AllOrders orders={this.state.data} />}
          /> */}

          <Route
            path="/payments-due"
            element={<PaymentsDue orders={this.state.data} />}
          />
          <Route
            path="/payments-made"
            element={<PaymentsMade orders={this.state.data} />}
          />

          <Route
            path="/add-user"
            element={
              <AddUser addUser={this.addUser} users={this.state.users} />
            }
          />
          <Route path="/users" element={<Users users={this.state.users} />} />

          <Route
            path="/add-project"
            element={<AddProject addProject={this.addProject} />}
          />
          <Route
            path="/projects"
            element={<Projects projects={this.state.projects} />}
          />

          <Route
            path="/add-vendor"
            element={<AddVendor addVendor={this.addVendor} />}
          />
          <Route
            path="/vendors"
            element={<Vendors vendors={this.state.vendors} />}
          />

          <Route
            path="/add-order"
            element={
              <AddOrder
                addOrder={this.addOrder}
                vendors={this.state.vendors}
                projects={this.state.projects}
              />
            }
          />
          <Route
            path="/orders"
            element={
              <Orders
                vendors={this.state.vendors}
                projects={this.state.projects}
                orders={this.state.orders}
              />
            }
          />

          <Route path="*" element={<Error404 />} />
        </Routes>
        {/* <Dashboard orders={this.state.data} /> */}
      </div>
    );
  }
}
