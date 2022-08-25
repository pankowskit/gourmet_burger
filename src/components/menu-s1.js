import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class MenuS1 extends Component{
    render(){
        return(    
            <Container fluid className="menu-s1 d-flex minh-50vh align-items-center py-5 bg-dark">
                <Row className="mx-0 w-100 mt-5">
                    <Col xs={12} md={7} className="minh-25vh d-none d-md-block"></Col>
                    <Col xs={12} md={5} className="minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-start pt-5">
                            <h2 className="dispaly-6 fw-bold text-dark">
                                Dolor sit amet         
                            </h2>
                            <p className="text-dark">
                                Sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MenuS1;
