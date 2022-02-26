import {Col,Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function ErrorS1(props){
    return(
        <Row className="w-100 m-0 mt-5">
            <Col xs={12} sm={10} md={7} lg={6} xl={5} className="mx-auto text-center text-white">
                <h1 className="display-6">
                    Error {(props.code!==undefined)?props.code:"unknown"}
                </h1>
                <p className="lead">
                    {(props.text!==undefined)?props.text:"Uknown error occured!"}
                </p>
                <div className="w-100 text-center">
                    <Link to={(props.backLink!==undefined)?props.backLink:"/"} 
                        className="btn btn-outline-light rounded-pill">
                        back to 
                        <span className="fw-bold">
                            {(props.backName!==undefined)?props.backName:"Home"}
                        </span>
                    </Link>
                </div>
            </Col>
        </Row>
    );
}

export default ErrorS1;
