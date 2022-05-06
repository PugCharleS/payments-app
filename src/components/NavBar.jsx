import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../src/App.css'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" className="navbar">
          <Container>
            <Navbar.Brand><Link to="/" className="home_link">Home</Link></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to="/all-orders" className="link">All Orders</Link></Nav.Link>
              <Nav.Link><Link to="/payments-due" className="link">Payments Due</Link></Nav.Link>
              <Nav.Link><Link to="/payments-made" className="link">Payments Made</Link></Nav.Link>
              <Nav.Link><Link to="/add-user" className="link">Add User</Link></Nav.Link>
              <Nav.Link><Link to="/users" className="link">User List</Link></Nav.Link>
              <Nav.Link><Link to="/add-project" className="link">Add Project</Link></Nav.Link>
              <Nav.Link><Link to="/projects" className="link">Project List</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}