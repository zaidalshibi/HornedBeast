import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Modal from "./components/selected-beast";
import 'bootstrap/dist/css/bootstrap.min.css';
let arr= require('./data.json')



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: '',
      showModal: false,
      beasts: 0,
    };
  }

  handleSelect = (item) => {
    this.setState({
      showModal: true,
      selectedBeast: item
    });
  }

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  }

  filtered = (hornsNum) => {
    this.setState({
      beasts: hornsNum
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main data={arr} selectedBeast={this.handleSelect} dataSelected={this.state.beasts} filtered={this.filtered} />
        <Footer />
        <Modal
          show={this.state.showModal}
          beast={this.state.selectedBeast}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default App;
