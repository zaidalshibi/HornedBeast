import React from "react";
import Cards from "./cards";


class HornedBeasts extends React.Component {
    render() {
        return (
            <>
                <Cards title={this.props.title} image_url={this.props.imgUrl}  description={this.props.description}/>
            </>
        )
    }
}

export default HornedBeasts;