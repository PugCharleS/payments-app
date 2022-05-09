import { Component } from "react";
import { Badge, Card, Container, Table } from "react-bootstrap";

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
    };
  }

  render() {
    return (
      <div className="body">
        <Container className="container-sec">
          <Card className="text-center">
            <Card.Header>
              <Badge bg="light" text="dark">
                <p className="title">Users</p>
              </Badge>{" "}
            </Card.Header>
            <Card.Body>
              <br />
              <Table striped bordered hover size="" variant="light">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Account Type</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.accountType}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer className="text-muted">
              @Developed by PugCharl3S
            </Card.Footer>
          </Card>
        </Container>
      </div>
    );
  }
}
