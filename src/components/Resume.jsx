import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";

const StyledButton = withStyles({
  root: {
    background: "#a93333",
    border: 0,
    height: 50,
    margin: "5px",
    padding: "10px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    font: "opensans-bold",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  label: {
    textTransform: "capital",
  },
})(Button);

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>

        <div className="row download">
          <Grid
            container
            spacing={16}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <a href="https://www.dropbox.com/s/sl73v5zkp0vmwsv/brettresumeupdatedNOV2020.pdf?dl=0">
              <StyledButton className="download-button">
                Download Resume
              </StyledButton>
            </a>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Resume;
