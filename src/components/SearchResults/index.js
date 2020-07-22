import React from "react";
import EmployeeDetails from "../EmployeeDetails";
import "./style.css";

function SearchResults(props) {
  return (
    <Row>
      <Col size="md-12">
        <Card heading={"Employees List"}>
          {/* to sort the table */}
          {[...this.state.result]
            .filter((item) => {
              return (
                item.name.first.toLowerCase().indexOf(this.state.search) > -1
              );
            })
            .map((res, index) => (
              <div>
                {" "}
                <EmpDetail
                  key={index}
                  firstname= {res.name.first}
                  lastname= {res.name.last}
                  src={res.picture.thumbnail}
                  director={res.email}
                  age={res.dob.age}
                  phone={res.phone}
                />{" "}
                <hr />
              </div>
            ))}
        </Card>
      </Col>
    </Row>
  );
}

export default SearchResults;
