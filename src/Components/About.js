import React, { Component } from "react";
import Button from '@material-ui/core/Button'
import {withStyles} from "@material-ui/core";

const StyledButton = withStyles({
  root: {
    background: "#CE092A",
    border: 0,
    height: 50,
    margin: "5px",
    padding: "10px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    font: 'opensans-bold',
    fontSize: 15,
    fontWeight: 'bold',
    color: "white",
    resize: "auto",
  },
  label: {
    textTransform: "capital",
  },
})(Button);

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Tim Baker Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload}>
                    <StyledButton>
                      Download Resume
                    </StyledButton>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
