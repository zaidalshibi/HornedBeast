import React from "react";
import HornedBeasts from "./horned-beast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



class Main extends React.Component {


    render() {
        return (
            <Row xs={2} md={3} className="g-4">
                {this.props.data.map((item) => {
                    return (
                        <Col key={item._id}>
                            <HornedBeasts image_url={item.image_url} title={item.title} description={item.description} arr={item} selectedBeast={this.props.selectedBeast} />
                        </Col>
                    )
                }
                )
                }
            </Row>
        )
    }
}
export default Main;