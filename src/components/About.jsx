import React from 'react';
import '../css/components/About.css';
import { Paper } from '@material-ui/core';

export default class About extends React.Component {
    render(){
        return (
            <div id="about-me-container" className="about-me-container">
                <h2 id="about-me-header" className="about-me-header">
                    About Me
                </h2>
                <Paper variant="elevation" square>
                    <p id="about-me-text" className="about-me-text">
                        Hello! I'm Brett, a Cornell University student studying Computer Science and Business. <br />
                        I enjoy data science and front-end web development. Here are some fun facts about me:
                    </p>
                    <ul id="fun-facts-list" className="fun-facts-list">
                        <li>I have travelled to 19 countries.</li>
                        <li>I have a cute dog named Grady.</li>
                        <li>I love making cold brew, and I'm on a mission for the perfect recipe. </li>
                        <li>I enjoy fitness and I work out quite frequently - some might say it's an addiction. </li>
                    </ul>
                </Paper>
            </div>
        );
    };
};