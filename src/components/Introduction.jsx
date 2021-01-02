import React from 'react';
import '../css/components/Introduction.css';

export default class Introduction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: true
        }
    }

    render() {
        return (
            <div id="intro-container" className="intro-container container">
                <div id="welcome" className="welcome">
                    <h1 id="welcome-name" className="welcome-name">Hi, I'm Brett Schlesinger!</h1>
                    <p id="welcome-text" className="welcome-text">
                        A Cornell University student with a passion for big data and front-end web development.
                    </p>
                </div>
            </div>
        )
    };
}