import {Col,Container,Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Footer(){
    return(
        <footer>
            <Container fluid className="bg-dark d-flex align-items-center py-3">
                <Row className="w-100">
                    <Col xs={12} className="text-center">
                        <p className="text-white small mb-0">
                            Copyright &copy;2022 Tomasz Pankowski. 
                            <Link to="/privacy" className="text-decoration-none text-white ms-1">
                                Privacy&nbsp;policy
                            </Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;