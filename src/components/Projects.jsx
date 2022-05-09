import { Component } from "react";
import { Badge, Card, Container, Table } from "react-bootstrap";

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects,
    };
  }

  render() {
    return (
      <div className="body">
        <Container className="container-sec">
          <Card className="text-center">
            <Card.Header>
              <Badge bg="light" text="dark">
                <p className="title">Projects</p>
              </Badge>{" "}
            </Card.Header>
            <Card.Body>
              <br />
              <Table striped bordered hover size="" variant="light">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Project Details</th>
                    <th>Amount Receivable</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.projects.map((project) => {
                    return (
                      <tr key={project.id}>
                        <td>{project.id}</td>
                        <td>{project.name}</td>
                        <td>{project.projectDetails}</td>
                        <td>{project.amountReceivable}</td>
                        <td>{project.startDate}</td>
                        <td>{project.endDate}</td>
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
