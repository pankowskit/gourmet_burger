import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Table from "../../node_modules/react-bootstrap/Table";

class MenuS2 extends Component{
    render(){
        return(    
            <Container fluid className="menu-s2 d-flex minh-50vh bg-white align-items-center py-5">
                <Row className="mx-0 w-100">
                    <Col xs={12} md={6} className="mx-auto minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center">
                            <h2 className="dispaly-6 fw-bold text-secondary">
                                Lorem ipsum
                            </h2>
                            <p className="text-muted">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                                anim id est laborum.
                            </p>
                            <Table hover striped>
                                <thead>
                                    <tr className="text-secondary">
                                        <th className="w-25">Name</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MenuS2;
