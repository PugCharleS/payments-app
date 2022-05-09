import { Dropdown } from "bootstrap";
import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../src/App.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        {/* <Navbar expand="lg" variant="light" bg="dark" sticky="top">
          <Container>
            <Navbar.Brand>
              <Link to="/" className="home_link">
                Home
              </Link>
            </Navbar.Brand>

            <NavDropdown title="Payments" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/payments-due" className="link">
                  Payments Due
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/payments-made" className="link">
                  Payments Made
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/payments-due" className="link">
                  Payments Due
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/payments-made" className="link">
                  Payments Made
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/add-user" className="link">
                  Add User
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/users" className="link">
                  User List
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/add-project" className="link">
                  Add Project
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/projects" className="link">
                  Project List
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/add-vendor" className="link">
                  Add Vendor
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/vendors" className="link">
                  Vendor List
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/add-order" className="link">
                  Add Order
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/orders" className="link">
                  Order List
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar> */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/" className="link" style={{ fontSize: "45px" }}>
                SpringBoot & React ERP
              </Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div class="area"></div>
        <nav class="main-menu">
          <ul>
            <li>
              <a href="">
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">
                  {" "}
                  <Link to="/" className="link">
                    Home
                  </Link>
                </span>
              </a>
            </li>

            <li class="has-subnav">
              <a href="#">
                <i class="fa fa-solid fa-credit-card fa-2x"></i>
                <span class="nav-text">
                  <Link to="/payments-due" className="link">
                    Payments Due
                  </Link>
                </span>
              </a>
            </li>
            <li class="has-subnav">
              <a href="#">
                <i class="fa fa-solid fa-credit-card fa-2x"></i>
                <span class="nav-text">
                  <Link to="/payments-made" className="link">
                    Payments Made
                  </Link>
                </span>
              </a>
            </li>
            <li class="has-subnav">
              <a href="#">
                <i class="fa fa-solid fa-address-book fa-2x"></i>
                <span class="nav-text">
                  <Link to="/users" className="link">
                    User List
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-solid fa-address-book fa-2x"></i>
                <span class="nav-text">
                  <Link to="/add-user" className="link">
                    Add User
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-table fa-2x"></i>
                <span class="nav-text">
                  <Link to="/projects" className="link">
                    Project List
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-table fa-2x"></i>
                <span class="nav-text">
                  <Link to="/add-project" className="link">
                    Add Project
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-solid fa-address-book fa-2x"></i>
                <span class="nav-text">
                  <Link to="/vendors" className="link">
                    Vendor List
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-solid fa-address-book fa-2x"></i>
                <span class="nav-text">
                  <Link to="/add-vendor" className="link">
                    Add Vendor
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-info fa-2x"></i>
                <span class="nav-text">
                  <Link to="/orders" className="link">
                    Order List
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-info fa-2x"></i>
                <span class="nav-text">
                  <Link to="/add-order" className="link">
                    Add Order
                  </Link>
                </span>
              </a>
            </li>
          </ul>

          <ul class="logout">
            <li>
              <a href="#">
                <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
