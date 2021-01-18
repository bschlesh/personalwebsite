import React, { Component } from "react";
import { Link } from "react-scroll";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="nav-item">
              <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                  activeClass="active"
                  to="resume"
                  spy={true}
                  smooth={true}
                  duration={500}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
              >
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>
              I'm a <span>{occupation}</span> based in {city}. {description}.
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
          >
            <i className="icon-down-circle" />
          </Link>
        </p>
      </header>
    );
  }
}

export default Header;
