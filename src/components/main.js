import React from "react";
import HornedBeasts from "./horned-beast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

let arr = require('../data.json');



class Main extends React.Component {
    render() {
    return (
        <Row xs={2} md={3} className="g-4">
    {arr.map((item) => 
        {
            return (
                <Col>
                <HornedBeasts  imgUrl={item.image_url} title={item.title} description={item.description} />
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