import React from "react";
import HornedBeasts from "./horned-beast";
let arr = require('../data.json');


class Main extends React.Component {
    render() {
    return (
        <>
    {arr.map((item) => 
        {
            return (
                <HornedBeasts  imgUrl={item.image_url} title={item.title} description={item.description} />
            )
        }
        )
    }
        </>
    )
    }
}
export default Main;