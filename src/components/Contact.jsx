import React, {Component} from "react";
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
init("user_QhN7AOkbSQErquYt1FIaq");

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    buttonMessage: "Submit"
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      name: name,
      from_name: email,
      to_name: 'Brett',
      subject: subject,
      message: message,
    };
    emailjs.send(
      "service_7ck9lie",
      "template_4gradre",
      templateParams,
      "user_QhN7AOkbSQErquYt1FIaq"
    );
    this.setState({buttonMessage: "Thank You!"});
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      buttonMessage: "Submit"
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    if (this.props.data) {
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form
              onSubmit={this.handleSubmit.bind(this)}
              id="contactForm"
              name="contactForm"
            >
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={this.state.name}
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={this.handleChange.bind(this, "name")}
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={this.state.email}
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.handleChange.bind(this, "email")}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
                  <input
                    type="text"
                    value={this.state.subject}
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.handleChange.bind(this, "subject")}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    value={this.state.message}
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    onChange={this.handleChange.bind(this, "message")}
                  ></textarea>
                </div>

                <div>
                  <button className="submit" type="submit">
                    {this.state.buttonMessage}
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
