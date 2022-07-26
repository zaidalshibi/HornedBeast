import React from "react";
import Modal from 'react-bootstrap/Modal';

class ModalRender extends React.Component {
    handleClose = () => {
        this.props.handleClose(false);
    }
   
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.beast.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.beast.image_url} alt={this.props.beast.title} style= {{width : '100%', height : '300px'}}/>
                        <h4>{this.props.beast.title}</h4>
                        <h5>Description : {this.props.beast.description}</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={this.handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


export default ModalRender;