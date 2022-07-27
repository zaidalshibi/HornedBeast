import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Modal from "./components/selected-beast";
import beasts from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: '',
      showModal: false,
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

  render() {
    return (
      <div className="App">
        <Header />
        <Main data={beasts} selectedBeast={this.handleSelect} />
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
