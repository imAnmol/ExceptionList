import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'reactstrap';

function Navigation(){
    return(
        <div>
            <Container>
                <Row>
                    <Col md={2}>TEMA</Col>
                    <Col >Search</Col>
                    <Col>Notification</Col>
                    <Col>Profile</Col>
          
                </Row>
            </Container>
        
        </div>
    )
}

export default Navigation;