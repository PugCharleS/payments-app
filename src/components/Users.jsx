import { Component } from "react";
import { Badge, Container, Table } from "react-bootstrap";

export class Users extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users
    }
  }

  render() {
    return (
      <div className="body">
        <Container className="container-sec">
          <Badge bg="light" text="dark" >
            <p className="title">Active Users</p>
          </Badge>{' '}
          <br/><br/><br/>
          <Table striped bordered hover size="sm" variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Account Type</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.users.map((user) => {
                  return(
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.accountType}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
}
