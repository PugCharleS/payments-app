import { Routes, Route } from "react-router";
import { Component } from "react";
import { AllOrders } from "./components/AllOrders";
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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      projects: [],
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

  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home orders={this.state.data} />} />
          <Route
            path="/all-orders"
            element={<AllOrders orders={this.state.data} />}
          />
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
            element={<AddUser addUser={this.addUser} />}
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
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Dashboard orders={this.state.data} />
      </div>
    );
  }
}
