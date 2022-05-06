import { Component } from "react";
import { Badge, Container, Table } from "react-bootstrap";

export class Projects extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects
    }
  }

  render() {
    return (
      <div className="body">
        <Container className="container-sec">
          <Badge bg="light" text="dark" >
            <p className="title">Active projects</p>
          </Badge>{' '}
          <br/><br/><br/>
          <Table striped bordered hover size="sm" variant="dark">
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
              {
                this.state.projects.map((project) => {
                  return(
                    <tr key={project.id}>
                      <td>{project.id}</td>
                      <td>{project.name}</td>
                      <td>{project.projectDetails}</td>
                      <td>{project.amountReceivable}</td>
                      <td>{project.startDate}</td>
                      <td>{project.endDate}</td>
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
