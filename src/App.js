import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
// import BounceLoader from "react-spinners/ClipLoader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };
    this.setState({
      isLoading: true,
    });

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({resumeData: data, isLoading: false});
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    // this.setState({isLoading: true});
    this.getResumeData();
  }

  render() {
    return (
        <div>
          {/*{this.state.isLoading && <BounceLoader*/}
          {/*    size={150}*/}
          {/*    color={"#770219"}*/}
          {/*    loading={this.state.isLoading}*/}
          {/*/>}*/}
          {/*{!this.state.isLoading && (*/}
              <div className="App">
                <Header data={this.state.resumeData.main}/>
                <About data={this.state.resumeData.main}/>
                <Resume data={this.state.resumeData.resume}/>
                <Portfolio data={this.state.resumeData.portfolio}/>
                <Contact data={this.state.resumeData.main}/>
                <Footer data={this.state.resumeData.main}/>
              </div>
          {/*)}*/}
        </div>
    );
  }
}

export default App;
