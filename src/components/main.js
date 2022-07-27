import React from "react";
import HornedBeasts from "./horned-beast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Search from "./search";


class Main extends React.Component {
    filteredBeasts() {
        if (Number(this.props.dataSelected) === 0) {
            return this.props.data.map((item, index) =>
                <Col key={index}>
                <HornedBeasts image_url={item.image_url} title={item.title} description={item.description} arr={item} selectedBeast={this.props.selectedBeast} key={index} />
                </Col>
            )
        }
        else {
            return this.props.data.filter(item =>
                (item.horns === Number(this.props.dataSelected))

            ).map((item, index) => (
                    <Col key={index}>
                <HornedBeasts image_url={item.image_url} title={item.title} description={item.description} arr={item} selectedBeast={this.props.selectedBeast} key={index} />
                    </Col>
            )
            )
        }
                        }
    render() {
        return (
            <>
                <Search horns={this.props.filtered} />
                <Row xs={2} md={3} className="g-4">
                        {this.filteredBeasts()}
                    </Row>
                
            </>
        )
    }
}
export default Main;