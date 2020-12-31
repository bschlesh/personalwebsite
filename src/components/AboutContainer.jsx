import React from 'react';
import { Grid } from '@material-ui/core';
import About from "./About";
import ParticlesBg from 'particles-bg'

let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 2],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "all", // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#ff0000"],
    cross: "dead", // cross or bround
    random: 15,  // or null,
    g: 3,    // gravity
    onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    }
};

export default class AboutContainer extends React.Component {
    render() {
        return (
            <div>
                <Grid
                    container
                    fluid
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{minHeight: '100vh', background: 'rgba(0,0,0,0.0)'}}
                >
                    <Grid item xs={4}>
                        <About/>
                    </Grid>
                </Grid>
                <ParticlesBg type="custom" config={config} bg={true} />
            </div>
        );
    }
}
