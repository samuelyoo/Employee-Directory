import React, { Component } from "react";
import API from "../utils/Api";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import EmployeeDetails from "../components/EmployeeDetails";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: "",
  };
  // example from activities
  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = () => {
    API.search()
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getEmployeeResult(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.results);
        }
        this.setState({ results: res.data.results, error: "" });
      })
      .catch((err) => this.setState({ error: err.results }));
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <h1 className="text-center">Search Employee</h1>
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                name={this.state.name}
              />
            </Col>
          </Row>
          <Row>
            {/* <Col size="md-12">
              <Card>
                {[this.state.result]
                  .filter((item) => {
                    return (
                      item.name.first.toLowerCase().indexOf(this.state.search) >
                      -1
                    );
                  })
                  .map((res, index) => (
                    <div>
                      {" "}
                      <EmployeeDetails
                        key={index}
                        firstname={res.name.first}
                        lastname={res.name.last}
                        src={res.picture.thumbnail}
                        director={res.email}
                        phone={res.phone}
                      />{" "}
                      <hr />
                    </div>
                  ))}
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
