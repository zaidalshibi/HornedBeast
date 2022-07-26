import React from "react";
import HornedBeasts from "./horned-beast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from '../data.json';



class Main extends React.Component {
        handleSelected = (item) => {
            this.props.selectedBeast(item);
        }
        handleClick = (item) => {
            this.props.showModal(item);
        }

    render() {
        return (
            <Row xs={2} md={3} className="g-4">
                { data.map((item) => {
                        return (
                            <Col>
                                <HornedBeasts image_url={item.image_url} title={item.title} description={item.description} selectedBeast={this.handleSelected} modalShow={this.handleClick} arr={item} />
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