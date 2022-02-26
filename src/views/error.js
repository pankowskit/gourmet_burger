import {Container} from "react-bootstrap";
import ErrorS1 from "../components/error-s1";

function Error(props){
    return(
        <Container fluid className="error-s1 minh-footer-adj bg-dark d-flex align-items-center py-5">
            <ErrorS1 
                backLink = {props.errorData.backLink}
                backName = {props.errorData.backName}
                code={props.errorData.code}
                text={props.errorData.text}
            />
        </Container>
    );
}

export default Error;