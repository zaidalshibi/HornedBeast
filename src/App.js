import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "./components/selected-beast";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: " ",
      showModal: false,
    };
  }

  handleSelect = (item) => {
    this.setState({
      selectedBeast: item
    });
  }

  handleShow = (item) => {
    this.setState({
      showModal: item,
    });
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Main selectedBeast={this.handleSelect} showModal= {this.handleShow} />
        <Footer />
        <Modal
          show={this.state.showModal}
          beast={this.state.selectedBeast}
          handleClose={this.handleShow}
        />
      </div>
    );
  }
}

export default App;
