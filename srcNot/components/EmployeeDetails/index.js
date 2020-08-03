import React from "react";
import Col from "../Col";
import Row from "../Row";

function EmployeeDetails(props){
    return(
        <Row>
            <Col size="md-2">
            <img alt={props.firstname} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
            </Col>
            <Col size="md-2">
            <h5>{props.firstname}</h5>
            </Col>
            <Col size="md-2">
            <h5>{props.lastname}</h5>
            </Col>
            <Col size="md-3">
            <h5>{props.email}</h5>
            </Col>
            <Col size="md-3">
            <h5>{props.phone}</h5>  
            </Col>
        </Row>
    );
}

export default EmployeeDetails;