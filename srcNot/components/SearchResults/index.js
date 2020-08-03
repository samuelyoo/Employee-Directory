import React from "react";
import EmployeeDetails from "../EmployeeDetails";
import Row from "../Row"
import Col from "../Col"
import Card from "../Card"
import "./style.css";

function SearchResults(props) {
  return (
    <Row>
      <Col size="md-12">
        <Card>
          {[...this.state.result]
            .filter((item) => {
              return (
                item.name.first.toLowerCase().indexOf(this.state.search) > -1
              );
            })
            .map((res, index) => (
              <div>
                {" "}
                <EmployeeDetails
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
