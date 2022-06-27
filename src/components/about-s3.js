import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutS3 extends Component{
    render(){
        return( 
            <Container fluid className="about-s3 bg-dark d-flex minh-50vh align-items-center py-5">
                <Row className="mx-0 w-100 px-3 text-shadow">
                    <Col xs={12} className="py-3">
                        <h2 className="display-6 text-center text-md-start text-white text-uppercase">
                            Lorem ipsum dolor
                        </h2>
                    </Col>
                    <Col xs={12} md={3} className="mx-auto text-center text-md-start">
                        <p className="initialism text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat.
                        </p>
                    </Col>
                    <Col md={1} className="d-none d-md-block mx-auto">
                        <div class=" border-start mx-auto h-100 w-25"></div>
                    </Col>
                    <Col xs={12} md={3} className="text-center text-md-start">
                        <p className="initialism text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat.
                        </p>
                    </Col>
                    <Col md={1} className="d-none d-md-block mx-auto">
                        <div class=" border-start mx-auto h-100 w-25"></div>
                    </Col>
                    <Col xs={12} md={3} className="mx-auto text-center text-md-start">
                        <p className="initialism text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AboutS3;
