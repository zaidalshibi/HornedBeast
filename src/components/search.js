import React from "react";
import Form from 'react-bootstrap/Form';



class Search extends React.Component {
    hornsValue = (item) => {
        this.props.horns(item.target.value)
    }
    render() {
        return (
            <>
            <Form.Select aria-label="Default select example" onChange={this.hornsValue}>
                <option value="0" >All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
            </Form.Select>
            </>
        );
    }
}

export default Search;