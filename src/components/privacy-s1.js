import {Card,Col,Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function PrivacyS1(){
    return(
        <Row className="w-100 m-0 mt-5">
            <Col xs={12} sm={9} md={8} lg={6} className="mx-auto">
                <Card className="text-center text-white bg-dark border-secondary shadow opacity-9">
                    <Card.Header>
                        <h1 className="h4">
                            Privacy Policy
                        </h1>
                    </Card.Header>
                    <Card.Body className="px-4 text-start initialism">
                        <p className="mt-3">
                            This website is a demo version of real website, It doesn't collect and process, 
                            in long term meaning (longer than needed for website operation during visitor's 
                            presence), any user (visitor) data. All information collected during visitor's 
                            presence on this website is used only for technical purposes, required for correct 
                            operation of website or demonstration purposes related to technical mechanisms 
                            and presentation of its operation.
                        </p>
                        <p className="mt-3">
                            All data stored in cookies is directly related to saved visitor's settings 
                            for website's mechanisms, and can be managed by visitor with functionality 
                            provided by visitor's web browser - in order to get more information visitor 
                            should check web browser's manual.
                        </p>
                        <p className="mt-3">
                            However this website may contain attached third-party addons (like for 
                            example: scripts added by hosting services provider) which may collect 
                            visitors data for security and technical purposes. In order to know more 
                            about them, visitor should visit hosting provider's website and check 
                            privacy policy related to collected data.
                        </p>
                        <p className="mt-3">
                            All materials used for creation of this website were acquired from legal 
                            resources. Any convergences and similarities with any materials presented 
                            on other websites or resources are accidental.
                        </p>
                    </Card.Body>
                    <Card.Footer className="border-top text-center">
                        <Link to="/" className="btn btn-sm btn-outline-light rounded-pill my-2">
                            back to <span className="fw-bold">Home</span>
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    );
}

export default PrivacyS1;