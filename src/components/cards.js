import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './mystyle.module.css';



class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        };
      }
    
      handleClick = () => {
        this.setState({
          count: this.state.count + 1,
        });
    }
    render() {
        return (
            <Card className={styles.card}>
                    <Card.Img variant="top" src={this.props.image_url} className={styles.img} onClick={this.handleClick} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                <div className={styles.div2}>{this.state.count} ❤️</div>
                </Card.Body>
            </Card>
        );
    }
}

export default Cards;

