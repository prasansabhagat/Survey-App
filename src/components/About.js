import React, { Component } from 'react';
 
export class About extends Component {
    static defaultProps = {
        title: "Hand Gesture Glove",
        icon: 'fab fa-github'
    };
    render() {
        return (
            <div >
            <div>
                <img src="https://thumbs.dreamstime.com/b/cartoon-glove-hand-arm-comic-hand-finger-cartoon-glove-hand-arm-comic-hands-finger-gestures-vector-palm-show-226374059.jpg" height={300} width={100}></img>
            </div>
            <div></div>
            </div>
        );
    }
}
export default About;
