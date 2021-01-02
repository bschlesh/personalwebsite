import React from 'react';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import '../css/components/WorkExperience.css';
import content from '../pages/work_experience_content';

function WorkExperience() {
    return (
        <div className="work-experience-container">
            <h2>Work Experience</h2>
            <Slider classNames={horizontalCss}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="center">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default WorkExperience;
