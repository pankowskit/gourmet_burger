import {Col,Row} from "react-bootstrap";

function ComingsoonS1(){
    return(
        <Row className="w-100 m-0 mt-5">
            <Col xs={12} sm={10} md={7} lg={6} xl={5} className="mx-auto text-center text-white">
                <h1 className="display-6">
                    Coming soon
                </h1>
                <p className="lead">
                    We are not ready yet, but starting soon. Please visit us again
                    in a while.
                </p>
            </Col>
        </Row>
    );
}

export default ComingsoonS1;